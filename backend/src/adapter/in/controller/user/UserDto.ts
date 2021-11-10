import { IsDefined, IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';
import { User } from '../../../../domain/user/User';
import printj from 'printj';
import { ValidationMessage } from '../../ValidationMessages';

export class UserDto {
  @Length(User.MIN_PASSWORD_LENGTH, User.MAX_PASSWORD_LENGTH, {
    message: printj.sprintf(
      ValidationMessage.LENGTH,
      User.MIN_PASSWORD_LENGTH,
      User.MAX_PASSWORD_LENGTH
    )
  })
  @IsNotEmpty({ message: ValidationMessage.NOT_EMPTY })
  @IsString({ message: ValidationMessage.STRING })
  @IsDefined({ message: ValidationMessage.DEFINED })
  password!: string;

  @IsEmail({}, { message: ValidationMessage.EMAIL })
  @IsNotEmpty({ message: ValidationMessage.NOT_EMPTY })
  @IsString({ message: ValidationMessage.STRING })
  @IsDefined({ message: ValidationMessage.DEFINED })
  email!: string;
}
