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
import { ResetPasswordDto } from './ResetPasswordDto';
import { SetNewPasswordDto } from './SetNewPasswordDto';
import { extractUserId } from '../JwtTokenExtractor';
import { UserResponseDto } from './UserResponseDto';
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

router.get(
  '/me',
  catchAsyncErrors(async (req: Request, res: Response) => {
    return userService
      .getByIdActive(extractUserId(req))
      .then((u) =>
        res.json(new UserResponseDto(u.id, u.email, u.firstName, u.lastName, u.displayName)).send()
      );
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

router.put(
  '/reset-password',
  jsonValidatorMiddleware(ResetPasswordDto),
  catchAsyncErrors(async (req: Request, res: Response) => {
    return container.userService.resetPassword(req.body.email).then(() => res.status(204).send());
  })
);

router.put(
  '/set-new-password/:token',
  jsonValidatorMiddleware(SetNewPasswordDto),
  catchAsyncErrors(async (req: Request, res: Response) => {
    const token: string = req.params.token;

    if (!isUUID(token, 4)) {
      throw new ApplicationError(400, 'Valid token is required');
    }

    return container.userService
      .setNewPassword(token, req.body.password)
      .then(() => res.status(204).send());
  })
);

export default router;
