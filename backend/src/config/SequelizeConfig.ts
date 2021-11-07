import { Sequelize } from 'sequelize-typescript';
import { IssueModel } from '../adapter/out/persistence/issue/IssueModel';
import { ProjectModel } from '../adapter/out/persistence/project/ProjectModel';
import { UserModel } from '../adapter/out/persistence/user/UserModel';
import { UserActivationTokenModel } from '../adapter/out/persistence/user/UserActivationTokenModel';
import { ResetPasswordTokenModel } from '../adapter/out/persistence/user/ResetPasswordTokenModel';

const sequelize = new Sequelize({
  dialect: 'sqlite',
  database: 'test-database',
  storage: ':memory:',
  models: [IssueModel, ProjectModel, UserModel, UserActivationTokenModel, ResetPasswordTokenModel]
});

export default sequelize;
