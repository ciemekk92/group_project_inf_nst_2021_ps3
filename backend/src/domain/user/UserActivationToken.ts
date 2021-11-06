export class UserActivationToken {
  userId: UUID;
  value: UUID;

  constructor(userId: UUID, value: UUID) {
    this.userId = userId;
    this.value = value;
  }
}