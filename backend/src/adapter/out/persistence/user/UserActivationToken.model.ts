import {
  AllowNull,
  BelongsTo,
  Column,
  ForeignKey,
  Model,
  PrimaryKey,
  Table
} from 'sequelize-typescript';
import { UserModel } from './User.model';
import { DataTypes } from 'sequelize';

@Table({ tableName: 'user_activation_token', underscored: true })
export class UserActivationTokenModel extends Model {
  @PrimaryKey
  @AllowNull(false)
  @ForeignKey(() => UserModel)
  @Column(DataTypes.UUID)
  userId: UUID;

  @BelongsTo(() => UserModel)
  user: UserModel;

  @PrimaryKey
  @AllowNull(false)
  @Column
  value: UUID;
}
