import { AllowNull, Column, IsEmail, Length, Model, PrimaryKey, Table } from 'sequelize-typescript';
import { DataTypes } from 'sequelize';
import { User } from '../../../../domain/user/User';

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

  @AllowNull(true)
  @Column
  displayName?: string;

  @AllowNull(true)
  @Column
  refreshToken?: string;
}
