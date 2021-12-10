export class User {
  public static MIN_PASSWORD_LENGTH = 6;
  public static MAX_PASSWORD_LENGTH = 64;

  id: UUID;
  password: string;
  email: string;
  active: boolean;
  displayName: string;
  profileImage: string;
  firstName?: string;
  lastName?: string;
  refreshToken?: string;

  constructor(
    id: UUID,
    password: string,
    email: string,
    active: boolean = false,
    firstName?: string,
    lastName?: string,
    displayName?: string,
    refreshToken?: string,
    profileImage?: string
  ) {
    this.id = id;
    this.password = password;
    this.email = email;
    this.active = active;
    this.firstName = firstName;
    this.lastName = lastName;
    this.displayName = displayName == null ? email : displayName;
    this.refreshToken = refreshToken;
    this.profileImage = profileImage;
  }
}
