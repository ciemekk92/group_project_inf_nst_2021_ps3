import { Project } from './Project';
import { ProjectRepository } from './ProjectRepository';
import { CreateProjectCommand, UpdateProjectCommand } from './Commands';
import { ApplicationError } from '../../utils/Errors';

export class ProjectService {
  constructor(private projectRepository: ProjectRepository) {}

  async findAll(): Promise<Project[]> {
    return this.projectRepository.findAll();
  }

  async save(createProjectCommand: CreateProjectCommand): Promise<Project> {
    return this.projectRepository.save(createProjectCommand);
  }

  async update(command: UpdateProjectCommand) {
    if ((await this.projectRepository.findById(command.id)) == null) {
      throw new ApplicationError(404, 'Project not found');
    }
    return this.projectRepository.update(command);
  }
}
