import express, { CookieOptions, NextFunction, Request, Response } from 'express';
import { container } from '../../../DependencyContainer';
import { jsonValidatorMiddleware } from '../../../../middleware/JsonValidatorMiddleware';
import { CredentialsDto } from './CredentialsDto';
import { AuthData } from '../../../../domain/user/AuthData';
import { ApplicationError } from '../../../../utils/Errors';
import { extractUserId } from '../JwtTokenExtractor';

const router = express.Router();

router.post(
  '/login',
  jsonValidatorMiddleware(CredentialsDto),
  (req: Request, res: Response, next: NextFunction) => {
    return container.authService
      .login(req.body.email, req.body.password)
      .then((result: AuthData) => {
        res
          .cookie('refreshToken', result.refreshToken, getCookieOptions())
          .json({ accessToken: result.accessToken });
      })
      .catch((e) => next(e));
  }
);

router.post('/refresh-token', (req: Request, res: Response, next: NextFunction) => {
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
    })
    .catch((e) => next(e));
});

const getCookieOptions = (): CookieOptions => {
  return {
    expires: new Date(Date.now() + parseInt(process.env.REFRESH_TOKEN_LIFE_SECONDS) * 1000),
    // secure: true, TODO
    httpOnly: true,
    sameSite: 'lax'
  };
};
export default router;
