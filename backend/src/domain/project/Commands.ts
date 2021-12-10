export class CreateProjectCommand {
  name: string;
  description: string;
  userId: UUID;

  constructor(name: string, description: string, userId: UUID) {
    this.name = name;
    this.description = description;
    this.userId = userId;
  }
}

export class UpdateProjectCommand {
  id: UUID;
  name: string;
  description: string;
  userId: UUID;

  constructor(id: UUID, name: string, description: string, userId: UUID) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.userId = userId;
  }
}
