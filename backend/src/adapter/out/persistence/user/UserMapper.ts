import { ProjectModel } from '../project/ProjectModel';
import { Project } from '../../../../domain/project/Project';
import { issueToDomain } from '../issue/IssueMapper';
import { User } from '../../../../domain/user/User';
import { UserModel } from './UserModel';

export const userToDomain = (dbModel: UserModel): User => {
  return new User(
    dbModel.id,
    dbModel.firstName,
    dbModel.lastName,
    dbModel.password,
    dbModel.email,
    dbModel.displayName
  );
};