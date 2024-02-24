"use client";

import { ESEARCH_QUERY } from "@/enums";
import { tabs } from "@/shared";
import type { INavigationTab } from "@/types";
import { useRouter, useSearchParams } from "next/navigation";
import { memo, useEffect, useState } from "react";
import { HiBadgeCheck, HiViewGrid } from "react-icons/hi";
import { IoMdSchool } from "react-icons/io";
import { MdOutlineUnfoldMoreDouble, MdPeopleAlt } from "react-icons/md";

const Navigator = () => {
  const tabIcons = [
    { icon: <HiViewGrid /> },
    { icon: <MdPeopleAlt /> },
    { icon: <IoMdSchool /> },
    { icon: <HiBadgeCheck /> },
    { icon: <MdOutlineUnfoldMoreDouble /> },
  ];

  const mergeIcons = tabs.map((tab: INavigationTab, idx: number) => {
    return {
      ...tab,
      icon: tabIcons[idx].icon,
    };
  });

  const [tabIndex, setTabIndex] = useState<number>(0);

  const searchParams = useSearchParams();
  const queryType = searchParams?.get(ESEARCH_QUERY.TYPE);

  useEffect(() => {
    const tab = tabs.find((tab: INavigationTab) => `${tab.name}` === queryType);
    if (tab) {
      setTabIndex(tab.id);
    }
  }, [queryType]);

  const matchStyle = (idx: number) => {
    return idx === tabIndex
      ? "bg-gray-900 text-white shadow-md"
      : "text-gray-900 hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700";
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
    <ul className="mx-auto mb-2 flex w-fit items-center space-x-1 rounded-lg bg-gray-100 p-1 dark:bg-gray-600">
      {mergeIcons.map((tab) => (
        <li key={tab.id}>
          <button
            type="button"
            key={tab.id}
            onClick={() => handleClick(tab)}
            className={`${matchStyle(
              tab.id
            )} inline-flex items-center rounded-lg px-3 py-1.5 font-medium`}
          >
            <span className="text-sm">{tab.icon}</span>
            <span className="ml-1 hidden text-xs sm:inline-flex">
              {tab.name.toLocaleUpperCase()}
            </span>
          </button>
        </li>
      ))}
    </ul>
  );
};

export default memo(Navigator);
