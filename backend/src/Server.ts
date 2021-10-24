import express, { Application } from 'express';
import bodyParser from 'body-parser';
import { registerControllers } from './adapter/ControllerRegistry';
import { synchronizeDatabase } from './adapter/DatabaseSynchronizer';
import { globalErrorHandler } from './middleware/GlobalErrorHandler';

const port = 8080;

export const initServer = async (): Promise<Application> => {
  const app = express();

  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  registerControllers(app);
  await synchronizeDatabase().then(() => console.log('Database synchronized.'));

  app.use(globalErrorHandler);
  return app;
};

export const runServer = (app: Application) => {
  app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
  });
};
