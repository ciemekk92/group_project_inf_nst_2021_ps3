import express, { NextFunction, Request, Response } from 'express';
import { container } from '../../DependencyContainer';
import { Project } from '../../../domain/project/Project';
import { ProjectDto } from './ProjectDto';
import { plainToClass } from 'class-transformer';
import { ProjectService } from '../../../domain/project/ProjectService';
import { jsonValidator } from '../../../middleware/JsonValidator';

const router = express.Router();
const projectService: ProjectService = container.projectService;

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
  projectService
    .findAll()
    .then((result: Project[]) => res.json(result))
    .catch((e) => next(e));
});

router.post(
  '/',
  jsonValidator(ProjectDto),
  async (req: Request, res: Response, next: NextFunction) => {
    const projectDto: ProjectDto = plainToClass(ProjectDto, req.body);

    projectService
      .save(projectDto.toCommand())
      .then((result: Project) => res.json(result))
      .catch((e) => next(e));
  }
);

export default router;
