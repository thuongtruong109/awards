import { ICertificate } from "@/types";
import Image from "next/legacy/image";
import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

type Props = {
  data: ICertificate[];
  currentCert: ICertificate;
  onClick: (cert: ICertificate) => void;
};

const Slide: React.FC<Props> = (props: Props) => {
  return (
    <Swiper
      className="mySwiper w-full"
      modules={[Pagination, Navigation]}
      spaceBetween={3}
      slidesPerView={4}
      pagination={{ type: "bullets", clickable: true, dynamicBullets: false}}
    >
      {props.data?.map((cert, index) => {
        return (
          <SwiperSlide key={index} className="p-1 pb-5">
            <figure
              className={`rounded-md min-h-[80px] ring-2 bg-slate-100 dark:bg-slate-700 cursor-pointer relative ${
                cert.id === props.currentCert.id ? "ring-blue-500" : "ring-transparent"
              }`}
            >
              <span className="bg-transparent border-2 border-t-slate-300 dark:border-t-slate-500 animate-spin w-5 h-5 absolute top-1/3 left-[45%] rounded-full" />
              <Image
                src={cert.img}
                alt={cert.name}
                layout="fill"
                priority
                onClick={() => {
                  props.onClick(cert);
                }}
                className="rounded-md"
              />
            </figure>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default React.memo(Slide);
