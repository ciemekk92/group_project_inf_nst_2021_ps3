import { NextFunction, Request, Response } from 'express';
import { ApplicationError } from '../utils/Errors';

export const globalErrorHandlerMiddleware = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!err) {
    return next(err);
  }
  console.log(err);

  if (err instanceof ApplicationError) {
    res.status(err.status);
    res.json(JSON.parse(err.message));
  } else if (err instanceof SyntaxError) {
    res.status(400);
    res.json({ error: 'Cannot parse JSON' });
  } else {
    res.status(500);
    res.json({ error: 'Unknown error' });
  }
};

export const catchAsyncErrors = (fn: any) => {
  return (req: Request, res: Response, next: NextFunction) => {
    fn(req, res, next).catch((err: any) => next(err));
  };
};
