import { cookieKeyAuth } from "../utils/config";
import { getCookie } from "../utils/helpers";

const baseUrl = '/api'; // in development, we set our host at 'proxy' property in package.json
// const baseUrl = 'https://mysite.com'; // for production

export const httpGet = (url, queryParams, headerOptions) => {
  const fetchUrl = `${baseUrl}${url}?${new URLSearchParams({ ...queryParams })}`;

  return fetch(fetchUrl, {
    headers: {
      'x-access-token': getCookie(cookieKeyAuth),
      ...headerOptions
    }
  })
    .then(resolver)
    .catch(catcher);
};

export const httpPost = (url, body, queryParams, headerOptions) => {
  const fetchUrl = `${baseUrl}${url}?${new URLSearchParams({ ...queryParams })}`;

  // const formData = new FormData();
  // for (let key in body) {
  //   formData.append(key, body[key]);
  // }

  const opt = {
    method: 'POST',
    headers: { 
      'x-access-token': getCookie(cookieKeyAuth),
      'Content-Type': 'application/json',
      ...headerOptions
    },
    body: JSON.stringify(body),
    // body: formData,
  };

  return fetch(fetchUrl, opt)
    .then(resolver)
    .catch(catcher);
};

const resolver = async (res) => {
  const data = await res.json();
  if (!res.ok) {
    throw ({ message: data.message });
  }

  return { data, success: true };
};

const catcher = (error) => {
  const message = error.message || error;
  console.error('fetch error:', message);
  return { message, success: false };
};
