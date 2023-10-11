import type { ICertificate, ICertificateInfo } from "@/types";
import { useState } from "react";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { HiOutlineExternalLink } from "react-icons/hi";
import { LiaCertificateSolid } from "react-icons/lia";
import Badge from "./Badge";
import Typing from "./Typing";

type Props = {
  data: ICertificateInfo;
};

const PreView = (props: Props) => {
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
          <img
            src={currentCert?.img}
            alt={currentCert?.name}
            className="h-full w-full object-cover object-center"
          />
        </figure>
        <div className="flex h-full flex-col justify-between sm:col-span-5 lg:col-span-5">
          <div className="flex items-start justify-between space-x-3">
            <h2 className="text_shadow text-2xl font-bold text-gray-900">
              {currentCert?.name}
            </h2>
            <span
              className="my-2 cursor-pointer text-lg text-slate-500 hover:text-slate-700"
              onClick={() => openLink(currentCert?.link)}
            >
              <HiOutlineExternalLink />
            </span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-1 text-sm text-gray-800">
              <AiOutlineSafetyCertificate />
              <a href={getOrg(currentCert?.org_id)?.org_link}>
                By:{" "}
                <span className="text-indigo-500 hover:underline">
                  {getOrg(currentCert?.org_id)?.org_name}
                </span>
              </a>
            </div>
            <div className="flex items-center space-x-1 text-sm text-gray-800">
              <LiaCertificateSolid />
              <span>{currentCert?.date}</span>
            </div>
          </div>

          <div
            aria-labelledby="options-heading"
            className="space flex flex-wrap items-center space-x-2 space-y-1"
          >
            {currentCert.skills?.map((skill) => (
              <p key={skill}>
                <Badge text={skill} />
              </p>
            ))}
          </div>
          <figure className="flex space-x-2 overflow-x-auto p-2">
            {props?.data?.certificates?.map((cert) => (
              <img
                key={cert.id}
                src={cert.img}
                alt={cert.name}
                onClick={() => setCurrentCert(cert)}
                className={`w-30 h-16 rounded-md ${
                  cert.id === currentCert.id &&
                  "ring-2 ring-indigo-500 ring-offset-2"
                }`}
              />
            ))}
          </figure>
        </div>
      </div>
      <div className="mt-8 flex justify-start justify-self-start rounded-xl bg-white">
        <Typing text={props.data?.desc} className="px-4 py-2" />
      </div>
    </div>
  );
};

export default PreView;
