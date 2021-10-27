import sequelize from '../config/SequelizeConfig';
import { Sequelize } from 'sequelize-typescript';

export const synchronizeDatabase = async (): Promise<Sequelize> => {
  return sequelize.sync({ force: true });
};
