import { UserRepository } from '../../../../domain/user/UserRepository';
import { CreateUserCommand } from '../../../../domain/user/CreateUserCommand';
import { User } from '../../../../domain/user/User';
import { UserModel } from './UserModel';
import { UUID } from '../../../../utils/Types';
import { AllowNull, Column, IsEmail, Length, Sequelize } from 'sequelize-typescript';
import { randomUUID } from 'crypto';
import { projectToDomain } from '../project/ProjectMapper';
import { userToDomain } from './UserMapper';
import sequelize from '../../../../config/SequelizeConfig';
import { Op } from 'sequelize';

export class SeqUserRepository implements UserRepository {
  async save({ id, firstName, lastName, password, email, displayName }: User): Promise<User> {
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
