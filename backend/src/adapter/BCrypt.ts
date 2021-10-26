import bcrypt from 'bcrypt';

export const hashPassword = async (plainPassword: string): Promise<string> => {
  const salt = await bcrypt.genSalt(6);
  return bcrypt.hash(plainPassword, salt);
};

export const passwordMatches = async (
  plainPassword: string,
  hashedPassword: string
): Promise<boolean> => {
  return bcrypt.compare(plainPassword, hashedPassword);
};
