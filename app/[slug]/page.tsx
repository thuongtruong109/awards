"use client";

import Content from "@/app/[slug]/_components/Content";
import certificates from "@/data/certificates.json";
import { ICertificateInfo } from "@/types";
import { formatCertName } from "@/utils";
import BackToHome from "@/app/[slug]/_components/BackToHome";

interface Props {
  params: {
    slug: string;
  };
}
export default function Page(props: Props) {
  const slug = props.params.slug;

  const data = certificates.find((cert) => formatCertName(cert.name) === slug);

  return (
    <section className="p-2 lg:p-4 w-full">
      <BackToHome />

      <Content data={data as ICertificateInfo} />
    </section>
  );
}
