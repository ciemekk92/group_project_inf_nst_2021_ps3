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
    this.message = message;
  }
}
