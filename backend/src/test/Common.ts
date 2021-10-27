import { UUID } from '../utils/Types';
import jwt from 'jsonwebtoken';

export const getAccessToken = (userId: UUID = undefined): string => {
  return jwt.sign({ id: userId as string }, process.env.ACCESS_TOKEN_SECRET, {
    algorithm: 'HS256',
    expiresIn: 300
  });
};
