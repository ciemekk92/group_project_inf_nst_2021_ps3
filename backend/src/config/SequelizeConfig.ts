import { Sequelize } from 'sequelize-typescript';
import { IssueModel } from '../adapter/out/persistence/issue/IssueModel';
import { ProjectModel } from '../adapter/out/persistence/project/ProjectModel';

const sequelize = new Sequelize({
  dialect: 'sqlite',
  database: 'test-database',
  storage: ':memory:',
  models: [IssueModel, ProjectModel],
});

export default sequelize;
