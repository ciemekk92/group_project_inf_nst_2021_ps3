import express, { Request, Response } from 'express';
import { container } from '../../../DependencyContainer';
import { Project } from '../../../../domain/project/Project';
import { ProjectRequestDto } from './ProjectRequestDto';
import { plainToClass } from 'class-transformer';
import { ProjectService } from '../../../../domain/project/ProjectService';
import { jsonValidatorMiddleware } from '../../../../middleware/JsonValidatorMiddleware';
import { ProjectResponseDto, ProjectUserResponseDto } from './ProjectResponseDto';
import { getUserIdFromSession } from '../JwtTokenExtractor';
import { catchAsyncErrors } from '../../../../middleware/GlobalErrorHandlerMiddleware';
import { ApplicationError } from '../../../../utils/Errors';
import validator from 'validator';
import isUUID = validator.isUUID;

const router = express.Router({ mergeParams: true });
const projectService: ProjectService = container.projectService;

router.get(
  '/',
  catchAsyncErrors(async (req: Request, res: Response) => {
    return projectService.findAll().then((result: Project[]) =>
      res.json(
        result.map(
          (p) =>
            new ProjectResponseDto(
              p.id,
              p.name,
              p.description,
              p.issues,
              p.createdAt,
              p.users.map((u) => new ProjectUserResponseDto(u.id, u.displayName, u.profileImage)),
              p.updatedAt
            )
        )
      )
    );
  })
);

router.get(
  '/:id',
  catchAsyncErrors(async (req: Request, res: Response) => {
    const id = req.params.id;
    if (!isUUID(id, 4)) {
      throw new ApplicationError(400, 'Id is not UUID');
    }

    return projectService.findById(id as UUID).then((p: Project) =>
      res.json(
        new ProjectResponseDto(
          p.id,
          p.name,
          p.description,
          p.issues,
          p.createdAt,
          p.users.map((u) => new ProjectUserResponseDto(u.id, u.displayName, u.profileImage)),
          p.updatedAt
        )
      )
    );
  })
);

router.post(
  '/',
  jsonValidatorMiddleware(ProjectRequestDto),
  catchAsyncErrors(async (req: Request, res: Response) => {
    const projectDto: ProjectRequestDto = plainToClass(ProjectRequestDto, req.body);

    return projectService
      .save(projectDto.toCreateCommand(getUserIdFromSession(req)))
      .then((p: Project) =>
        res.json(
          new ProjectResponseDto(
            p.id,
            p.name,
            p.description,
            p.issues,
            p.createdAt,
            p.users.map((u) => new ProjectUserResponseDto(u.id, u.displayName, u.profileImage)),
            p.updatedAt
          )
        )
      );
  })
);

router.put(
  '/:id',
  jsonValidatorMiddleware(ProjectRequestDto),
  catchAsyncErrors(async (req: Request, res: Response) => {
    const id = req.params.id;
    if (!isUUID(id, 4)) {
      throw new ApplicationError(400, 'Id is not UUID');
    }

    const projectDto: ProjectRequestDto = plainToClass(ProjectRequestDto, req.body);

    return projectService
      .update(projectDto.toUpdateCommand(id as UUID, getUserIdFromSession(req)))
      .then((p: Project) =>
        res.json(
          new ProjectResponseDto(
            p.id,
            p.name,
            p.description,
            p.issues,
            p.createdAt,
            p.users.map((u) => new ProjectUserResponseDto(u.id, u.displayName, u.profileImage)),
            p.updatedAt
          )
        )
      );
  })
);

export default router;
