export const formatCertName = (name: string) => {
  return name.replace(/ /g, "_").toLowerCase();
};

export const obj2Arr = (obj: any) => {
  return JSON.parse(JSON.stringify(obj));
};
