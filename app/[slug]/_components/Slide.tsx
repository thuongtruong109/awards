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
          <SwiperSlide key={index} className="p-1 pb-8 h-min">
            <figure
              className={`rounded-md ${
                cert.id === props.currentCert.id && "ring-2 ring-blue-500"
              }`}
            >
              <Image
                src={cert.img}
                alt={cert.name}
                width="130"
                height="75"
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
