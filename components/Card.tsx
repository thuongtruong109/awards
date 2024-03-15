"use client";

import { openSelfLink } from "@/helpers";
import { ICertificateInfoCard } from "@/types";
import { formatCertName } from "@/utils";
import Image from "next/image";
import { memo, useState } from "react";

type Props = {
  card: ICertificateInfoCard;
  link?: string;
  children?: React.ReactNode;
};

const Card = (props: Props) => {
  const openLink = () => {
    props.link && openSelfLink(formatCertName(props.link));
  };

  const [loaded, setLoaded] = useState(false);

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
          priority={true}
          className={`min-h-full w-full rounded-lg bg-cover transition-all duration-500 ease-in-out group-hover:scale-105 ${
            loaded ? "" : ""
          }`}
          onLoadingComplete={() => setLoaded(true)}
        />
      </figure>
      <h2
        className="trunc2 text_shadow card_title_gradient my-3 cursor-pointer text-center text-xl font-semibold dark:text-white"
        onClick={openLink}
      >
        {props.card.name}
      </h2>
      <p
        className="trunc2 m-0 my-2 max-w-[30ch] cursor-pointer text-sm font-medium text-gray-400"
        onClick={openLink}
      >
        {props.card.desc}
      </p>
      <div>{props.children}</div>
    </>
  );
};

export default memo(Card);
