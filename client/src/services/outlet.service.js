import { httpGet, httpPost } from '.';

export const listOutlet = async () => {
  const result = await httpGet(`/outlet`);
  if (!result.success) {
    return result.message;
  }

  return result.data;
};

export const createOutlet = async (outletName) => {
  const result = await httpPost(`/outlet`, { name: outletName });
  if (!result.success) {
    return result.message
  }
};
