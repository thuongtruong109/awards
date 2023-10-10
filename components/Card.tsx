"use client";

import { openSelfLink } from "@/helpers";
import { ICertificateInfoCard } from "@/types";
import { formatCertName } from "@/utils";
import Image from "next/image";

type Props = {
  card: ICertificateInfoCard;
  link?: string;
  children?: React.ReactNode;
};

const Card = (props: Props) => {
  const openLink = () => {
    props.link && openSelfLink(formatCertName(props.link));
  };

  return (
    <>
      <figure
        className="relative h-36 w-full cursor-pointer overflow-hidden rounded-xl shadow-xl group-hover:shadow-2xl"
        onClick={openLink}
      >
        <Image
          src={props.card.cover}
          alt={props.card.name}
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
        {props.card.name}
      </h2>
      <p
        className="trunc2 m-0 my-2 max-w-[30ch] cursor-pointer text-sm opacity-50"
        onClick={openLink}
      >
        {props.card.desc}
      </p>
      <div>{props.children}</div>
    </>
  );
};

export default Card;
