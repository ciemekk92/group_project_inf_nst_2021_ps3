import { Task } from '../../../../domain/task/Task';
import { TaskModel } from './TaskModel';

export const taskToDomain = (dbModel: TaskModel): Task => {
  return new Task(dbModel.id, dbModel.description, dbModel.createdAt, dbModel.updatedAt);
};
