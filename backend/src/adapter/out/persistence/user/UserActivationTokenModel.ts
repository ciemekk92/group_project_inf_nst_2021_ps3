import { AllowNull, Column, Model, Table, Unique } from 'sequelize-typescript';

@Table
export class UserActivationTokenModel extends Model {
  @Unique
  @AllowNull(false)
  @Column
  userId: UUID;

  @Unique
  @AllowNull(false)
  @Column
  value: UUID;
}
