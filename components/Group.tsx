import type { IOrg } from "@/types";
import Link from "next/link";
import { memo } from "react";

type Props = {
  orgs: Array<IOrg>;
};

const Group = (props: Props) => {
  return (
    <ul className="flex space-x-0.5">
      {props.orgs.map((org) => (
        <li key={org.org_name}>
          <Link href={org.org_link}>
            <img
              className="h-8 w-8 cursor-pointer rounded-full border-2 border-white shadow-sm hover:shadow-lg dark:border-gray-800"
              src={org.org_img}
              alt={org.org_name}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default memo(Group);
