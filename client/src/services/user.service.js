import { httpGet, httpPost } from '.';

export const listUser = async () => {
  const result = await httpGet(`/user`);
  if (!result.success) {
    return result.message;
  }

  return result.data;
};

export const createUser = async (username, roleId) => {
  const result = await httpPost(`/user`, { username, role_id: roleId });
  if (!result.sucess) {
    return result.message
  }
};
