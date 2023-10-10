export type ICertificateInfo = {
  name: string;
  cover: string;
  typeId: number;
  orgs: [
    {
      org_name: string;
      org_link: string;
      org_img: string;
    }
  ];
  desc: string;
  certificates: [
    {
      id: string;
      name: string;
      img: string;
      link?: string;
      date: string;
    }
  ];
};

export type ICertificate = Pick<ICertificateInfo, "certificates">;

export type ICertificateInfoCard = Pick<
  ICertificateInfo,
  "name" | "cover" | "desc"
>;

export type ICertificateOrg = Pick<ICertificateInfo, "orgs">;

export type INavigationTab = {
  id: number;
  name: string;
};
