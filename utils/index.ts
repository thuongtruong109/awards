// export const getCertByName = (arr: any[], id: string) => {
//     return arr.find((item) => item.name === id);
// }

export const formatCertName = (name: string) => {
  return name.replace(/ /g, "_").toLowerCase();
};

export const obj2Arr = (obj: any) => {
  //   return Object.keys(obj).map((key) => obj[key]);
  return JSON.parse(JSON.stringify(obj));
};
