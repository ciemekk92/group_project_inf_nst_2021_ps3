import { Task } from './Task';

export interface TaskRepository {
  findAll(): Promise<Task[]>;
}
