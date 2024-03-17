"use client";
import { Mousewheel, Navigation, Keyboard } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { SwiperOptions } from "swiper/types";
type mergedType = SwiperOptions & {
  array: Array<any>;
  name?: string;
  Slide: React.FC<{ item: any; index: number }>;
};
export default function SwiperComponent({
  array,
  name = "",
  breakpoints = {
    320: {
      slidesPerView: 3,
      spaceBetween: 12,
    },
    480: {
      slidesPerView: 3.75,
      spaceBetween: 12,
    },
    768: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 6.3,
      spaceBetween: 20,
    },
    1280: {
      slidesPerView: 6.5,
      spaceBetween: 20,
    },
    1550: {
      slidesPerView: 7,
      spaceBetween: 20,
    },
  },
  Slide,
  ...props
}: mergedType): React.ReactElement {
  return (
    <Swiper
      {...props}
      key={`swiper${name}`}
      navigation={{
        prevEl: `.prev-button${name}`,
        nextEl: `.next-button${name}`,
      }}
      speed={800}
      slidesPerGroup={3}
      spaceBetween={20}
      slidesPerView={"auto"}
      mousewheel={{ forceToAxis: true }}
      modules={[Navigation, Mousewheel, Keyboard]}
      breakpoints={breakpoints}
    >
      {array.map((item, idx: number) => {
        return (
          <SwiperSlide key={idx} className="relative !w-fit cursor-pointer">
            <Slide item={item} index={idx} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
