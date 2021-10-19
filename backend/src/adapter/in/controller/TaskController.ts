import express, { Request, Response } from 'express';
import { Task } from '../../../domain/task/Task';
import { TaskService } from '../../../domain/task/TaskService';
import { SeqTaskRepository } from '../../out/persistence/task/SeqTaskRepository';

const router = express.Router();
const taskService = new TaskService(new SeqTaskRepository());

router.get('/', (req: Request, res: Response) => {
  taskService
    .findAll()
    .then((result: Task[]) => res.json(result))
    .catch((err: object) => console.error(err));
});

export default router;
