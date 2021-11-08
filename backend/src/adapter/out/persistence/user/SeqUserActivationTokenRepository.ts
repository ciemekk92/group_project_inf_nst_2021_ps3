import { UserActivationTokenRepository } from '../../../../domain/user/UserActivationTokenRepository';
import { UserActivationToken } from '../../../../domain/user/UserActivationToken';
import { UserActivationTokenModel } from './UserActivationToken.model';

export class SeqUserActivationTokenRepository implements UserActivationTokenRepository {
  async save({ userId, value }: UserActivationToken): Promise<UserActivationToken> {
    return new UserActivationTokenModel({ userId, value })
      .save()
      .then((t) => new UserActivationToken(userId, value));
  }

  async findByValue(value: string): Promise<UserActivationToken | null> {
    return UserActivationTokenModel.findOne({
      where: {
        value: value
      }
    }).then((m) => (m ? new UserActivationToken(m.userId, m.value) : null));
  }
}
