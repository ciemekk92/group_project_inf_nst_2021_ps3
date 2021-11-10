import validator from 'validator';
import { ValidationMessage } from '../adapter/in/ValidationMessages';
import isJSON = validator.isJSON;

abstract class HttpError extends Error {
  abstract status: number;
  abstract message: string;
}

export class ApplicationError extends HttpError {
  status!: number;
  message!: string;

  constructor(status: number, message: string) {
    super(message);
    this.status = status;
    this.message = isJSON(message) ? message : JSON.stringify([{ message: message }]);
  }

  static fromValidation(status: number, errors: AppValidationError[]) {
    return new ApplicationError(status, JSON.stringify({ errors: [errors] }));
  }
}

export class AppValidationError {
  message: ValidationMessage;
  field: string;

  constructor(message: ValidationMessage, field: string) {
    this.message = message;
    this.field = field;
  }
}
