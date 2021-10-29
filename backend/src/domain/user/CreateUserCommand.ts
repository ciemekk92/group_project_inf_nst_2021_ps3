export class CreateUserCommand {
  firstName!: string;
  lastName!: string;
  password!: string;
  email!: string;
  displayName!: string;

  constructor(
    firstName: string,
    lastName: string,
    password: string,
    email: string,
    displayName: string
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.password = password;
    this.email = email;
    this.displayName = displayName;
  }
}