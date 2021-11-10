import { User } from './User';

export interface UserRepository {
  save(user: User): Promise<User>;

  findActiveByEmail(email: string): Promise<User | null>;

  findById(id: UUID): Promise<User | null>;

  findByIdActive(id: UUID): Promise<User | null>;
}
