import { ICertificate } from "@/types";
import Image from "next/legacy/image";
import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

type Props = {
  data: ICertificate[];
  currentCert: ICertificate;
  onClick: (cert: ICertificate) => void;
};

const Slide: React.FC<Props> = (props: Props) => {
  return (
    <Swiper
      className="w-full"
      modules={[Pagination]}
      spaceBetween={3}
      slidesPerView={4}
      pagination={{ type: "bullets", clickable: true }}
    >
      {props.data.map((cert, index) => {
        return (
          <SwiperSlide key={index} className="p-1 pb-4">
            <figure
              className={`rounded-md w-[145px] h-[75px] ring-2 bg-slate-100 ${
                cert.id === props.currentCert.id ? "ring-blue-500" : "ring-transparent"
              }`}
            >
              <Image
                src={cert.img}
                alt={cert.name}
                priority={true}
                width={145}
                height={75}
                onClick={() => {
                  props.onClick(cert);
                }}
                className="cursor-pointer rounded-md"
              />
            </figure>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default React.memo(Slide);
