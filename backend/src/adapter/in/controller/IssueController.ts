import express, { Request, Response } from 'express';
import { container } from '../../DependencyContainer';
import { catchAsyncErrors } from '../../../middleware/GlobalErrorHandlerMiddleware';
import { IssueResponseDto } from './issue/IssueResponseDto';
import { ApplicationError } from '../../../utils/Errors';
import { jsonValidatorMiddleware } from '../../../middleware/JsonValidatorMiddleware';
import { plainToClass } from 'class-transformer';
import { getUserIdFromSession } from './JwtTokenExtractor';
import validator from 'validator';
import { IssueRequestDto } from './issue/IssueRequestDto';
import { IssueModel } from '../../out/persistence/issue/Issue.model';
import isUUID = validator.isUUID;

const router = express.Router();

router.get(
  '/',
  catchAsyncErrors(async (req: Request, res: Response) => {
    return container.issueService
      .findAll()
      .then((result: IssueModel[]) => res.json(result.map((r) => mapResponse(r))));
  })
);

router.get(
  '/:id',
  catchAsyncErrors(async (req: Request, res: Response) => {
    const id = req.params.id;
    if (!isUUID(id, 4)) {
      throw new ApplicationError(400, 'Id is not UUID');
    }

    return container.issueService
      .findById(id as UUID)
      .then((i: IssueModel) => res.json(mapResponse(i)));
  })
);

router.post(
  '/',
  jsonValidatorMiddleware(IssueRequestDto),
  catchAsyncErrors(async (req: Request, res: Response) => {
    const issueDto: IssueRequestDto = plainToClass(IssueRequestDto, req.body);

    return container.issueService
      .save(
        issueDto.description,
        issueDto.projectId,
        issueDto.type,
        issueDto.status,
        getUserIdFromSession(req),
        issueDto.timeSpentInHours,
        issueDto.assigneeId,
        issueDto.parentId,
        issueDto.timeEstimatedInHours
      )
      .then((i: IssueModel) => res.json(mapResponse(i)));
  })
);

router.put(
  '/:id',
  jsonValidatorMiddleware(IssueRequestDto),
  catchAsyncErrors(async (req: Request, res: Response) => {
    const id = req.params.id;
    if (!isUUID(id, 4)) {
      throw new ApplicationError(400, 'Id is not UUID');
    }

    const issueDto: IssueRequestDto = plainToClass(IssueRequestDto, req.body);

    return container.issueService
      .update(
        id as UUID,
        issueDto.description,
        issueDto.projectId,
        issueDto.type,
        issueDto.status,
        issueDto.timeSpentInHours,
        issueDto.assigneeId,
        issueDto.parentId,
        issueDto.timeEstimatedInHours
      )
      .then((i: IssueModel) => res.json(mapResponse(i)));
  })
);

router.delete(
  '/:id',
  catchAsyncErrors(async (req: Request, res: Response) => {
    const id = req.params.id;

    if (!isUUID(id, 4)) {
      throw new ApplicationError(400, 'Id is not UUID');
    }

    return container.issueService.delete(id as UUID).then(() => {
      res.status(204).json();
    });
  })
);

const mapResponse = (i: IssueModel) => {
  return new IssueResponseDto(
    i.id,
    i.description,
    i.projectId,
    i.type,
    i.status,
    i.authorId,
    i.timeSpentInHours,
    i.createdAt,
    i.assigneeId,
    i.parentId,
    i.timeEstimatedInHours,
    i.updatedAt
  );
};

export default router;
