import { User } from './User';
import { UserRepository } from './UserRepository';
import { ApplicationError } from '../../utils/Errors';
import { hashPassword } from '../../adapter/BCrypt';
import { UserActivationTokenRepository } from './UserActivationTokenRepository';
import { UserActivationToken } from './UserActivationToken';
import { getRandomUUID } from '../../utils/Globalo';

export class UserService {
  constructor(
    private userRepository: UserRepository,
    private userActivationTokenRepository: UserActivationTokenRepository
  ) {}

  async save(email: string, password: string): Promise<void> {
    const existingUser: User | undefined = await this.userRepository.findByEmail(email);
    if (existingUser) {
      throw new ApplicationError(400, 'User with given email already exists.');
    }

    const userId: UUID = getRandomUUID();

    await this.userRepository.save(new User(userId, await hashPassword(password), email));

    const token = await this.userActivationTokenRepository.save(
      new UserActivationToken(userId, getRandomUUID())
    );
  }
}
