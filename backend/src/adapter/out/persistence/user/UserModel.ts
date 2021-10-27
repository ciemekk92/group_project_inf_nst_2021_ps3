import {
  AllowNull,
  Column,
  IsEmail,
  Length,
  Model,
  PrimaryKey,
  Table,
  Unique
} from 'sequelize-typescript';
import { DataTypes } from 'sequelize';
import { UUID } from '../../../../utils/Types';

@Table
export class UserModel extends Model {
  @PrimaryKey
  @AllowNull(false)
  @Column(DataTypes.UUIDV4)
  id: UUID;

  @AllowNull(false)
  @Column
  firstName: string;

  @AllowNull(false)
  @Column
  lastName: string;

  @Length({ min: 6, max: 64 })
  @AllowNull(false)
  @Column
  password: string;

  @Unique
  @IsEmail
  @AllowNull(false)
  @Column
  email: string;

  @AllowNull(false)
  @Column
  displayName: string;

  @AllowNull(true)
  @Column
  refreshToken?: string;
}
