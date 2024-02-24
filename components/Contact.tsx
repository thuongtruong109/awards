"use client";

import { memo } from "react";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { BiLogoFacebook, BiLogoGmail, BiLogoLinkedin } from "react-icons/bi";
import { PiDevToLogoFill } from "react-icons/pi";

const Contact = () => {
  const btns = [
    {
      name: "Facebook",
      icon: <BiLogoFacebook />,
      bg: "bg-[#4267B2] hover:bg-[#4267B2]/90 focus:ring-[#4267B2]/50",
      link: "https://www.facebook.com/thuongtruong1009",
    },
    {
      name: "Github",
      icon: <AiFillGithub />,
      bg: "bg-[#333] hover:bg-[#333]/90 focus:ring-[#333]/50",
      link: "https://www.github.com/thuongtruong1009",
    },
    {
      name: "LinkedIn",
      icon: <BiLogoLinkedin />,
      bg: "bg-[#0077b5] hover:bg-[#0077b5]/90 focus:ring-[#0077b5]/50",
      link: "https://www.linkedin.com/in/thuongtruong1009",
    },
    {
      name: "Instagram",
      icon: <AiFillInstagram />,
      bg: "bg-[#e1306c] hover:bg-[#e1306c]/90 focus:ring-[#e1306c]/50",
      link: "https://www.instagram.com/thuongtruong1009",
    },
    {
      name: "Email",
      icon: <BiLogoGmail />,
      bg: "bg-[#ea4335] hover:bg-[#ea4335]/90 focus:ring-[#ea4335]/50",
      link: "mailto:thuongtruongofficial@gmail.com",
    },
    {
      name: "Dev.to",
      icon: <PiDevToLogoFill />,
      bg: "bg-green-600 hover:bg-green-600/90 focus:ring-green-600/50",
      link: "https://dev.to/thuongtruong1009",
    },
  ];

  const changeLink = (link: string) => {
    window.open(link, "_blank", "noopener noreferrer");
  };
  return (
    <ul className="my-8 flex w-full items-center justify-center space-x-2">
      {btns.map((btn) => (
        <li onClick={() => changeLink(btn.link)} key={btn.name}>
          <button
            type="button"
            title={btn.name}
            className={`inline-flex items-center rounded-lg px-2 py-2 text-center font-medium text-white shadow-md focus:outline-none focus:ring-2 md:px-3 ${btn.bg}`}
          >
            <span className="text-base">{btn.icon}</span>
            <span className="ml-2 hidden text-sm md:block">{btn.name}</span>
          </button>
        </li>
      ))}
    </ul>
  );
};

export default memo(Contact);
