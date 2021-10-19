import { TaskRepository } from '../../../../domain/task/TaskRepository';
import { Task } from '../../../../domain/task/Task';
import { TaskModel } from './TaskModel';

export class SeqTaskRepository implements TaskRepository {
  async findAll(): Promise<Task[]> {
    return TaskModel.findAll().then((result) =>
      result.map((model) => new Task(model.id, model.description, model.createdAt, model.updatedAt))
    );
  }
}
