import { Project } from './Project';
import { CreateProjectCommand, UpdateProjectCommand } from './Commands';

export interface ProjectRepository {
  findAll(): Promise<Project[]>;

  findById(id: UUID): Promise<Project | null>;

  save(createProjectCommand: CreateProjectCommand): Promise<Project>;

  update(command: UpdateProjectCommand): Promise<Project>;
}
