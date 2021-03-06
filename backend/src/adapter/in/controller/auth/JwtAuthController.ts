import express, { CookieOptions, Request, Response } from 'express';
import { container } from '../../../DependencyContainer';
import { jsonValidatorMiddleware } from '../../../../middleware/JsonValidatorMiddleware';
import { CredentialsDto } from './CredentialsDto';
import { AuthData } from '../../../../domain/user/AuthData';
import { ApplicationError } from '../../../../utils/Errors';
import { getUserIdFromSession } from '../JwtTokenExtractor';
import { catchAsyncErrors } from '../../../../middleware/GlobalErrorHandlerMiddleware';
import { UserWithAuthData } from '../../../../domain/user/UserWithAuthData';
import { UserResponseDto } from '../user/UserResponseDto';
import { User } from '../../../../domain/user/User';

const router = express.Router();

router.post(
  '/login',
  jsonValidatorMiddleware(CredentialsDto),
  catchAsyncErrors(async (req: Request, res: Response) => {
    return container.authService
      .login(req.body.email, req.body.password)
      .then((result: UserWithAuthData) => {
        const u: User = result.user;

        res.cookie('refreshToken', result.authData.refreshToken, getCookieOptions()).json({
          accessToken: result.authData.accessToken,
          userInfo: new UserResponseDto(u.id, u.email, u.firstName, u.lastName, u.displayName)
        });
      });
  })
);

router.post(
  '/refresh-token',
  catchAsyncErrors(async (req: Request, res: Response) => {
    const refreshToken: string | undefined = req.cookies.refreshToken;
    if (!refreshToken) {
      throw new ApplicationError(401, 'Missing refresh token.');
    }

    return container.authService
      .refresh(getUserIdFromSession(req), refreshToken)
      .then((result: AuthData) => {
        res
          .cookie('refreshToken', result.refreshToken, getCookieOptions())
          .json({ accessToken: result.accessToken });
      });
  })
);

export const getCookieOptions = (): CookieOptions => {
  return {
    expires: new Date(Date.now() + parseInt(process.env.REFRESH_TOKEN_LIFE_SECONDS) * 1000),
    // secure: true, TODO
    httpOnly: true,
    sameSite: 'lax'
  };
};
export default router;
