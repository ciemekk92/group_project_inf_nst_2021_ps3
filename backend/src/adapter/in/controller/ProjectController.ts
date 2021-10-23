import express, { Request, Response } from 'express';
import { Task } from '../../../domain/task/Task';
import { container } from '../../DependencyContainer';
import { Project } from '../../../domain/project/Project';
import { ProjectDto } from './ProjectDto';
import { CreateProjectCommand } from '../../../domain/project/CreateProjectCommand';
import { plainToClass } from 'class-transformer';
import { ProjectService } from '../../../domain/project/ProjectService';
import { jsonValidator } from '../../../middleware/JsonValidator';

const router = express.Router();
const projectService: ProjectService = container.projectService;

router.get('/', (req: Request, res: Response) => {
  projectService
    .findAll()
    .then((result: Project[]) => res.json(result))
    .catch((err: object) => console.error(err));
});

router.post('/', jsonValidator(ProjectDto), (req: Request, res: Response) => {
  const projectDto: ProjectDto = plainToClass(ProjectDto, req.body);

  projectService
    .save(projectDto.toCommand())
    .then((result: Project) => res.json(result))
    .catch((err: object) => console.error(err));
});

export default router;