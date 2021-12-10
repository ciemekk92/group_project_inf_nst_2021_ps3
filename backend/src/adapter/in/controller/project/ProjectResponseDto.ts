import { Issue } from '../../../../domain/issue/Issue';

export class ProjectResponseDto {
  id: UUID;
  name: string;
  description: string;
  issues: Issue[];
  createdAt: Date;
  users: ProjectUserResponseDto[];
  updatedAt?: Date;

  constructor(
    id: UUID,
    name: string,
    description: string,
    issues: Issue[],
    createdAt: Date,
    users: ProjectUserResponseDto[],
    updatedAt: Date
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.issues = issues;
    this.createdAt = createdAt;
    this.users = users;
    this.updatedAt = updatedAt;
  }
}

export class ProjectUserResponseDto {
  id: UUID;
  displayName: string;
  profileImage: string;

  constructor(id: UUID, displayName: string, profileImage: string) {
    this.id = id;
    this.displayName = displayName;
    this.profileImage = profileImage;
  }
}
