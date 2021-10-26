import { User } from './User';
import { CreateUserCommand } from './CreateUserCommand';

export interface UserRepository {
  save(user: User): Promise<User>;

  findByEmail(email: string): Promise<User | undefined>;
}
