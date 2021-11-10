export class User {
  public static MIN_PASSWORD_LENGTH = 6;
  public static MAX_PASSWORD_LENGTH = 64;

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
