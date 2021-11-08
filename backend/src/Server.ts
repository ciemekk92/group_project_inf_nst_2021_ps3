import express, { Application } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import apiControllers from './adapter/ControllerRegistry';
import { globalErrorHandlerMiddleware } from './middleware/GlobalErrorHandlerMiddleware';
import { authMiddleware } from './middleware/AuthMiddleware';
import sequelize from './config/SequelizeConfig';

export const initServer = async (): Promise<Application> => {
  const app = express();
  app.use(
    cors({
      origin: ['localhost:3000']
    })
  );
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());
  app.use(authMiddleware);
  app.use(cookieParser());
  app.use('/api', apiControllers);
  app.use(globalErrorHandlerMiddleware);

  await sequelize.sync().then(() => console.log('Connected to database'));

  return app;
};

export const runServer = (app: Application) => {
  const port: number = parseInt(process.env.SERVER_PORT) || 8080;

  app.listen(port, () => {
    console.log(`Server started at port ${port}`);
  });
};
