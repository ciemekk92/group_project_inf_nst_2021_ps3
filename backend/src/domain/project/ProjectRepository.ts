import { Project } from './Project';
import { CreateProjectCommand } from './CreateProjectCommand';

export interface ProjectRepository {
  findAll(): Promise<Project[]>;

  save(createProjectCommand: CreateProjectCommand): Promise<Project>;
}
