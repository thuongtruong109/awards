"use client";

import Card from "@/components/Card";
import Group from "@/components/Group";
import Navigator from "@/components/Navigator";
import Quickview from "@/components/Quickview";
import certificates from "@/data/certificates.json";
import { ESEARCH_QUERY } from "@/enums";
import { tabs } from "@/shared";
import type { ICertificate, INavigationTab } from "@/types";
import { formatCertName, obj2Arr } from "@/utils";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FiEye } from "react-icons/fi";

export default function Home() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [certs, setCerts] = useState(certificates);

  useEffect(() => {
    const queryType = searchParams.get(ESEARCH_QUERY.TYPE);
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
            className="card_shadow group h-[18.5rem] rounded-xl border-b bg-white p-2 shadow transition-colors hover:dark:bg-neutral-800/30"
            rel="noopener noreferrer"
            key={idx}
          >
            <Card card={certificate} link={formatCertName(certificate.name)}>
              <div className="flex items-center justify-between">
                <Group orgs={obj2Arr(certificate.orgs)} />
                <Quickview
                  btn={
                    <FiEye className="block cursor-pointer text-xl text-gray-500 group-hover:block md:hidden md:group-hover:block" />
                  }
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
