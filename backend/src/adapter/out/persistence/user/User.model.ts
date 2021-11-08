import { AllowNull, Column, IsEmail, Length, Model, PrimaryKey, Table } from 'sequelize-typescript';
import { DataTypes } from 'sequelize';

@Table({ tableName: 'user', underscored: true })
export class UserModel extends Model {
  @PrimaryKey
  @AllowNull(false)
  @Column(DataTypes.UUID)
  id: UUID;

  @Length({ min: 6, max: 64 })
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
