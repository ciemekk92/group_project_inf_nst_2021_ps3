import { UUID } from '../../utils/Types';
import { Task } from '../task/Task';

export class Project {
  id!: UUID;
  name!: string;
  tasks!: Task[];
  createdAt!: Date;
  updatedAt: Date;

  constructor(id: UUID, name: string, tasks: Task[], createdAt: Date, updatedAt: Date) {
    this.id = id;
    this.name = name;
    this.tasks = tasks;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}
