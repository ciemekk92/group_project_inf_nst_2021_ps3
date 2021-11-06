import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

const permittedEndpoints = [
  {
    path: '/api/users',
    method: 'POST'
  },
  {
    path: '/api/users/activate*',
    method: 'PUT'
  },
  {
    path: '/api/auth/login',
    method: 'POST'
  }
];

const returnUnauthorized = (res: Response): Response => {
  return res.status(401).send({ message: 'Unauthorized request.' });
};

const requestToPermittedEndpoint = (req: Request): boolean => {
  const permittedPath: boolean =
    permittedEndpoints.find((endpoint) => {
      if (endpoint.path.endsWith('*')) {
        const withoutAsterisk: string = endpoint.path.slice(0, -1);
        return endpoint.path.includes(withoutAsterisk);
      } else {
        return endpoint.path === req.url;
      }
    }) !== undefined;

  if (!permittedPath) {
    return false;
  }

  return permittedEndpoints.find((endpoint) => endpoint.method === req.method) !== undefined;
};

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  if (requestToPermittedEndpoint(req)) {
    return next();
  }

  const authHeader: string | undefined = req.header('Authorization');

  if (!authHeader || !authHeader.startsWith('Bearer ') || authHeader.split(' ').length < 2) {
    return returnUnauthorized(res);
  }
  const accessToken = authHeader.split(' ')[1];

  try {
    jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
    return next();
  } catch (e) {
    return returnUnauthorized(res);
  }
};
