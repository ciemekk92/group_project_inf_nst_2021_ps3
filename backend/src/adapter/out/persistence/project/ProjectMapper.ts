import { ProjectModel } from './ProjectModel';
import { Project } from '../../../../domain/project/Project';
import { issueToDomain } from '../issue/IssueMapper';

export const projectToDomain = (dbModel: ProjectModel): Project => {
  return new Project(
    dbModel.id,
    dbModel.name,
    dbModel.issues.map((t) => issueToDomain(t)),
    dbModel.createdAt,
    dbModel.updatedAt
  );
};
