import express, { Request, Response } from 'express';
import { Issue } from '../../../domain/issue/Issue';
import { container } from '../../DependencyContainer';

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
  container.issueService
    .findAll()
    .then((result: Issue[]) => res.json(result))
    .catch((err: object) => console.error(err));
});

export default router;
