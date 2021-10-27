import { UserRepository } from '../../../../domain/user/UserRepository';
import { User } from '../../../../domain/user/User';
import { UserModel } from './UserModel';
import { userToDomain } from './UserMapper';
import { Op } from 'sequelize';

export class SeqUserRepository implements UserRepository {
  async save({
    id,
    firstName,
    lastName,
    password,
    email,
    displayName,
    refreshToken
  }: User): Promise<User> {
    const foundUser = await UserModel.findByPk(id);
    if (foundUser) {
      foundUser.firstName = firstName;
      foundUser.lastName = lastName;
      foundUser.password = password;
      foundUser.email = email;
      foundUser.displayName = displayName;
      foundUser.refreshToken = refreshToken;
      return await foundUser.save();
    }

    return new UserModel({ id, firstName, lastName, password, email, displayName })
      .save()
      .then((model) => userToDomain(model));
  }

  async findByEmail(email: string): Promise<User | undefined> {
    return UserModel.findOne({
      where: {
        email: {
          [Op.like]: '%' + email + '%'
        }
      }
    });
  }
}
