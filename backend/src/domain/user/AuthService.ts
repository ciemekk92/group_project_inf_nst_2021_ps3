import { AuthData } from './AuthData';
import { User } from './User';
import { passwordMatches } from '../../adapter/BCrypt';
import { UserRepository } from './UserRepository';
import jwt, { Secret } from 'jsonwebtoken';

import { ApplicationError } from '../../utils/Errors';
import { UserWithAuthData } from './UserWithAuthData';

export class AuthService {
  constructor(private userRepository: UserRepository) {}

  private static async generateAccessToken(payload: object): Promise<string> {
    return AuthService.generateToken(
      payload,
      process.env.ACCESS_TOKEN_SECRET,
      parseInt(process.env.ACCESS_TOKEN_LIFE_SECONDS)
    );
  }

  static async generateAuthData(user: User): Promise<AuthData> {
    const payload = { id: user.id };

    return new AuthData(
      ...(await Promise.all([
        AuthService.generateAccessToken(payload),
        AuthService.generateRefreshToken(payload)
      ]))
    );
  }

  private static async generateRefreshToken(payload: object): Promise<string> {
    return AuthService.generateToken(
      payload,
      process.env.REFRESH_TOKEN_SECRET,
      parseInt(process.env.REFRESH_TOKEN_LIFE_SECONDS)
    );
  }

  async login(email: string, plainPassword: string): Promise<UserWithAuthData> {
    const user: User | undefined = await this.userRepository.findActiveByEmail(email);
    if (user && (await passwordMatches(plainPassword, user.password))) {
      const authData: AuthData = await AuthService.generateAuthData(user);
      user.refreshToken = authData.refreshToken;
      await this.userRepository.save(user);

      return new UserWithAuthData(authData, user);
    }
    throw new ApplicationError(401, 'Invalid credentials.');
  }

  private static async generateToken(
    payload: object,
    secret: Secret,
    expiresInSeconds: number
  ): Promise<string> {
    return jwt.sign(payload, secret, {
      algorithm: 'HS256',
      expiresIn: expiresInSeconds
    });
  }

  async refresh(userId: UUID, oldRefreshToken: string): Promise<AuthData> {
    const user: User | undefined = await this.userRepository.findById(userId);
    if (!user || !user.refreshToken || user.refreshToken !== oldRefreshToken) {
      throw new ApplicationError(400, 'Access or refresh token is invalid.');
    }
    const authData: AuthData = await AuthService.generateAuthData(user);
    user.refreshToken = authData.refreshToken;
    await this.userRepository.save(user);

    return authData;
  }
}
