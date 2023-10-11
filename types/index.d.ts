export type ICertificate = {
  id: string;
  org_id: string;
  name: string;
  img: string;
  link?: string;
  date: string;
};

export type ICertificateInfoCard = Pick<
  ICertificateInfo,
  "name" | "cover" | "desc"
>;

export type ICertificateOrg = {
  id: string;
  org_name: string;
  org_link: string;
  org_img: string;
};

export type ICertificateInfo = {
  name: string;
  cover: string;
  typeId: number;
  orgs: ICertificateOrg[];
  desc: string;
  certificates: ICertificate[];
};

export type INavigationTab = {
  id: number;
  name: string;
};
