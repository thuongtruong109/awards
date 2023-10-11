import type { ICertificate, ICertificateInfo } from "@/types";
import { useState } from "react";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { LiaCertificateSolid } from "react-icons/lia";

type Props = {
  data: ICertificateInfo;
};

const PreView = (props: Props) => {
  const [currentCert, setCurrentCert] = useState<ICertificate>(
    props.data?.certificates[0]
  );

  const getOrg = (org_id: string) =>
    props.data?.orgs.find((org) => org.id === org_id);

  return (
    <div className="mx-auto flex flex-col items-stretch justify-center text-left md:max-w-2xl lg:max-w-4xl">
      <div className="mb-8 rounded-xl bg-white px-4 py-2 shadow">
        <p>{props.data?.desc}</p>
      </div>
      <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-10 lg:gap-x-8">
        <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg bg-gray-100 sm:col-span-5 lg:col-span-5">
          <img
            src={currentCert.img}
            alt={currentCert.name}
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div className="sm:col-span-5 lg:col-span-5">
          <h2 className="text_shadow text-2xl font-bold text-gray-900 sm:pr-12">
            {currentCert.name}
          </h2>

          <div className="my-4 flex items-center justify-between">
            <div className="flex items-center space-x-1 text-sm text-gray-800">
              <AiOutlineSafetyCertificate />
              <a href={getOrg(currentCert.org_id)?.org_link}>
                By:{" "}
                <span className="hover:text-indigo-500">
                  {getOrg(currentCert.org_id)?.org_name}
                </span>
              </a>
            </div>
            <div className="flex items-center space-x-1 text-sm text-gray-800">
              <LiaCertificateSolid />
              <span>{currentCert.date}</span>
            </div>
          </div>

          <div
            aria-labelledby="options-heading"
            className="mt-10 flex items-center space-x-2"
          >
            <button
              type="button"
              className="flex w-full items-center justify-center rounded-lg bg-indigo-600 px-8 py-2 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Add to bag
            </button>
            <button
              type="button"
              className="flex w-full items-center justify-center rounded-lg bg-indigo-600 px-8 py-2 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none"
            >
              Add to bag
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreView;
