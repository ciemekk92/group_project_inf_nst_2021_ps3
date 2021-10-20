import { ProjectModel } from './ProjectModel';
import { Project } from '../../../../domain/project/Project';
import { taskToDomain } from '../task/TaskMapper';

export const projectToDomain = (dbModel: ProjectModel): Project => {
  return new Project(
    dbModel.id,
    dbModel.name,
    dbModel.tasks.map((t) => taskToDomain(t)),
    dbModel.createdAt,
    dbModel.updatedAt
  );
};
