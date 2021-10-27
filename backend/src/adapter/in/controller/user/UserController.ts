import express, { NextFunction, Request, Response } from 'express';
import { container } from '../../../DependencyContainer';
import { UserService } from '../../../../domain/user/UserService';
import { jsonValidatorMiddleware } from '../../../../middleware/JsonValidatorMiddleware';
import { plainToClass } from 'class-transformer';
import { UserDto } from './UserDto';
import { User } from '../../../../domain/user/User';
import { UserResponseDto } from './UserResponseDto';

export const router = express.Router();
const userService: UserService = container.userService;

router.post(
  '/',
  jsonValidatorMiddleware(UserDto),
  async (req: Request, res: Response, next: NextFunction) => {
    const userDto: UserDto = plainToClass(UserDto, req.body);

    return userService
      .save(userDto.toCommand())
      .then((result: User) =>
        res.json(
          new UserResponseDto(
            result.id,
            result.firstName,
            result.lastName,
            result.email,
            result.displayName
          )
        )
      )
      .catch((e) => next(e));
  }
);

export default router;
