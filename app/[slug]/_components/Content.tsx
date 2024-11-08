import Badge from "@/app/[slug]/_components/Badge";
import Typing from "@/app/[slug]/_components/Typing";
import type { ICertificate, ICertificateInfo } from "@/types";
import { formatDate } from "@/utils";
import React from "react";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { HiOutlineExternalLink } from "react-icons/hi";
import { LiaCertificateSolid } from "react-icons/lia";
import { PiFireBold } from "react-icons/pi";
import ImgEffect from "@/app/libs/ImgEffect";
import Slide from "./Slide";
import { LuPencilLine } from "react-icons/lu";

type Props = {
  data: ICertificateInfo;
};

const Content: React.FC<Props> = (props: Props) => {
  const [currentCert, setCurrentCert] = React.useState<ICertificate>(
    props.data?.certificates[0]
  );

  const getOrg = (org_id: string) =>
    props.data?.orgs.find((org) => org.id === org_id);

  const openLink = (link: string | undefined) => {
    link && window.open(link, "_blank");
  };

  return (
    <div className="mx-auto flex flex-col items-center justify-center text-left w-full my-4">
      <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-10 lg:gap-x-8 text-gray-800">
        <ImgEffect src={currentCert?.img} alt={currentCert?.name} />

        <div className="flex h-full flex-col justify-between sm:col-span-5 lg:col-span-5">
          <div className="flex items-start justify-between space-x-3">
            <h2 className="text_shadow card_content_gradient text-2xl font-bold flex space-x-2">
              <LuPencilLine className="text-purple-600 text-xl mt-1.5" />
              <Typing text={currentCert?.name} />
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
            <div className="col-span-6 flex flex-wrap items-center space-x-1">
              <div className="font-medium text-blue-500">
                <AiOutlineSafetyCertificate className="icon" />
                <span className="hidden sm:inline-flex">Issued:</span>
              </div>
              {currentCert?.org_id?.map((org: string, idx: number) => (
                <div key={idx}>
                  {idx == 0 ? null : <span>, </span>}
                  <a
                    href={getOrg(org)?.org_link}
                    className="text-indigo-500 hover:underline"
                  >
                    {getOrg(org)?.org_name}
                  </a>
                </div>
              ))}
            </div>
            <div className="col-span-4 flex flex-wrap items-center space-x-1">
              <div className="font-medium text-green-600">
                <LiaCertificateSolid className="icon" />
                <span className="hidden sm:inline-flex">Actived:</span>
              </div>
              <span>{currentCert?.date ? formatDate(currentCert?.date) : 'unknown'}</span>
            </div>
          </div>

          <div
            aria-labelledby="options-heading"
            className="space flex flex-wrap items-end space-x-1.5 space-y-1 text-sm mb-2"
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

          <Slide
            data={props.data?.certificates}
            currentCert={currentCert}
            onClick={setCurrentCert}
          />
        </div>
      </div>
      <div className="mt-8 flex justify-start justify-self-start rounded-lg bg-white text-gray-600 text-sm">
        <Typing text={props.data?.desc} className="px-4 py-2" />
      </div>
    </div>
  );
};

export default React.memo(Content);
