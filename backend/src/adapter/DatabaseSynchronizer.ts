import sequelize from '../config/SequelizeConfig';

export const synchronizeDatabase = async () => {
  return sequelize.sync({ force: true });
};
