import { User } from './User';
import { UserRepository } from './UserRepository';
import { ApplicationError } from '../../utils/Errors';
import { hashPassword } from '../../adapter/BCrypt';
import { UserActivationTokenRepository } from './UserActivationTokenRepository';
import { UserActivationToken } from './UserActivationToken';
import { getRandomUUID } from '../../utils/Globalo';
import { Email } from '../email/Email';
import { getUserRegistrationContent } from '../email/EmailContentCreator';
import { EmailSender } from '../email/EmailSender';
import { AuthService } from './AuthService';
import { AuthData } from './AuthData';

export class UserService {
  constructor(
    private userRepository: UserRepository,
    private userActivationTokenRepository: UserActivationTokenRepository,
    private emailSender: EmailSender
  ) {}

  async save(email: string, password: string): Promise<void> {
    const existingActiveUser: User | undefined = await this.userRepository.findActiveByEmail(email);
    if (existingActiveUser) {
      throw new ApplicationError(400, 'User with given email already exists.');
    }

    const userId: UUID = getRandomUUID();

    await this.userRepository.save(new User(userId, await hashPassword(password), email));

    const token = await this.userActivationTokenRepository.save(
      new UserActivationToken(userId, getRandomUUID())
    );

    await new Email(
      email,
      'Boardel registration ☺',
      getUserRegistrationContent(process.env.FRONTEND_DEV_SERVER, token.value)
    ).send(this.emailSender);
  }

  async activateUser(token: UUID): Promise<AuthData> {
    const foundToken: UserActivationToken | null =
      await this.userActivationTokenRepository.findByValue(token);
    if (!foundToken) {
      throw new ApplicationError(404, 'Token not found');
    }
    const user: User | null = await this.userRepository.findById(foundToken.userId);
    if (!user) {
      throw new ApplicationError(404, 'User not found');
    }
    user.active = true;
    await this.userRepository.save(user);

    return AuthService.generateAuthData(user);
  }
}
