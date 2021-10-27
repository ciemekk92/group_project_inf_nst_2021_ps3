import express, { NextFunction, Request, Response } from 'express';
import { container } from '../../../DependencyContainer';
import { jsonValidatorMiddleware } from '../../../../middleware/JsonValidatorMiddleware';
import { CredentialsDto } from './CredentialsDto';
import { AuthData } from '../../../../domain/user/AuthData';

const router = express.Router();

router.post(
  '/login',
  jsonValidatorMiddleware(CredentialsDto),
  async (req: Request, res: Response, next: NextFunction) => {
    return container.authService
      .login(req.body.email, req.body.password)
      .then((result: AuthData) => {
        res
          .cookie('refreshToken', result.refreshToken, {
            expires: new Date(Date.now() + parseInt(process.env.REFRESH_TOKEN_LIFE_SECONDS) * 1000),
            // secure: true, TODO
            httpOnly: true,
            sameSite: 'lax'
          })
          .json({ accessToken: result.accessToken });
      })
      .catch((e) => next(e));
  }
);

export default router;
