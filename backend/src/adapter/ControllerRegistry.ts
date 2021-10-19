import TaskController from './in/controller/TaskController';
import { Express } from 'express';

export const registerControllers = (app: Express) => {
  app.use('/tasks', TaskController);
};
