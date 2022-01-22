import { Issue } from '../../../../domain/issue/Issue';
import { IssueModel } from './Issue.model';

export const issueToDomain = (dbModel: IssueModel): Issue => {
  return new Issue(
    dbModel.id,
    dbModel.description,
    dbModel.projectId,
    dbModel.type,
    dbModel.status,
    dbModel.parentId,
    dbModel.authorId,
    dbModel.assigneeId,
    dbModel.timeSpentInHours,
    dbModel.timeEstimatedInHours,
    dbModel.createdAt,
    dbModel.updatedAt
  );
};
