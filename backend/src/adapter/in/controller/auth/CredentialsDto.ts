import { IsDefined, IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CredentialsDto {
  @IsEmail()
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  email: string;

  @IsDefined()
  @IsNotEmpty()
  @IsString()
  password: string;
}
