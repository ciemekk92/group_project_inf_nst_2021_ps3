import { Sequelize } from 'sequelize-typescript';
import path from 'path';

const sequelize = new Sequelize({
  dialect: 'sqlite',
  database: 'test-database',
  storage: ':memory:',
  models: [path.join(__dirname, '../') + '/adapter/out/persistence/**/*Model.js'],
});

export default sequelize;
