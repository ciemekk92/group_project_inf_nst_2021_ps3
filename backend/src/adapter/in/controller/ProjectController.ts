import express, { NextFunction, Request, Response } from 'express';
import { container } from '../../DependencyContainer';
import { Project } from '../../../domain/project/Project';
import { ProjectDto } from './ProjectDto';
import { plainToClass } from 'class-transformer';
import { ProjectService } from '../../../domain/project/ProjectService';
import { jsonValidatorMiddleware } from '../../../middleware/JsonValidatorMiddleware';

const router = express.Router({ mergeParams: true });
const projectService: ProjectService = container.projectService;

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
  return projectService
    .findAll()
    .then((result: Project[]) => res.json(result))
    .catch((e) => next(e));
});

router.post(
  '/',
  jsonValidatorMiddleware(ProjectDto),
  async (req: Request, res: Response, next: NextFunction) => {
    const projectDto: ProjectDto = plainToClass(ProjectDto, req.body);

    return projectService
      .save(projectDto.toCommand())
      .then((result: Project) => res.json(result))
      .catch((e) => next(e));
  }
);

export default router;
