"use client";

import PreView from "@/components/PreView";
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
    <section>
      {/* <div className="card card-compact bg-base-100 w-96 shadow-xl">
        <figure>
          <img
            src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{data?.name}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div> */}
      <div className="flex items-center justify-between pb-4">
        <button
          type="button"
          onClick={() => window.history.back()}
          className="h-fit w-fit rounded-md border border-gray-300 bg-gradient-to-b from-zinc-200 px-3 py-1.5 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:bg-gray-200 lg:dark:bg-zinc-800/30"
        >
          <IoPlayBackOutline className="icon" />
          <span className="hidden lg:inline-flex">Back</span>
        </button>
      </div>

      <PreView data={data as ICertificateInfo} />
    </section>
  );
}
