import { UserRepository } from '../../../../domain/user/UserRepository';
import { User } from '../../../../domain/user/User';
import { UserModel } from './User.model';
import { Op } from 'sequelize';
import { userToDomain } from './UserMapper';

export class SeqUserRepository implements UserRepository {
  async save({
    id,
    email,
    password,
    active,
    firstName,
    lastName,
    displayName,
    refreshToken
  }: User): Promise<User> {
    const foundUser = await UserModel.findByPk(id);
    if (foundUser) {
      foundUser.id = id;
      foundUser.email = email;
      foundUser.password = password;
      foundUser.active = active;
      foundUser.firstName = firstName;
      foundUser.lastName = lastName;
      foundUser.displayName = displayName;
      foundUser.refreshToken = refreshToken;
      return foundUser.save().then((u) => (u ? userToDomain(u) : null));
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

  async findActiveByEmail(email: string): Promise<User | null> {
    return UserModel.findOne({
      where: {
        email: {
          [Op.like]: '%' + email + '%'
        },
        active: true
      }
    }).then((u) => (u ? userToDomain(u) : null));
  }

  async findById(id: UUID): Promise<User | null> {
    return UserModel.findByPk(id).then((u) => (u ? userToDomain(u) : null));
  }

  async findModelById(id: UUID): Promise<UserModel | null> {
    return UserModel.findByPk(id);
  }

  async findByIdActive(id: UUID): Promise<User | null> {
    return UserModel.findOne({
      where: {
        id: id,
        active: true
      }
    }).then((u) => (u ? userToDomain(u) : null));
  }
}
