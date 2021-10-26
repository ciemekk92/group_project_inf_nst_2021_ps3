import { IsEmail, IsNotEmpty, IsString, Length, ValidateIf } from 'class-validator';
import { CreateProjectCommand } from '../../../../domain/project/CreateProjectCommand';
import { CreateUserCommand } from '../../../../domain/user/CreateUserCommand';

export class UserDto {
  @IsNotEmpty()
  @IsString()
  firstName!: string;

  @IsNotEmpty()
  @IsString()
  lastName!: string;

  @Length(6, 64)
  @IsNotEmpty()
  @IsString()
  password!: string;

  @IsEmail()
  @IsNotEmpty()
  @IsString()
  email!: string;

  @IsString()
  displayName: string;

  toCommand(): CreateUserCommand {
    return new CreateUserCommand(
      this.firstName,
      this.lastName,
      this.password,
      this.email,
      this.displayName
    );
  }
}