import React from "react";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { EFILTER, ESEARCH_QUERY } from "@/enums";

type IMenu = {
  id: string;
  name: string;
};

const menu: IMenu[] = [
  { id: "default", name: "Default" },
  { id: EFILTER.ASC, name: "Ascending" },
  { id: EFILTER.DESC, name: "Descending" },
  { id: EFILTER.MOST, name: "Most" },
  { id: EFILTER.LEAST, name: "Least" },
];

const Filter: React.FC = () => {
  const params = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const [choice, setChoice] = React.useState<string>("default");

  const handleChoice = (optionId: string) => {
    const newParams = new URLSearchParams(params?.toString());
    if (optionId === "default") {
      newParams.delete(ESEARCH_QUERY.SORT_ORDER);
    } else {
      newParams.set(ESEARCH_QUERY.SORT_ORDER, optionId.toString());
    }
    router.push(`${pathname}?${newParams.toString()}`);
    setChoice(optionId);
  };

  React.useEffect(() => {
    const tab = menu.find((tab: IMenu) => `${tab.id}` === choice);
    if (tab) {
      const queryType = params?.get(ESEARCH_QUERY.SORT_ORDER);
      if (queryType === undefined || queryType === null || queryType === "") {
        setChoice("default");
      } else {
        setChoice(queryType);
      }
    }
  }, [pathname, params, choice]);

  return (
    <button
      type="button"
      title="Filter"
      className="group relative inline-flex rounded-md p-2 bg-white border hover:bg-gray-100"
    >
      <Image
        src="/icons/nav/filter.png"
        width={20}
        height={20}
        alt="filter_icon"
      />

      <ul
        className="hidden group-hover:block z-10 absolute right-0 mt-7 w-max rounded-lg p-1 bg-white shadow-lg text-left space-y-px"
        style={{ boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)" }}
      >
        {menu.map((item: IMenu) => (
          <li
            key={item.id}
            className={`rounded-md flex items-center space-x-2 pl-1 pr-2 py-1 text-sm ${item.id === choice ? "bg-sky-100/50 ring-[1px] ring-inset ring-sky-200" : "hover:bg-slate-100"}`}
            title={item.name}
            onClick={() => handleChoice(item.id)}
          >
            <svg
              xmlns="http://w3.org/2000/svg"
              viewBox="0 0 30 30"
              width="0.9rem"
              height="0.9rem"
              className={item.id === choice ? "opacity-100" : "opacity-0"}
            >
              <path
                stroke="rgb(14 165 233)"
                fill="rgb(14 165 233)"
                d="M 26.980469 5.9902344 A 1.0001 1.0001 0 0 0 26.292969 6.2929688 L 11 21.585938 L 4.7070312 15.292969 A 1.0001 1.0001 0 1 0 3.2929688 16.707031 L 10.292969 23.707031 A 1.0001 1.0001 0 0 0 11.707031 23.707031 L 27.707031 7.7070312 A 1.0001 1.0001 0 0 0 26.980469 5.9902344 z"
              />
            </svg>
            <span
              className={
                item.id === choice
                  ? "font-medium text-sky-500"
                  : "font-light text-slate-400"
              }
            >
              {item.name}
            </span>
          </li>
        ))}
      </ul>
    </button>
  );
};

export default React.memo(Filter);
