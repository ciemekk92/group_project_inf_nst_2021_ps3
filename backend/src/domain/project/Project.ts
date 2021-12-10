import { Issue } from '../issue/Issue';
import { User } from '../user/User';

export class Project {
  id: UUID;
  name: string;
  description: string;
  issues: Issue[];
  createdAt: Date;
  users: User[];
  updatedAt?: Date;

  constructor(
    id: UUID,
    name: string,
    description: string,
    issues: Issue[],
    createdAt: Date,
    users: User[],
    updatedAt?: Date
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
