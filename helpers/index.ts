import { ICertificateInfo } from "@/types";
import { formatCertName } from "@/utils";

export const getItemFromCertInfo = (
  certificates: ICertificateInfo[] | undefined,
  name: string
): ICertificateInfo | undefined => {
  if (certificates && certificates.length > 0) {
    return (certificates as ICertificateInfo[]).find(
      (item) => formatCertName(item.name) === name
    );
  }
};

export const getFromLocalStorage = (key: string): string | null => {
  if (window !== undefined) {
    return localStorage.getItem(key);
  }
  return null;
};

export const setToLocalStorage = (key: string, value: string): void => {
  if (window !== undefined) {
    localStorage.setItem(key, value);
  }
};
