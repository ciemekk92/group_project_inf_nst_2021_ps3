import { AllowNull, Column, Model, PrimaryKey, Table } from 'sequelize-typescript';

@Table
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
