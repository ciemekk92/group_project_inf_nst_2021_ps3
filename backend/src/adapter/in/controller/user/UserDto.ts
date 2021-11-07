import { IsDefined, IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

export class UserDto {
  @Length(6, 64)
  @IsNotEmpty()
  @IsString()
  @IsDefined()
  password!: string;

  @IsEmail()
  @IsNotEmpty()
  @IsString()
  @IsDefined()
  email!: string;
}