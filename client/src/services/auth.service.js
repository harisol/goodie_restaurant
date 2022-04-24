import { httpPost } from '.';
import { cookieKeyAuth, cookieKeyUsername } from '../utils/config';
import { eraseCookie, setCookie } from '../utils/helpers';

export const login = async (username) => {
  const result = await httpPost(`/login`, { username }, );
  if (!result.success) {
    return result.message;
  }

  setCookie(cookieKeyAuth, result.data.accessToken, 2);
  setCookie(cookieKeyUsername, username, 2);
};

export const logout = () => {
  eraseCookie(cookieKeyAuth);
  console.log('cookie auth destroyed');

  return Promise.resolve(true);
};
