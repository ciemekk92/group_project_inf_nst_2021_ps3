import sequelize from '../config/SequelizeConfig';

export const synchronizeDatabase = () => {
  sequelize.sync().then(() => console.log('Database synchronized.'));
};
