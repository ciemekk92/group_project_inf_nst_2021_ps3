import { UserRepository } from '../../../../domain/user/UserRepository';
import { User } from '../../../../domain/user/User';
import { UserModel } from './UserModel';
import { Op } from 'sequelize';
import { userToDomain } from './UserMapper';

export class SeqUserRepository implements UserRepository {
  async save({
    id,
    email,
    password,
    firstName,
    active,
    lastName,
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
      return foundUser.save().then((u) => userToDomain(u));
    }

    return new UserModel({
      id,
      email,
      password,
      firstName,
      active,
      lastName,
      displayName,
      refreshToken
    })
      .save()
      .then((u) => userToDomain(u));
  }

  async findByEmail(email: string): Promise<User | undefined> {
    return UserModel.findOne({
      where: {
        email: {
          [Op.like]: '%' + email + '%'
        }
      }
    }).then((u) => (!!u ? userToDomain(u) : undefined));
  }

  async findById(id: UUID): Promise<User | undefined> {
    return UserModel.findByPk(id).then((u) => userToDomain(u));
  }
}
