import { ProjectRepository } from '../../../../domain/project/ProjectRepository';
import { Project } from '../../../../domain/project/Project';
import { ProjectModel } from './Project.model';
import { CreateProjectCommand, UpdateProjectCommand } from '../../../../domain/project/Commands';
import { randomUUID } from 'crypto';
import { projectToDomain } from './ProjectMapper';
import { IssueModel } from '../issue/Issue.model';
import { UserModel } from '../user/User.model';
import { SeqUserRepository } from '../user/SeqUserRepository';
import { SeqProjectUserRepository } from '../projectUser/SeqProjectUserRepository';

export class SeqProjectRepository implements ProjectRepository {
  constructor(
    private seqUserRepository: SeqUserRepository,
    private seqProjectUserRepository: SeqProjectUserRepository
  ) {}

  async findAll(): Promise<Project[]> {
    return ProjectModel.findAll({ include: [IssueModel, UserModel] }).then((result) =>
      result.map((model) => projectToDomain(model))
    );
  }

  async save(command: CreateProjectCommand): Promise<Project> {
    const creator = await this.seqUserRepository.findModelById(command.userId);

    const proj = new ProjectModel({
      id: randomUUID(),
      name: command.name,
      description: command.description,
      issues: [],
      users: creator
    });

    const savedProject = await proj.save();
    await this.seqProjectUserRepository.save(savedProject.id, creator.id);

    return ProjectModel.findByPk(savedProject.id, { include: [IssueModel, UserModel] }).then((m) =>
      projectToDomain(m)
    );
  }

  async update(command: UpdateProjectCommand): Promise<Project> {
    return ProjectModel.update(
      {
        name: command.name,
        description: command.description
      },
      {
        where: { id: command.id }
      }
    )
      .then(() => ProjectModel.findByPk(command.id, { include: [IssueModel, UserModel] }))
      .then((m) => (m ? projectToDomain(m) : null));
  }

  async findById(id: UUID): Promise<Project | null> {
    return ProjectModel.findByPk(id, { include: [IssueModel, UserModel] }).then((m) =>
      m ? projectToDomain(m) : null
    );
  }

  async delete(id: UUID): Promise<void> {
    return ProjectModel.findByPk(id).then((m) => (m ? m.destroy() : null))
  }
}
