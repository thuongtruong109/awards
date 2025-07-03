"use client";

import { use } from "react";
import Content from "@/app/[slug]/_components/Content";
import certificates from "@/data/certificates.json";
import { ICertificateInfo } from "@/types";
import { formatCertName } from "@/utils";
import BackToHome from "@/app/[slug]/_components/BackToHome";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}
export default function Page(props: Props) {
  const params = use(props.params);

  const data = certificates.find(
    (cert) => formatCertName(cert.name) === params?.slug
  );

  return (
    <section className="p-2 lg:p-4 w-full">
      <BackToHome />

      <Content data={data as ICertificateInfo} />
    </section>
  );
}
