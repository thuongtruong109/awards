// export const getCertByName = (arr: any[], id: string) => {
//     return arr.find((item) => item.name === id);
// }

export const formatCertName = (name: string) => {
    return name.replace(/ /g, '_').toLowerCase();
}