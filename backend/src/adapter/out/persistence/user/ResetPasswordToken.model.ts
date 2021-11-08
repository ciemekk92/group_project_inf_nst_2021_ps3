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

@Table({ tableName: 'reset_password_token_model', underscored: true })
export class ResetPasswordTokenModel extends Model {
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
