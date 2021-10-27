import { AuthData } from './AuthData';
import { User } from './User';
import { passwordMatches } from '../../adapter/BCrypt';
import { UserRepository } from './UserRepository';
import jwt, { Secret } from 'jsonwebtoken';

import { ApplicationError } from '../../utils/Errors';

export class AuthService {
  constructor(private userRepository: UserRepository) {}

  private static async generateAccessToken(payload: object): Promise<string> {
    return AuthService.generateToken(
      payload,
      process.env.ACCESS_TOKEN_SECRET,
      parseInt(process.env.ACCESS_TOKEN_LIFE_SECONDS)
    );
  }

  private static async generateAuthData(user: User): Promise<AuthData> {
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

  async login(email: string, plainPassword: string): Promise<AuthData> {
    const user: User | undefined = await this.userRepository.findByEmail(email);
    if (user && (await passwordMatches(plainPassword, user.password))) {
      const authData: AuthData = await AuthService.generateAuthData(user);
      user.refreshToken = authData.refreshToken;
      await this.userRepository.save(user);
      return authData;
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
}
