import IssuesController from './in/controller/IssueController';
import { Express } from 'express';
import ProjectController from './in/controller/ProjectController';

export const registerControllers = (app: Express) => {
    app.use('/issues', IssuesController);
    app.use('/projects', ProjectController);
};
