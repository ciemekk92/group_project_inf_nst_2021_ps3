import TaskController from './in/controller/TaskController';
import { Express } from 'express';
import ProjectController from './in/controller/ProjectController';

export const registerControllers = (app: Express) => {
  app.use('/tasks', TaskController);
  app.use('/projects', ProjectController);
};
