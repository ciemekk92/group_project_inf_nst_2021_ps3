import { Sequelize } from 'sequelize-typescript';
import { IssueModel } from '../adapter/out/persistence/issue/Issue.model';
import { ProjectModel } from '../adapter/out/persistence/project/Project.model';
import { UserModel } from '../adapter/out/persistence/user/User.model';
import { UserActivationTokenModel } from '../adapter/out/persistence/user/UserActivationToken.model';
import { ResetPasswordTokenModel } from '../adapter/out/persistence/user/ResetPasswordToken.model';

const sequelize = new Sequelize({
  dialect: 'postgres',
  database: 'boardel_db',
  host: process.env.DB_HOST,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  models: [IssueModel, ProjectModel, UserModel, UserActivationTokenModel, ResetPasswordTokenModel]
});

export default sequelize;
