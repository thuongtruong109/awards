export type ICertificate = {
  id: string;
  name: string;
  img: string;
  link?: string;
  date: string;
};

export type IOrg = {
  org_name: string;
  org_link: string;
  org_img: string;
};

export type ICertificateInfo = {
  name: string;
  cover: string;
  typeId: number;
  orgs: Array<IOrg>;
  desc: string;
  certificates: ICertificate[];
};

export type INavigationTab = {
  id: number;
  name: string;
};
