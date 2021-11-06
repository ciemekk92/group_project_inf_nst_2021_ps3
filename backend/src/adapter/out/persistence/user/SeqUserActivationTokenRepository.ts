import { UserActivationTokenRepository } from '../../../../domain/user/UserActivationTokenRepository';
import { UserActivationToken } from '../../../../domain/user/UserActivationToken';
import { UserActivationTokenModel } from './UserActivationTokenModel';

export class SeqUserActivationTokenRepository implements UserActivationTokenRepository {
  async save({ userId, value }: UserActivationToken): Promise<UserActivationToken> {
    return new UserActivationTokenModel({ userId, value })
      .save()
      .then((t) => new UserActivationToken(userId, value));
  }
}
