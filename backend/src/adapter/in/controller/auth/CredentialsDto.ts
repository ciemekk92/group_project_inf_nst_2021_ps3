import { IsDefined, IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { ValidationMessage } from '../../ValidationMessages';

export class CredentialsDto {
  @IsEmail({}, { message: ValidationMessage.EMAIL })
  @IsDefined({ message: ValidationMessage.DEFINED })
  @IsNotEmpty({ message: ValidationMessage.NOT_EMPTY })
  @IsString({ message: ValidationMessage.STRING })
  email: string;

  @IsDefined({ message: ValidationMessage.DEFINED })
  @IsNotEmpty({ message: ValidationMessage.NOT_EMPTY })
  @IsString({ message: ValidationMessage.STRING })
  password: string;
}
