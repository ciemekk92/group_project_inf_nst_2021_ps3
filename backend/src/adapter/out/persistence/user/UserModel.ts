import {
  AllowNull,
  Column,
  Is,
  IsEmail,
  IsUUID,
  Length,
  Model,
  PrimaryKey,
  Table
} from 'sequelize-typescript';
import { DataTypes, validator } from 'sequelize';
import { UUID } from '../../../../utils/Types';
import { validate } from 'class-validator';

@Table
export class UserModel extends Model {
  @PrimaryKey
  @AllowNull(false)
  @Column(DataTypes.UUIDV4)
  id!: UUID;

  @AllowNull(false)
  @Column
  firstName!: string;

  @AllowNull(false)
  @Column
  lastName!: string;

  @Length({ min: 6, max: 64 })
  @AllowNull(false)
  @Column
  password!: string;

  @IsEmail
  @AllowNull(false)
  @Column
  email!: string;

  @AllowNull(false)
  @Column
  displayName!: string;
}
