import {
  AllowNull,
  BelongsToMany,
  Column,
  IsEmail,
  Length,
  Model,
  PrimaryKey,
  Table
} from 'sequelize-typescript';
import { DataTypes } from 'sequelize';
import { User } from '../../../../domain/user/User';
import { ProjectModel } from '../project/Project.model';
import { ProjectUserModel } from '../projectUser/ProjectUser.model';

@Table({ tableName: 'user', underscored: true })
export class UserModel extends Model {
  @PrimaryKey
  @AllowNull(false)
  @Column(DataTypes.UUID)
  id: UUID;

  @Length({ min: User.MIN_PASSWORD_LENGTH, max: User.MAX_PASSWORD_LENGTH })
  @AllowNull(false)
  @Column
  password: string;

  @IsEmail
  @AllowNull(false)
  @Column
  email: string;

  @AllowNull(false)
  @Column
  active: boolean;

  @AllowNull(true)
  @Column
  firstName?: string;

  @AllowNull(true)
  @Column
  lastName?: string;

  @AllowNull(false)
  @Column
  displayName: string;

  @AllowNull(true)
  @Column
  refreshToken?: string;

  @BelongsToMany(() => ProjectModel, () => ProjectUserModel)
  projects: ProjectModel[] = [];

  @AllowNull(true)
  @Column
  profileImage?: string;
}
