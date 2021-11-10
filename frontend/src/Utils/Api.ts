// @ts-ignore
import { param } from 'node-qs-serialization';
import { ApiResponse } from '../Types/Response';
import { customFetch } from './customFetch';

type Params = Record<string, Unrestricted>;
type Payload = Record<Unrestricted, Unrestricted>;

const getUrlWithParams = (url: string, params: Params): string => {
  const stringParams = param(params);

  return stringParams ? `${url}?${stringParams}` : url;
};

const getRequestOptions = ({ body, method = 'POST', headers = {} }: RequestInit): RequestInit => ({
  method,
  body,
  headers
});

const getJsonRequestOptions = ({
  data,
  method = 'POST'
}: {
  data: Payload;
  method?: string;
}): RequestInit =>
  getRequestOptions({
    body: JSON.stringify(data),
    method,
    headers: {
      'Content-Type': 'application/json'
    }
  });

export const Api = {
  get: async <T extends ApiResponse>(url: string, params: Params = {}): Promise<T> =>
    customFetch(getUrlWithParams(url, params), {}),
  getFull: async <T extends ApiResponse>(url: string, params: Params = {}): Promise<T> =>
    customFetch(getUrlWithParams(url, params), {}),
  post: async (url: string, data: Payload = {}): Promise<Response> => {
    return customFetch(url, getJsonRequestOptions({ data }));
  },
  put: async (url: string, data: Payload = {}): Promise<Response> => {
    return customFetch(url, getJsonRequestOptions({ data, method: 'PUT' }));
  },
  delete: async (url: string, data: Payload = {}): Promise<Response> => {
    return customFetch(url, getJsonRequestOptions({ data, method: 'DELETE' }));
  }
};
