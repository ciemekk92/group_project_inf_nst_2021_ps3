export interface UserResponse extends Response {
  accessToken: string;
  email: string;
  displayName: string;
  firstName: string;
  lastName: string;
}
