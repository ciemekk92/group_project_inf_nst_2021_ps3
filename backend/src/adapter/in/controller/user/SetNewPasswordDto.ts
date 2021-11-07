import { IsDefined, IsNotEmpty, IsString, Length } from 'class-validator';

export class SetNewPasswordDto {
  @Length(6, 64)
  @IsNotEmpty()
  @IsString()
  @IsDefined()
  password: string;
}
