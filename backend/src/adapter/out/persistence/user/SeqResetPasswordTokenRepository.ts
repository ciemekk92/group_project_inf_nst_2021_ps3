import { ResetPasswordToken } from '../../../../domain/user/ResetPasswordToken';
import { ResetPasswordTokenRepository } from '../../../../domain/user/ResetPasswordTokenRepository';
import { ResetPasswordTokenModel } from './ResetPasswordToken.model';
import { UserModel } from './User.model';
import { userToDomain } from './UserMapper';

export class SeqResetPasswordTokenRepository implements ResetPasswordTokenRepository {
  async save({ user, value }: ResetPasswordToken): Promise<ResetPasswordToken> {
    return new ResetPasswordTokenModel({ userId: user.id, user, value })
      .save()
      .then((t) => new ResetPasswordToken(user, value));
  }

  async findByValue(value: string): Promise<ResetPasswordToken | null> {
    return ResetPasswordTokenModel.findOne({
      include: [UserModel],
      where: {
        value: value
      }
    }).then((m) => (m ? new ResetPasswordToken(userToDomain(m.user), m.value) : null));
  }
}
