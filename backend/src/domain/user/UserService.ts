import { User } from './User';
import { UserRepository } from './UserRepository';
import { CreateUserCommand } from './CreateUserCommand';
import { ApplicationError } from '../../utils/Errors';
import { hashPassword } from '../../adapter/BCrypt';
import { randomUUID } from 'crypto';
import { UUID } from '../../utils/Types';

export class UserService {
  constructor(private userRepository: UserRepository) {}

  async save(command: CreateUserCommand): Promise<User> {
    const existingUser: User | undefined = await this.userRepository.findByEmail(command.email);
    if (existingUser) {
      throw new ApplicationError(400, 'User with given email already exists.');
    }
    if (!command.displayName) {
      command.displayName = command.firstName + ' ' + command.lastName;
    }
    command.password = await hashPassword(command.password);

    return this.userRepository.save(
      new User(
        randomUUID() as UUID,
        command.firstName,
        command.lastName,
        command.password,
        command.email,
        command.displayName
      )
    );
  }
}
