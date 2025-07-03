"use client";

import { socialHref } from "@/shared";
import React from "react";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { BiLogoFacebook, BiLogoGmail, BiLogoLinkedin } from "react-icons/bi";
import { PiDevToLogoFill } from "react-icons/pi";
import { IoIosLink } from "react-icons/io";

type IBtn = {
  name: string;
  icon: JSX.Element;
  bg: string;
  link: string;
};

const Contact: React.FC = () => {
  const btns: IBtn[] = [
    {
      name: "Blog",
      icon: <IoIosLink />,
      bg: "bg-violet-600 hover:bg-violet-600/90 focus:ring-violet-600/50",
      link: socialHref.blog,
    },
    {
      name: "Github",
      icon: <AiFillGithub />,
      bg: "bg-[#333] hover:bg-[#333]/90 focus:ring-[#333]/50",
      link: socialHref.github,
    },
    {
      name: "Dev.to",
      icon: <PiDevToLogoFill />,
      bg: "bg-green-600 hover:bg-green-600/90 focus:ring-green-600/50",
      link: socialHref.devto,
    },
    {
      name: "LinkedIn",
      icon: <BiLogoLinkedin />,
      bg: "bg-[#0077b5] hover:bg-[#0077b5]/90 focus:ring-[#0077b5]/50",
      link: socialHref.linkedin,
    },
    {
      name: "Facebook",
      icon: <BiLogoFacebook />,
      bg: "bg-[#4267B2] hover:bg-[#4267B2]/90 focus:ring-[#4267B2]/50",
      link: socialHref.facebook,
    },
    {
      name: "Instagram",
      icon: <AiFillInstagram />,
      bg: "bg-[#e1306c] hover:bg-[#e1306c]/90 focus:ring-[#e1306c]/50",
      link: socialHref.instagram,
    },
    {
      name: "Gmail",
      icon: <BiLogoGmail />,
      bg: "bg-[#ea4335] hover:bg-[#ea4335]/90 focus:ring-[#ea4335]/50",
      link: socialHref.mail,
    },
  ];

  const changeLink = (link: string) => {
    window.open(link, "_blank", "noopener noreferrer");
  };
  return (
    <ul className="my-8 flex w-full items-center justify-center space-x-2">
      {btns.map((btn: IBtn) => (
        <li onClick={() => changeLink(btn.link)} key={btn.name}>
          <button
            type="button"
            title={btn.name}
            className={`inline-flex items-center rounded-lg px-2 py-2 text-center font-medium text-white shadow-md focus:outline-none focus:ring-2 md:px-3 ${btn.bg}`}
          >
            <span className="text-base">{btn.icon}</span>
            <span className="ml-1 hidden text-sm md:block">{btn.name}</span>
          </button>
        </li>
      ))}
    </ul>
  );
};

export default React.memo(Contact);
