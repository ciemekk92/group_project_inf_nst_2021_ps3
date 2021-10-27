import express, { NextFunction, Request, Response } from 'express';
import { Issue } from '../../../domain/issue/Issue';
import { container } from '../../DependencyContainer';

const router = express.Router();

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
  return container.issueService
    .findAll()
    .then((result: Issue[]) => res.json(result))
    .catch((e) => next(e));
});

export default router;
