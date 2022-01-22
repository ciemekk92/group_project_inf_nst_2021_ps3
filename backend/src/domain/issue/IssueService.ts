import { IssueType } from '../../adapter/out/persistence/issue/IssueType';
import { IssueStatus } from '../../adapter/out/persistence/issue/IssueStatus';
import { IssueModel } from '../../adapter/out/persistence/issue/Issue.model';
import { ProjectModel } from '../../adapter/out/persistence/project/Project.model';
import { UserModel } from '../../adapter/out/persistence/user/User.model';
import { randomUUID } from 'crypto';
import { ApplicationError } from '../../utils/Errors';

export class IssueService {
  async findAll(): Promise<IssueModel[]> {
    return IssueModel.findAll();
  }

  async findById(id: UUID): Promise<IssueModel> {
    return IssueModel.findByPk(id, {
      include: [
        ProjectModel,
        IssueModel,
        { model: UserModel, as: 'assignee' },
        { model: UserModel, as: 'author' }
      ]
    });
  }

  async save(
    description: string,
    projectId: UUID,
    type: IssueType,
    status: IssueStatus,
    authorId: UUID,
    timeSpentInHours: number,
    assigneeId?: UUID,
    parentId?: UUID,
    timeEstimatedInHours?: number
  ): Promise<IssueModel> {
    const project = await ProjectModel.findByPk(projectId);
    if (project === null) {
      throw new ApplicationError(404, 'Project not found');
    }

    if (assigneeId != null) {
      if ((await UserModel.findByPk(assigneeId)) === null) {
        throw new ApplicationError(404, 'Assignee not found');
      }
    }

    if (parentId != null) {
      if ((await UserModel.findByPk(parentId)) === null) {
        throw new ApplicationError(404, 'Parent issue not found');
      }
    }

    return new IssueModel({
      id: randomUUID(),
      description: description,
      projectId: project.id,
      type: type,
      status: status,
      parentId: parentId,
      authorId: authorId,
      assigneeId: assigneeId,
      timeSpentInHours: timeSpentInHours,
      timeEstimatedInHours: timeEstimatedInHours
    }).save();
  }

  async update(
    id: UUID,
    description: string,
    projectId: UUID,
    type: IssueType,
    status: IssueStatus,
    timeSpentInHours: number,
    assigneeId: UUID,
    parentId: UUID,
    timeEstimatedInHours: number
  ): Promise<IssueModel> {
    const issue = await IssueModel.findByPk(id);
    if (issue == null) {
      throw new ApplicationError(404, 'Issue not found');
    }

    const project = await ProjectModel.findByPk(projectId);
    if (project === null) {
      throw new ApplicationError(404, 'Project not found');
    }

    if (assigneeId != null) {
      if ((await UserModel.findByPk(assigneeId)) === null) {
        throw new ApplicationError(404, 'Assignee not found');
      }
    }

    if (parentId != null) {
      if ((await UserModel.findByPk(parentId)) === null) {
        throw new ApplicationError(404, 'Parent issue not found');
      }
    }

    return await issue.update(
      {
        description: description,
        projectId: project.id,
        type: type,
        status: status,
        parentId: parentId,
        assigneeId: assigneeId,
        timeSpentInHours: timeSpentInHours,
        timeEstimatedInHours: timeEstimatedInHours
      },
      { where: { id: id } }
    );
  }

  async delete(id: UUID): Promise<void> {
    await IssueModel.destroy({ where: { id: id } });
  }
}
