export class User {
  id: UUID;
  password: string;
  email: string;
  active: boolean;
  firstName: string;
  lastName: string;
  displayName: string;
  refreshToken?: string;

  constructor(
    id: UUID,
    password: string,
    email: string,
    active: boolean = false,
    firstName?: string,
    lastName?: string,
    displayName?: string,
    refreshToken?: string
  ) {
    this.id = id;
    this.password = password;
    this.email = email;
    this.active = active;
    this.firstName = firstName;
    this.lastName = lastName;
    this.displayName = displayName;
    this.refreshToken = refreshToken;
  }
}
