import { plainToClass } from 'class-transformer';
import { validate, ValidationError } from 'class-validator';
import { NextFunction, Request, RequestHandler, Response } from 'express';
import { ApplicationError, AppValidationError } from '../utils/Errors';

export const jsonValidator = (type: any): RequestHandler => {
  return (req: Request, res: Response, next: NextFunction) => {
    validate(plainToClass(type, req.body), { skipMissingProperties: true }).then(
      (errors: ValidationError[]) => {
        if (errors.length > 0) {
          const validationErrors: AppValidationError[] = errors
            .map((error: ValidationError) => Object.values(error.constraints).join(', '))
            .map((msg: string) => new AppValidationError(msg));
          next(ApplicationError.fromValidation(400, validationErrors));
        } else {
          next();
        }
      }
    );
  };
};
