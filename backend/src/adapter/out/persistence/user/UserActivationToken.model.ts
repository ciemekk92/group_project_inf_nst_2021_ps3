import { AllowNull, Column, Model, PrimaryKey, Table } from 'sequelize-typescript';

@Table({ tableName: 'user_activation_token_model', underscored: true })
export class UserActivationTokenModel extends Model {
  @PrimaryKey
  @AllowNull(false)
  @Column
  userId: UUID;

  @PrimaryKey
  @AllowNull(false)
  @Column
  value: UUID;
}
