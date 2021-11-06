import express, { NextFunction, Request, Response } from 'express';
import { container } from '../../../DependencyContainer';
import { UserService } from '../../../../domain/user/UserService';
import { jsonValidatorMiddleware } from '../../../../middleware/JsonValidatorMiddleware';
import { plainToClass } from 'class-transformer';
import { UserDto } from './UserDto';

export const router = express.Router();
const userService: UserService = container.userService;

router.post(
  '/',
  jsonValidatorMiddleware(UserDto),
  async (req: Request, res: Response, next: NextFunction) => {
    const userDto: UserDto = plainToClass(UserDto, req.body);

    return userService
      .save(userDto.email, userDto.password)
      .then(() => res.status(201).send())
      .catch((e) => next(e));
  }
);

export default router;
