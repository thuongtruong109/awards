import Badge from "@/app/[slug]/_components/Badge";
import Typing from "@/app/[slug]/_components/Typing";
import type { ICertificate, ICertificateInfo } from "@/types";
import Image from "next/legacy/image";
import { memo, useState } from "react";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { HiOutlineExternalLink } from "react-icons/hi";
import { LiaCertificateSolid } from "react-icons/lia";
import { PiFireBold } from "react-icons/pi";
import Slide from "./Slide";

type Props = {
  data: ICertificateInfo;
};

const Content = (props: Props) => {
  const [currentCert, setCurrentCert] = useState<ICertificate>(
    props.data?.certificates[0]
  );

  const getOrg = (org_id: string) =>
    props.data?.orgs.find((org) => org.id === org_id);

  const openLink = (link: string | undefined) => {
    link && window.open(link, "_blank");
  };

  return (
    <div className="mx-auto flex flex-col items-center justify-center text-left md:max-w-2xl lg:max-w-4xl xl:max-w-5xl">
      <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-10 lg:gap-x-8">
        <figure className="aspect-h-2 aspect-w-3 overflow-hidden rounded-xl bg-gray-100 shadow-md sm:col-span-5 lg:col-span-5">
          <Image
            src={currentCert?.img}
            alt={currentCert?.name}
            layout="fill"
            className="h-full w-full object-cover object-center"
          />
        </figure>
        <div className="flex h-full flex-col justify-between sm:col-span-5 lg:col-span-5">
          <div className="flex items-start justify-between space-x-3">
            <h2 className="text_shadow card_content_gradient text-2xl font-bold text-gray-900">
              {currentCert?.name}
            </h2>
            {currentCert?.link && (
              <span
                className="my-2 cursor-pointer text-lg text-slate-500 hover:text-indigo-600"
                onClick={() => openLink(currentCert?.link)}
              >
                <HiOutlineExternalLink />
              </span>
            )}
          </div>

          <div className="grid grid-cols-10 items-start justify-between gap-x-3 text-sm">
            <div className="col-span-6 flex flex-wrap items-center space-x-1 text-gray-800">
              <div className="font-medium text-blue-500">
                <AiOutlineSafetyCertificate className="icon" />
                <span className="hidden sm:inline-flex">Issued:</span>
              </div>
              {currentCert?.org_id?.map((org: string, idx: number) => (
                <a
                  key={idx}
                  href={getOrg(org)?.org_link}
                  className="text-indigo-500 underline"
                >
                  {getOrg(org)?.org_name}
                </a>
              ))}
            </div>
            <div className="col-span-4 flex flex-wrap items-center space-x-1 text-gray-800">
              <div className="font-medium text-green-600">
                <LiaCertificateSolid className="icon" />
                <span className="hidden sm:inline-flex">Actived:</span>
              </div>
              <span>{currentCert?.date}</span>
            </div>
          </div>

          <div
            aria-labelledby="options-heading"
            className="space flex flex-wrap items-end space-x-1.5 space-y-1 text-sm"
          >
            <div className="font-medium text-yellow-600">
              <PiFireBold className="icon" />
              <span className="hidden sm:inline-flex">Skills:</span>
            </div>
            {currentCert?.skills?.map((skill: string) => (
              <p key={skill}>
                <Badge text={skill} />
              </p>
            ))}
          </div>

          <Slide data={props.data?.certificates} currentCert={currentCert} onClick={setCurrentCert} />
        </div>
      </div>
      <div className="mt-8 flex justify-start justify-self-start rounded-xl bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-200">
        <Typing text={props.data?.desc} className="px-4 py-2" />
      </div>
    </div>
  );
};

export default memo(Content);
