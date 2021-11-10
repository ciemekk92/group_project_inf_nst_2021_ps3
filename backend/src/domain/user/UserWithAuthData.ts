import { AuthData } from './AuthData';
import { User } from './User';

export class UserWithAuthData {
  authData: AuthData;
  user: User;

  constructor(authData: AuthData, user: User) {
    this.authData = authData;
    this.user = user;
  }
}
