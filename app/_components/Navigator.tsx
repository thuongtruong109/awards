"use client";

import React from "react";
import { ESEARCH_QUERY } from "@/enums";
import categories from "@/data/categories.json";
import type { ICategory } from "@/types";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";

const Navigator: React.FC = () => {
  const [tabIndex, setTabIndex] = React.useState<number>(0);

  const searchParams = useSearchParams();
  const queryType = searchParams?.get(ESEARCH_QUERY.TYPE);

  React.useEffect(() => {
    const tab = categories.find((tab: ICategory) => tab.name === queryType);
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

  const handleClick = (tab: ICategory) => {
    const newParams = new URLSearchParams(params?.toString());
    if (tab.id === 0) {
      newParams.delete(ESEARCH_QUERY.TYPE);
    } else {
      newParams.set(ESEARCH_QUERY.TYPE, tab.name);
    }
    router.push(`?${newParams.toString()}`);
    setTabIndex(tab.id);
  };

  return (
    <ul className="flex w-fit items-center space-x-1 rounded-lg bg-white border p-1">
      {categories.map((tab: ICategory) => (
        <li key={tab.id}>
          <button
            type="button"
            key={tab.id}
            onClick={() => handleClick(tab)}
            className={`${matchStyle(
              tab.id
            )} flex items-end rounded-md px-3 py-1.5 font-medium`}
            title={tab.name}
          >
            <Image
              src={tab.icon}
              width={17}
              height={17}
              alt={`${tab.name}_icon`}
            />
            <span className={`ml-1 hidden text-xs sm:inline-flex ${tab.id == tabIndex ? 'nav_gradient_text font-bold' : 'text-gray-400 font-medium'}`}>
              {tab.name.toLocaleUpperCase()}
            </span>
          </button>
        </li>
      ))}
    </ul>
  );
};

export default React.memo(Navigator);
