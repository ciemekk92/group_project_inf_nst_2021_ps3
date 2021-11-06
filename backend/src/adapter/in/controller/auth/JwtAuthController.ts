import express, { CookieOptions, Request, Response } from 'express';
import { container } from '../../../DependencyContainer';
import { jsonValidatorMiddleware } from '../../../../middleware/JsonValidatorMiddleware';
import { CredentialsDto } from './CredentialsDto';
import { AuthData } from '../../../../domain/user/AuthData';
import { ApplicationError } from '../../../../utils/Errors';
import { extractUserId } from '../JwtTokenExtractor';
import { catchAsyncErrors } from '../../../../middleware/GlobalErrorHandlerMiddleware';

const router = express.Router();

router.post(
  '/login',
  jsonValidatorMiddleware(CredentialsDto),
  catchAsyncErrors(async (req: Request, res: Response) => {
    return container.authService
      .login(req.body.email, req.body.password)
      .then((result: AuthData) => {
        res
          .cookie('refreshToken', result.refreshToken, getCookieOptions())
          .json({ accessToken: result.accessToken });
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
      .refresh(extractUserId(req), refreshToken)
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
