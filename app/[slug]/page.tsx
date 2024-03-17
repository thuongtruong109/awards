"use client";

import Content from "@/app/[slug]/_components/Content";
import certificates from "@/data/certificates.json";
import { ICertificateInfo } from "@/types";
import { formatCertName } from "@/utils";
import Image from "next/legacy/image";
import { useRouter } from "next/navigation";

interface PageProps {
  params: {
    slug: string;
  };
}
export default function Cert(props: PageProps) {
  const router = useRouter();
  const onBackToHome = () => router.push("/");

  const slug = props.params.slug;

  const data = certificates.find((cert) => formatCertName(cert.name) === slug);

  return (
    <section className="p-2 lg:p-4">
      <div className="pb-4">
        <button
          type="button"
          onClick={onBackToHome}
          className="h-fit w-fit cursor-pointer rounded-md border border-gray-300 bg-gradient-to-b from-zinc-200 px-3 py-1.5 backdrop-blur-2xl hover:border-blue-300 dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit dark:text-gray-200 lg:bg-gray-200 lg:dark:bg-zinc-800/30 flex items-center space-x-1 text-sm"
        >
          <Image src="/assets/back_to_home.png" alt="Back to home" width={20} height={20} />
          <span className="inline-flex">Back to home</span>
        </button>
      </div>

      <Content data={data as ICertificateInfo} />
    </section>
  );
}
