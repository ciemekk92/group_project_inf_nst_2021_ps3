import { Request } from 'express';
import jwt from 'jsonwebtoken';

export function extractUserId(req: Request): UUID {
  const accessToken: string = req.header('Authorization').split(' ')[1];
  const decoded: any = jwt.decode(accessToken);

  return decoded['id'] as UUID;
}
