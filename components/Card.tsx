"use client";

import Group from "@/components/Group";
import { ICertificateInfo } from "@/types";
import Image from "next/image";
import { MdOutlineOpenInNew } from "react-icons/md";

interface Props {
  cert: ICertificateInfo;
}

const Card = (props: Props) => {
  const openLink = () => {
    window.open(props.cert.orgs[0].org_link, "_blank");
  };

  return (
    <>
      <figure
        className="relative h-36 w-full cursor-pointer overflow-hidden rounded-xl shadow-xl group-hover:shadow-2xl"
        onClick={openLink}
      >
        <Image
          src={props.cert.orgs[0].org_img}
          alt={props.cert.orgs[0].org_name}
          width="1000"
          height="1000"
          loading="lazy"
          className="min-h-full w-full rounded-lg bg-cover transition-all duration-500 ease-in-out group-hover:scale-105"
        />
      </figure>
      <h2
        className="trunc2 text_shadow my-3 cursor-pointer text-center text-xl font-semibold group-hover:text-red-500"
        onClick={openLink}
      >
        {props.cert.name}
      </h2>
      <p
        className="trunc2 m-0 my-2 max-w-[30ch] cursor-pointer text-sm opacity-50"
        onClick={openLink}
      >
        {props.cert.desc}
      </p>
      <div className="flex items-center justify-between">
        <Group orgs={props.cert.orgs} />
        <span
          className="block cursor-pointer text-lg text-gray-500 group-hover:block md:hidden md:group-hover:block"
          onClick={openLink}
        >
          <MdOutlineOpenInNew />
        </span>
      </div>
    </>
  );
};

export default Card;
