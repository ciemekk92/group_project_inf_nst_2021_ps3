export class Issue {
  id!: UUID;
  description!: string;
  createdAt!: Date;
  updatedAt: Date;

  constructor(id: UUID, description: string, createdAt: Date, updatedAt: Date) {
    this.id = id;
    this.description = description;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}
