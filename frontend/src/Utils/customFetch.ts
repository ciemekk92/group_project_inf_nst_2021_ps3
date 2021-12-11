import { UserModel } from '../Models/UserModel';

export const customFetch = async (url: string, init: RequestInit): Promise<Unrestricted> => {
  const token = UserModel.currentUserValue.accessToken;

  try {
    const baseUrl =
      process.env.NODE_ENV === 'development'
        ? process.env.REACT_APP_API_URL_DEV
        : process.env.REACT_APP_API_URL_PROD;

    return await fetch(
      `${baseUrl}/${url}`,
      !token
        ? init
        : {
            ...init,
            headers: {
              ...init.headers,
              Authorization: `Bearer ${token}`
            }
          }
    );
  } catch (e: any) {
    throw new Error(e);
  }
};
