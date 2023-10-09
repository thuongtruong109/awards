"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { HiBadgeCheck, HiViewGrid } from "react-icons/hi";
import { MdOutlineUnfoldMoreDouble, MdPeopleAlt } from "react-icons/md";

const Navigator = () => {
  const tabs = [
    {
      id: 0,
      name: "all",
      icon: <HiViewGrid />,
    },
    {
      id: 1,
      name: "courses",
      icon: <MdPeopleAlt />,
    },
    {
      id: 2,
      name: "others",
      icon: <MdOutlineUnfoldMoreDouble />,
    },
    {
      id: 3,
      name: "badges",
      icon: <HiBadgeCheck />,
    },
  ];

  const [tabIndex, setTabIndex] = useState<number>(0);

  const pathname = usePathname();
  useEffect(() => {
    const tab = tabs.find((tab) => `/${tab.name}` === pathname);
    if (tab) {
      setTabIndex(tab.id);
    }
  }, [pathname]);

  const matchStyle = (idx: number) => {
    return idx === tabIndex
      ? "bg-gray-900 text-white shadow-md"
      : "text-gray-900 hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700";
  };

  return (
    <ul className="mx-auto my-2 flex w-fit items-center space-x-1 rounded-lg bg-gray-100 p-1 dark:bg-gray-600">
      {tabs.map((tab) => (
        <li key={tab.id}>
          <Link href={`/${tab.id === 0 ? "" : tab.name}`}>
            <button
              type="button"
              key={tab.id}
              onClick={setTabIndex.bind(null, tab.id)}
              className={`${matchStyle(
                tab.id
              )} inline-flex items-center rounded-lg px-5 py-1.5 font-medium`}
            >
              <span className="text-sm">{tab.icon}</span>
              <span className="ml-1 text-xs">
                {tab.name.toLocaleUpperCase()}
              </span>
            </button>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Navigator;
