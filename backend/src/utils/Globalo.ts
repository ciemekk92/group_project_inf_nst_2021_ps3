import { randomUUID } from 'crypto';

export const getRandomUUID = () => {
  return randomUUID() as UUID;
};
