"use client";

import Content from "@/app/[slug]/_components/Content";
import certificates from "@/data/certificates.json";
import { ICertificateInfo } from "@/types";
import { formatCertName } from "@/utils";
import BackToHome from "./_components/BackToHome";

interface PageProps {
  params: {
    slug: string;
  };
}
export default function Cert(props: PageProps) {
  const slug = props.params.slug;

  const data = certificates.find((cert) => formatCertName(cert.name) === slug);

  return (
    <section className="p-2 lg:p-4 w-full">
      <BackToHome />

      <Content data={data as ICertificateInfo} />
    </section>
  );
}
