import {
  AllowNull,
  BelongsTo,
  Column,
  ForeignKey,
  Model,
  PrimaryKey,
  Table
} from 'sequelize-typescript';
import { UserModel } from './UserModel';
import { DataTypes } from 'sequelize';

@Table
export class ResetPasswordTokenModel extends Model {
  @PrimaryKey
  @AllowNull(false)
  @ForeignKey(() => UserModel)
  @Column(DataTypes.UUIDV4)
  userId: UUID;

  @BelongsTo(() => UserModel)
  user: UserModel;

  @PrimaryKey
  @AllowNull(false)
  @Column
  value: UUID;
}
