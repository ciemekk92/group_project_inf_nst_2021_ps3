import { TaskRepository } from './TaskRepository';
import { Task } from './Task';

export class TaskService {
  constructor(private taskRepository: TaskRepository) {}

  async findAll(): Promise<Task[]> {
    return this.taskRepository.findAll();
  }
}
