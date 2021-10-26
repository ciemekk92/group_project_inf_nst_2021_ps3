import { UUID } from '../../utils/Types';

export class User {
  id!: UUID;
  firstName!: string;
  lastName!: string;
  password!: string;
  email!: string;
  displayName!: string;

  constructor(
    id: UUID,
    firstName: string,
    lastName: string,
    password: string,
    email: string,
    displayName: string
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.password = password;
    this.email = email;
    this.displayName = displayName;
  }
}
