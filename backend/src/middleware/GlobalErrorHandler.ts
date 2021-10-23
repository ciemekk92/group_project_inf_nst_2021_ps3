import { NextFunction, Request, Response } from 'express';
import validator from 'validator';
import { ApplicationError } from '../utils/ApplicationError';

export const globalErrorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  if (!err) {
    return next(err);
  }
  console.log(err);

  if (err instanceof ApplicationError) {
    res.status(err.status);
    res.json({ error: err.message });
  } else if (err instanceof SyntaxError) {
    res.status(400);
    res.json({ error: 'Cannot parse JSON' });
  } else {
    res.status(500);
    res.json({ error: 'Unknown error' });
  }
};