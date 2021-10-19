import taskRouter from './in/router/TaskRouter';
import { Express } from 'express';

export const registerRouters = (app: Express) => {
  app.use('/tasks', taskRouter);
};
