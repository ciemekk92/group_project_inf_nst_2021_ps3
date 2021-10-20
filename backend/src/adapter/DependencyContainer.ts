import { TaskService } from '../domain/task/TaskService';
import { SeqTaskRepository } from './out/persistence/task/SeqTaskRepository';
import { ProjectService } from '../domain/project/ProjectService';
import { SeqProjectRepository } from './out/persistence/project/SeqProjectModelRepository';

class DependencyContainer {
  readonly taskService: TaskService;
  readonly projectService: ProjectService;

  constructor(taskService: TaskService, projectService: ProjectService) {
    this.taskService = taskService;
    this.projectService = projectService;
  }
}

export const container = new DependencyContainer(
  new TaskService(new SeqTaskRepository()),
  new ProjectService(new SeqProjectRepository())
);
