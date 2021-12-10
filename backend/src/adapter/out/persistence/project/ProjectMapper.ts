import { ProjectModel } from './Project.model';
import { Project } from '../../../../domain/project/Project';
import { issueToDomain } from '../issue/IssueMapper';
import { userToDomain } from '../user/UserMapper';

export const projectToDomain = (dbModel: ProjectModel): Project => {
  return new Project(
    dbModel.id,
    dbModel.name,
    dbModel.description,
    dbModel.issues.map((t) => issueToDomain(t)),
    dbModel.createdAt,
    dbModel.users.map((m) => userToDomain(m)),
    dbModel.updatedAt
  );
};
