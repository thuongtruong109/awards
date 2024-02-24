"use client";

import Content from "@/components/Content";
import certificates from "@/data/certificates.json";
import { ICertificateInfo } from "@/types";
import { formatCertName } from "@/utils";
import { IoPlayBackOutline } from "react-icons/io5";

interface PageProps {
  params: {
    slug: string;
  };
}
export default function Cert(props: PageProps) {
  const slug = props.params.slug;

  const data = certificates.find((cert) => formatCertName(cert.name) === slug);

  return (
    <section className="p-2 lg:p-4">
      <div className="flex items-center justify-between pb-4">
        <button
          type="button"
          onClick={() => window.history.back()}
          className="h-fit w-fit cursor-pointer rounded-md border border-gray-300 bg-gradient-to-b from-zinc-200 px-3 py-1.5 backdrop-blur-2xl hover:border-orange-300 dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit dark:text-gray-200 lg:bg-gray-200 lg:dark:bg-zinc-800/30"
        >
          <IoPlayBackOutline className="icon" />
          <span className="hidden lg:inline-flex">Back</span>
        </button>
      </div>

      <Content data={data as ICertificateInfo} />
    </section>
  );
}
