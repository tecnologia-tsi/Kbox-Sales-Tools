import { getTocken } from '../auth/auth';
import axios from 'axios';
import config from '../config';
import { PromedApiError } from '../../domain/PromedApiError';

export const HttpApiRequest = async (method: string, offset: null | number) => {
  const token = await getTocken();
  const httpApi = config.get('promedApi.url');
  // @ts-ignore
  const response = await axios.get(httpApi, {
    headers: {
      'auth': token,
      'path': method,
      'offset': offset
    }
  });
  if (!response.data.body.items.length) {
    throw new PromedApiError();
  }
  return response.data.body.items;
};
