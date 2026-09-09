import config from '../config';
import axios from 'axios';

export const getTocken = async () => {
  const uri = config.get('auth.uri');
  const user = config.get('auth.client');
  const password = config.get('auth.password');
  // @ts-ignore
  const response = await axios.post(uri,
    {
      username: user,
      password: password
    });
  return response.data.idToken;
};
