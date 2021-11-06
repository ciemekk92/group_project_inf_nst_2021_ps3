import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

export class UserDto {
  @Length(6, 64)
  @IsNotEmpty()
  @IsString()
  password!: string;

  @IsEmail()
  @IsNotEmpty()
  @IsString()
  email!: string;
}