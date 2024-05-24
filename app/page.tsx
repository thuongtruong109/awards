"use client";

import Card from "@/app/_components/Card";
import Group from "@/app/_components/Group";
import Navigator from "@/app/_components/Navigator";
import Quickview from "@/app/_components/Quickview";
import certificates from "@/data/certificates.json";
import { ESEARCH_QUERY } from "@/enums";
import { tabs } from "@/shared";
import type { ICertificate, INavigationTab } from "@/types";
import { formatCertName, obj2Arr } from "@/utils";
import { usePathname, useSearchParams } from "next/navigation";
import React from "react";

export default function Home() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [certs, setCerts] = React.useState(certificates);

  React.useEffect(() => {
    const queryType = searchParams?.get(ESEARCH_QUERY.TYPE);
    if (queryType === undefined || queryType === null) {
      setCerts(certificates);
    } else {
      const tab = tabs.find(
        (tab: INavigationTab) => `${tab.name}` === queryType
      );
      if (tab) {
        setCerts(certificates.filter((cert) => cert.typeId === tab.id));
      }
    }
  }, [pathname, searchParams]);

  const getSources = (certificate: ICertificate[]) => {
    const sources: string[] = [];
    if (certificate.length > 0) {
      certificate.forEach((cert) => {
        sources.push(cert.img);
      });
    }

    return sources;
  };

  return (
    <section className="p-2 lg:p-4">
      <Navigator />
      <ul className="grid gap-3 p-2 text-center sm:grid-cols-2 md:grid-cols-3 lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        {certs.map((certificate, idx) => (
          <li
            className="card_shadow group h-[18.5rem] rounded-xl border-b bg-white p-2 shadow transition-colors dark:border-transparent dark:bg-gray-800"
            rel="noopener noreferrer"
            key={idx}
          >
            <Card card={certificate} link={formatCertName(certificate.name)}>
              <div className="flex items-end justify-between">
                <Group orgs={obj2Arr(certificate.orgs)} />
                <Quickview
                  sources={getSources(
                    certificate.certificates as ICertificate[]
                  )}
                  title="Quick view"
                />
              </div>
            </Card>
          </li>
        ))}
      </ul>
    </section>
  );
}
