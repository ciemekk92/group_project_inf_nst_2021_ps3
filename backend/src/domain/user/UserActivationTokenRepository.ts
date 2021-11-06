import { UserActivationToken } from './UserActivationToken';

export interface UserActivationTokenRepository {
  save(token: UserActivationToken): Promise<UserActivationToken>;
}
