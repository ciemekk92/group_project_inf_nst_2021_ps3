import { IsDefined, IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class ResetPasswordDto {
  @IsEmail()
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  email: string;
}
