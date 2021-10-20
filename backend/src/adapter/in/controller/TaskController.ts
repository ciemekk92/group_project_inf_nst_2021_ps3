import express, { Request, Response } from 'express';
import { Task } from '../../../domain/task/Task';
import { container } from '../../DependencyContainer';

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
    container.taskService
      .findAll()
      .then((result: Task[]) => res.json(result))
      .catch((err: object) => console.error(err));
});

export default router;
