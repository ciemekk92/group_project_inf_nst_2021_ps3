import { plainToClass } from 'class-transformer';
import { validate, ValidationError } from 'class-validator';
import { NextFunction, Request, RequestHandler, Response } from 'express';
import { ApplicationError, AppValidationError } from '../utils/Errors';
import { ValidationMessage } from '../adapter/in/ValidationMessages';

export const jsonValidatorMiddleware = (type: any): RequestHandler => {
  return (req: Request, res: Response, next: NextFunction) => {
    validate(plainToClass(type, req.body), { skipMissingProperties: true }).then(
      (errors: ValidationError[]) => {
        if (errors.length > 0) {
          const validationErrors: AppValidationError[] = errors
            .flatMap((error: ValidationError) =>
              Object.values(error.constraints).map((errMsg) => {
                return { msg: errMsg as ValidationMessage, field: error.property };
              })
            )
            .map((error) => new AppValidationError(error.msg, error.field));

          next(ApplicationError.fromValidation(400, validationErrors));
        } else {
          next();
        }
      }
    );
  };
};
