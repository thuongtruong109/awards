import type { ICertificateOrg } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { memo } from "react";

type Props = {
  orgs: ICertificateOrg[];
};

const Group = (props: Props) => {
  return (
    <ul className="flex space-x-0.5">
      {props.orgs.map((org) => (
        <li key={org.id} title={org.org_name}>
          <Link href={org.org_link}>
            <figure className="h-8 w-8 cursor-pointer overflow-hidden rounded-full border-2 border-white shadow-sm hover:shadow-lg dark:border-gray-800">
              <Image
                className="inline-flex min-h-full w-full items-center bg-cover"
                width="1000"
                height="1000"
                src={org.org_img}
                alt={org.org_name}
              />
            </figure>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default memo(Group);
