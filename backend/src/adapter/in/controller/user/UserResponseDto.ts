import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';
import { UUID } from '../../../../utils/Types';

export class UserResponseDto {
  id!: UUID;
  firstName!: string;
  lastName!: string;
  email!: string;
  displayName: string;

  constructor(id: UUID, firstName: string, lastName: string, email: string, displayName: string) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.displayName = displayName;
  }
}
