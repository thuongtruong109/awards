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
  orgs: Array<IOrg>;
  desc: string;
  certificates: ICertificate[];
};
