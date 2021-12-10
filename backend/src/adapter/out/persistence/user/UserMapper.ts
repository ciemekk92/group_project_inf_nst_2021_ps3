import { User } from '../../../../domain/user/User';
import { UserModel } from './User.model';

export const userToDomain = (dbModel: UserModel): User => {
  return new User(
    dbModel.id,
    dbModel.password,
    dbModel.email,
    dbModel.active,
    dbModel.firstName,
    dbModel.lastName,
    dbModel.displayName,
    dbModel.refreshToken,
    dbModel.profileImage
  );
};
