import type { ICertificateOrg } from "@/types";
import Image from "next/legacy/image";
import Link from "next/link";
import React from "react";

type Props = {
  orgs: ICertificateOrg[];
};

const _REMAIN_START_IDX = 4;

const Group: React.FC<Props> = (props: Props) => {
  const orgShift4: ICertificateOrg[] = props.orgs.slice(0, _REMAIN_START_IDX);

  const remainingOrgs =
    props.orgs.length > _REMAIN_START_IDX
      ? props.orgs.length - _REMAIN_START_IDX
      : 0;

  const remainingOpacityBg =
    props.orgs.length > _REMAIN_START_IDX + 1
      ? { backgroundImage: `url(${props.orgs[_REMAIN_START_IDX].org_img})` }
      : props.orgs.length > _REMAIN_START_IDX
        ? {
            backgroundImage: `url(${props.orgs[_REMAIN_START_IDX].org_img})`,
            color: "transparent",
          }
        : {};

  return (
    <ul className="flex space-x-0.5">
      {orgShift4.map((org: ICertificateOrg) => (
        <li key={org.id} title={org.org_name}>
          <Link href={org.org_link} prefetch={true}>
            <figure className="h-8 w-8 cursor-pointer overflow-hidden rounded-full border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-lg  dark:hover:shadow-none">
              <Image
                className="inline-flex min-h-full w-full items-center bg-cover"
                width="100"
                height="100"
                src={org.org_img}
                alt={org.org_name}
              />
            </figure>
          </Link>
        </li>
      ))}
      {remainingOrgs ? (
        <li
          className="flex items-center justify-center w-8 h-8 text-sm font-semibold text-white rounded-full bg-gray-400 dark:bg-gray-600 bg-cover border-gray-300"
          style={remainingOpacityBg}
        >
          +{remainingOrgs}
        </li>
      ) : null}
    </ul>
  );
};

export default React.memo(Group);
