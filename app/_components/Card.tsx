"use client";

import { openSelfLink } from "@/helpers";
import { ICertificate, ICertificateInfoCard } from "@/types";
import { formatCertName, obj2Arr } from "@/utils";
import Image from "next/legacy/image";
import React from "react";
import Group from "./Group";
import Quickview from "@/app/libs/Quickview";

type Props = {
  card: ICertificateInfoCard;
  children?: React.ReactNode;
};

const Card: React.FC<Props> = (props: Props) => {
  const openLink = () => {
    props.card.name && openSelfLink(formatCertName(props.card.name));
  };

  const getSources = (certificate: ICertificate[]): string[] => {
    const sources: string[] = [];
    if (certificate.length > 0) {
      certificate.forEach((cert) => {
        sources.push(cert.img);
      });
    }
    return sources;
  };

  const [color, setColor] = React.useState({});

  const randomColor = () => {
    let arr = ["3, 169, 244", "244, 67, 54", "156, 39, 176"];
    let randArr = arr[Math.floor(Math.random() * arr.length)];

    setColor({
      outline: `2px solid rgba(${randArr}, 0.15)`,
      borderColor: `rgba(${randArr}, 0.5)`,
    });
  };

  return (
    <li
      className="card group h-[18.5rem] rounded-xl bg-[#ffffffb3] backdrop-blur-md p-2 transition-colors ring-2 ring-inset ring-white"
      style={color}
      rel="noopener noreferrer"
      onMouseEnter={randomColor}
      onMouseLeave={() => setColor({})}
    >
      <figure
        className="relative max-h-36 h-full w-full cursor-pointer overflow-hidden rounded-xl shadow-xl group-hover:shadow-2xl"
        onClick={openLink}
      >
        <Image
          src={props.card.cover}
          alt={props.card.name}
          priority={true}
          layout="fill"
          className={
            "h-full w-full rounded object-cover transition-all duration-500 ease-in-out group-hover:scale-105"
          }
        />
      </figure>
      <h2
        className="trunc2 text_shadow card_title_gradient my-3 cursor-pointer text-center text-xl font-semibold"
        onClick={openLink}
      >
        {props.card.name}
      </h2>
      <p
        className="trunc2 m-0 mt-2 mb-3 max-w-[30ch] cursor-pointer text-sm font-medium text-gray-400"
        onClick={openLink}
      >
        {props.card.desc}
      </p>
      <div>{props.children}</div>
      <div className="flex items-end justify-between">
        <Group orgs={obj2Arr(props.card.orgs)} />
        <Quickview
          sources={getSources(
            props.card.certificates as unknown as ICertificate[]
          )}
          title="Quick view"
        />
      </div>
    </li>
  );
};

export default React.memo(Card);
