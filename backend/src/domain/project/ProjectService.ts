import { Project } from './Project';
import { ProjectRepository } from './ProjectRepository';
import { CreateProjectCommand } from './CreateProjectCommand';

export class ProjectService {
  constructor(private projectRepository: ProjectRepository) {}

  async findAll(): Promise<Project[]> {
    return this.projectRepository.findAll();
  }

  async save(createProjectCommand: CreateProjectCommand): Promise<Project> {
    return this.projectRepository.save(createProjectCommand);
  }
}
