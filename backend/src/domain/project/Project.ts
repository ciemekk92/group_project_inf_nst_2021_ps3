import { UUID } from '../../utils/Types';
import { Issue } from '../issue/Issue';

export class Project {
  id!: UUID;
  name!: string;
  issues!: Issue[];
  createdAt!: Date;
  updatedAt: Date;

  constructor(id: UUID, name: string, issues: Issue[], createdAt: Date, updatedAt: Date) {
    this.id = id;
    this.name = name;
    this.issues = issues;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}
