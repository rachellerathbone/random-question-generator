export const isArray = (val: any) => {
  return typeof Array.isArray(val);
};

export const isObject = (val: any) => {
  return typeof val === 'object' && val !== null;
};
