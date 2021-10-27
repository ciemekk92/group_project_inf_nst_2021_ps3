import express, { Application } from 'express';
import bodyParser from 'body-parser';
import apiControllers from './adapter/ControllerRegistry';
import { synchronizeDatabase } from './adapter/DatabaseSynchronizer';
import { globalErrorHandlerMiddleware } from './middleware/GlobalErrorHandlerMiddleware';
import { authMiddleware } from './middleware/AuthMiddleware';
import { config } from 'dotenv';
import cookieParser from 'cookie-parser';

export const initServer = async (): Promise<Application> => {
  config();
  const app = express();

  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(authMiddleware);
  app.use(cookieParser());
  app.use('/api', apiControllers);
  app.use(globalErrorHandlerMiddleware);

  synchronizeDatabase().then(() => console.log('Database synchronized.'));

  return app;
};

export const runServer = (app: Application) => {
  const port = process.env.SERVER_PORT;
  app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
  });
};
