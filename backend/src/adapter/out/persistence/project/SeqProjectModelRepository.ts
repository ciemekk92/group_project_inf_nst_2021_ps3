import { ProjectRepository } from '../../../../domain/project/ProjectRepository';
import { Project } from '../../../../domain/project/Project';
import { ProjectModel } from './ProjectModel';
import { CreateProjectCommand } from '../../../../domain/project/CreateProjectCommand';
import { randomUUID } from 'crypto';
import { projectToDomain } from './ProjectMapper';
import { IssueModel } from '../issue/IssueModel';

export class SeqProjectRepository implements ProjectRepository {
  async findAll(): Promise<Project[]> {
      return ProjectModel.findAll({ include: [IssueModel] }).then((result) =>
        result.map((model) => projectToDomain(model))
      );
  }

  async save(createProjectCommand: CreateProjectCommand): Promise<Project> {
    return new ProjectModel({
      id: randomUUID(),
      name: createProjectCommand.name,
      issues: [],
    })
      .save()
      .then((model) => projectToDomain(model));
  }
}
