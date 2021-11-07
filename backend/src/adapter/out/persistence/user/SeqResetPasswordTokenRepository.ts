import { ResetPasswordToken } from '../../../../domain/user/ResetPasswordToken';
import { ResetPasswordTokenRepository } from '../../../../domain/user/ResetPasswordTokenRepository';
import { ResetPasswordTokenModel } from './ResetPasswordTokenModel';

export class SeqResetPasswordTokenRepository implements ResetPasswordTokenRepository {
  async save({ user, value }: ResetPasswordToken): Promise<ResetPasswordToken> {
    return new ResetPasswordTokenModel({ userId: user.id, user, value })
      .save()
      .then((t) => new ResetPasswordToken(user, value));
  }

  async findByValue(value: string): Promise<ResetPasswordToken | null> {
    return ResetPasswordTokenModel.findOne({
      where: {
        value: value
      }
    }).then((m) => (m ? new ResetPasswordToken(m.user, m.value) : null));
  }
}
