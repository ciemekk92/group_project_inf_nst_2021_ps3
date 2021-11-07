import { User } from './User';

export class ResetPasswordToken {
  user: User;
  value: UUID;

  constructor(user: User, value: UUID) {
    this.user = user;
    this.value = value;
  }
}
