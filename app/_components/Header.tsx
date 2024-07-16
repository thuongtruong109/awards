"use client";

import Image from "next/legacy/image";
import Link from "next/link";
import React from "react";
import ThemeToggle from "./ThemeToggle";
import data from "@/data/certificates.json";
import categories from "@/data/categories.json";
import { ESEARCH_QUERY } from "@/enums";
import { useSearchParams } from "next/navigation";
import { ICertificateInfo } from "@/types";

let totalCount = 0;
data.forEach((cert) => {
  totalCount += cert.certificates.length;
});

const getCategoryIdByName = (name: string) => {
  return categories.find((category) => category.name === name)?.id;
}

const Header: React.FC = () => {
  const [currentCount, setCurrentCount] = React.useState<number>(totalCount);

  const searchParams = useSearchParams();
  const queryType = searchParams?.get(ESEARCH_QUERY.TYPE);

  React.useEffect(() => {
    if (!queryType) {
      setCurrentCount(totalCount);
      return;
    } else {
      let clone = data as ICertificateInfo[];
      const fields = clone.filter((cert: ICertificateInfo) => cert.typeId === getCategoryIdByName(queryType.toLowerCase()));
      if (fields) {
        let count = 0;
        fields.forEach((cert: ICertificateInfo) => {
          count += cert.certificates.length;
        });
        setCurrentCount(count);
      }
    }
  }, [queryType]);

  return (
    <header className="flex h-fit w-full items-center justify-between px-4 py-1 md:justify-around">
      <Link href="/">
        <Image src="/logo.svg" alt="logo" width={110} height={60} />
      </Link>
      <div className="flex items-center space-x-3">
        <span className="border border-slate-100 dark:border-gray-600 px-2 py-1 rounded-md h-fit text-sm text-gray-500 dark:text-gray-300">Total: {currentCount}</span>
        <ThemeToggle />
      </div>
    </header>
  );
};

export default React.memo(Header);
