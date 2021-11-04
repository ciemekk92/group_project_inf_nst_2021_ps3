import express, { Application } from 'express';
import { config } from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import path from 'path';
import apiControllers from './adapter/ControllerRegistry';
import { synchronizeDatabase } from './adapter/DatabaseSynchronizer';
import { globalErrorHandlerMiddleware } from './middleware/GlobalErrorHandlerMiddleware';
import { authMiddleware } from './middleware/AuthMiddleware';

export const initServer = async (): Promise<Application> => {
  config();
  const app = express();
  app.use(
    cors({
      origin: ['localhost:3000']
    })
  );
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());
  app.use(express.static(path.join(__dirname, '..', '..', 'frontend', 'build')));
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
