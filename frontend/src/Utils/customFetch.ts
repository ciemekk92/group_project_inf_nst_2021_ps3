export const customFetch = async (url: string, init: RequestInit): Promise<Unrestricted> => {
  try {
    const baseUrl =
      process.env.NODE_ENV === 'development'
        ? process.env.REACT_APP_API_URL_DEV
        : process.env.REACT_APP_API_URL_PROD;

    return await fetch(`${baseUrl}/${url}`, init);
  } catch (e: any) {
    throw new Error(e);
  }
};
