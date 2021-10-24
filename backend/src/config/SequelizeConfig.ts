import { Sequelize } from 'sequelize-typescript';
import { TaskModel } from '../adapter/out/persistence/task/TaskModel';
import { ProjectModel } from '../adapter/out/persistence/project/ProjectModel';

const sequelize = new Sequelize({
  dialect: 'sqlite',
  database: 'test-database',
  storage: ':memory:',
  models: [TaskModel, ProjectModel],
});

export default sequelize;
