import IssuesController from './in/controller/IssueController';
import { Router } from 'express';
import ProjectController from './in/controller/ProjectController';
import UserController from './in/controller/user/UserController';
import JWTAuthController from './in/controller/auth/JWTAuthController';

const app = Router();

app.use('/issues', IssuesController);
app.use('/projects', ProjectController);
app.use('/users', UserController);
app.use('/auth', JWTAuthController);

export default app;
