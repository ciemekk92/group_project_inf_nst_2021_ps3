import { Issue } from '../../../../domain/issue/Issue';
import { IssueModel } from './IssueModel';

export const issueToDomain = (dbModel: IssueModel): Issue => {
  return new Issue(dbModel.id, dbModel.description, dbModel.createdAt, dbModel.updatedAt);
};
