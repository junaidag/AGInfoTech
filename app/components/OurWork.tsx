"use client";
import { Suspense } from "react";
import SwiperComponent from "./SwiperComponent";
import { topLeftIcon } from "./icons";
import Image from "next/image";
import { DefaultChip } from "./Chips";
const cards = [
  {
    heading: "Project Name",
    icon: topLeftIcon,
    chip: "FITECH",
    para: "6 million downloads worldwide. World’s first metaverse fintech app.",
    image: "/projectName2.png",
  },
  {
    heading: "Project Name",
    icon: topLeftIcon,
    chip: "GAMING",
    para: "6 million downloads worldwide. World’s first metaverse fintech app.",
    image: "/projectName.png",
  },
];
export default function OurWork() {
  return (
    <Suspense>
      <SwiperComponent
        name="cards"
        array={cards}
        breakpoints={{}}
        slidesPerView={1.5}
        Slide={({ item, index }) => (
          <div
            key={index}
            className="w-[858px] flex flex-col gap-10 overflow-hidden before:absolute before:inset-0 relative gradientborder before:!rounded-32 before:!p-px before:!bg-bordergradient rounded-32 py-20 px-12"
          >
            <div className="flex justify-between items-center">
              <h1 className="whitespace-nowrap text-40 font-normal leading-10 tracking-normal text-left">
                {item.heading}
              </h1>
              <p className="p-2 before:!bg-bordergradient before:rounded-32 rounded-2xl gradientborder ">
                {item.icon}
              </p>
            </div>
            <p className=" font-bold leading-7 w-full max-w-[762px] tracking-tighter">
              {item.para}
            </p>
            <div className="w-full h-[321px] overflow-hidden object-cover object-center rounded-3xl">
              <Image
                src={item.image}
                alt={item.heading}
                className="object-contain w-full h-auto"
                layout="responsive" // Set layout to responsive for auto width and height
                width={0} // Set the desired width
                height={0} // Set the desired height
                quality={75} // Adjust the quality (0-100)
              />
            </div>
            <div>
              <DefaultChip text={item.chip} className="text-xl px-4 py-2.5" />
            </div>
          </div>
        )}
      />
    </Suspense>
  );
}
