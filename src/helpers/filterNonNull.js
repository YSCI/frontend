export const filterNonNull = (obj = {}) =>
  Object.fromEntries(Object.entries(obj).filter(([k, v]) => v));