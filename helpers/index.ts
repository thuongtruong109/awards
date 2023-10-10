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

export const openSelfLink = (link: string) => {
  if (window !== undefined) {
    window.open(link, "_self");
  }
};
