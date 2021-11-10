export class UserResponseDto {
  id: UUID;
  email: string;
  firstName?: string;
  lastName?: string;
  displayName?: string;

  constructor(
    id: UUID,
    email: string,
    firstName?: string,
    lastName?: string,
    displayName?: string
  ) {
    this.id = id;
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;
    this.displayName = displayName;
  }
}
