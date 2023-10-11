"use client";

import PreView from "@/components/PreView";
import certificates from "@/data/certificates.json";
import { ICertificateInfo } from "@/types";

interface PageProps {
  params: {
    slug: string;
  };
}
export default function Cert(props: PageProps) {
  const slug = props.params.slug;

  // const data = getItemFromCertInfo(obj2Arr(certificates), id);
  const data = certificates.find(
    (cert) => cert.name.toLocaleLowerCase() === slug
  );

  return (
    <section>
      {/* <h1>{id} page</h1>
      <div className="card card-compact bg-base-100 w-96 shadow-xl">
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
      {/* <span>{JSON.stringify(data)}</span> */}
      <PreView data={data as ICertificateInfo} />
    </section>
  );
}
