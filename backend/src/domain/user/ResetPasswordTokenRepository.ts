import { ResetPasswordToken } from './ResetPasswordToken';

export interface ResetPasswordTokenRepository {
  save(token: ResetPasswordToken): Promise<ResetPasswordToken>;

  findByValue(value: string): Promise<ResetPasswordToken | null>;
}
