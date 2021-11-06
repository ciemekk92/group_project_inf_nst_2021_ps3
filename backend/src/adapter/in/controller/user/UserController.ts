import express, { Request, Response } from 'express';
import { container } from '../../../DependencyContainer';
import { UserService } from '../../../../domain/user/UserService';
import { jsonValidatorMiddleware } from '../../../../middleware/JsonValidatorMiddleware';
import { plainToClass } from 'class-transformer';
import { UserDto } from './UserDto';
import { ApplicationError } from '../../../../utils/Errors';
import { catchAsyncErrors } from '../../../../middleware/GlobalErrorHandlerMiddleware';
import validator from 'validator';
import { AuthData } from '../../../../domain/user/AuthData';
import { getCookieOptions } from '../auth/JwtAuthController';
import isUUID = validator.isUUID;

export const router = express.Router();
const userService: UserService = container.userService;

router.post(
  '/',
  jsonValidatorMiddleware(UserDto),
  catchAsyncErrors(async (req: Request, res: Response) => {
    const userDto: UserDto = plainToClass(UserDto, req.body);
    return userService.save(userDto.email, userDto.password).then(() => res.status(201).send());
  })
);

router.put(
  '/activate/:token',
  catchAsyncErrors(async (req: Request, res: Response) => {
    const token: string = req.params.token;

    if (!isUUID(token, 4)) {
      throw new ApplicationError(400, 'Valid token is required');
    }
    return userService.activateUser(token as UUID).then((result: AuthData) => {
      res
        .cookie('refreshToken', result.refreshToken, getCookieOptions())
        .json({ accessToken: result.accessToken });
    });
  })
);

export default router;
