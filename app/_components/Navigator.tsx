"use client";

import { ESEARCH_QUERY } from "@/enums";
import { tabs } from "@/shared";
import type { INavigationTab } from "@/types";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

const Navigator: React.FC = () => {
  const [tabIndex, setTabIndex] = React.useState<number>(0);

  const searchParams = useSearchParams();
  const queryType = searchParams?.get(ESEARCH_QUERY.TYPE);

  React.useEffect(() => {
    const tab = tabs.find((tab: INavigationTab) => `${tab.name}` === queryType);
    if (tab) {
      setTabIndex(tab.id);
    }
  }, [queryType]);

  const matchStyle = (idx: number) => {
    return idx === tabIndex
      ? "bg-blue-300/50 dark:bg-gray-600 dark:text-white shadow-md font-semibold"
      : "text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700";
  };

  const params = useSearchParams();
  const router = useRouter();

  const handleClick = (tab: INavigationTab) => {
    const newParams = new URLSearchParams(params?.toString());
    if (tab.id === 0) {
      newParams.delete(ESEARCH_QUERY.TYPE);
      router.push("/");
    } else {
      newParams.set(ESEARCH_QUERY.TYPE, tab.name);
      router.push(`?${newParams.toString()}`);
    }
    setTabIndex(tab.id);
  };

  return (
    <ul className="mx-auto mb-2 flex w-fit items-center space-x-1 rounded-lg bg-white border dark:border-gray-700 p-1 dark:bg-gray-800">
      {tabs.map((tab: INavigationTab) => (
        <li key={tab.id}>
          <button
            type="button"
            key={tab.id}
            onClick={() => handleClick(tab)}
            className={`${matchStyle(
              tab.id
            )} inline-flex items-end rounded-md px-3 py-1.5 font-medium`}
          >
            <Image
              src={tab.icon}
              width={18}
              height={20}
              alt={`${tab.name}_icon`}
              className="scale-90"
            />
            <span className="ml-1 hidden text-xs sm:inline-flex">
              {tab.name.toLocaleUpperCase()}
            </span>
          </button>
        </li>
      ))}
    </ul>
  );
};

export default React.memo(Navigator);
