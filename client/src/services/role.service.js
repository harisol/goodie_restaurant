import { httpGet, httpPost } from '.';

export const listRole = async () => {
  const result = await httpGet(`/role`);
  if (!result.success) {
    return result.message;
  }

  return result.data;
};

export const createRole = async (rolename) => {
  const result = await httpPost(`/role`, { rolename: rolename });
  if (!result.success) {
    return result.message
  }
};
