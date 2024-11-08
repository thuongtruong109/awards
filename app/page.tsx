"use client";

import Card from "@/app/_components/Card";
import Navigator from "@/app/_components/Navigator";
import certificates from "@/data/certificates.json";
import { EFILTER, ESEARCH_QUERY } from "@/enums";
import categories from "@/data/categories.json";
import type { ICategory, ICertificateInfoCard } from "@/types";
import { usePathname, useSearchParams } from "next/navigation";
import React from "react";
import Filter from "./_components/Filter";

export default function Home() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [certs, setCerts] = React.useState(certificates);

  const queryType = searchParams?.get(ESEARCH_QUERY.TYPE);
  const querySort = searchParams?.get(ESEARCH_QUERY.SORT_ORDER);

  React.useEffect(() => {
    if (queryType === undefined || queryType === null) {
      setCerts(certificates);
    } else {
      const tab = categories.find((tab: ICategory) => `${tab.name}` === queryType);
      if (tab) {
        const filteredCertificates = certificates.filter((cert) => cert.typeId === tab.id);
        setCerts(filteredCertificates);
      }
    }
  }, [pathname, searchParams, queryType]);
  
  React.useEffect(() => {
    if (querySort === EFILTER.ASC) {
      setCerts((prevCerts) => [...prevCerts].sort((a, b) => a.name.localeCompare(b.name)));
    }
    if (querySort === EFILTER.DESC) {
      setCerts((prevCerts) => [...prevCerts].sort((a, b) => b.name.localeCompare(a.name)));
    }
    if (querySort === EFILTER.MOST) {
      setCerts((prevCerts) => [...prevCerts].sort((a, b) => b.certificates.length - a.certificates.length));
    }
    if (querySort === EFILTER.LEAST) {
      setCerts((prevCerts) => [...prevCerts].sort((a, b) => a.certificates.length - b.certificates.length));
    }
  }, [querySort]);

  return (
    <section className="p-2 lg:p-4 flex flex-col justify-center items-center">
      <div className="flex justify-center items-center space-x-3 mb-2">
        <Navigator />
        <Filter />
      </div>

      <ul className="grid gap-3 p-2 text-center sm:grid-cols-2 md:grid-cols-3 lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        {certs.map((certificate, idx) => (
          <Card key={idx} card={certificate as ICertificateInfoCard} />
        ))}
      </ul>

      <div className="text-sm text-center text-slate-400 max-w-xs sm:max-w-xl lg:max-w-5xl space-y-2 mt-6">
        <p>&quot;This is a website created to showcase the achievements, certificates, and awards that I have gained and am currently working on, from the past to the present. All of these are displayed for reference and modest admiration and cannot be used to assert any claims.&quot;</p>
        <p>Let me strive for more in the future. Wishing you all the best!</p>
      </div>
    </section>
  );
}
