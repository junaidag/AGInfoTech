"use client";
import { Suspense } from "react";
import SwiperComponent from "./SwiperComponent";
const cards = [
  {
    heading: "Project Name",
    time: "1-2 hours",
    para: "Understanding your branding requirements",
    para1:
      "Discovery and research are vital in the brand identity process as they provide valuable insights into market dynamics, target audience preferences, and competitor analysis, enabling the development of a strategic and differentiated brand identity.",
  },
  {
    heading: "Visual direction",
    time: "3-4 hours",
    para: "What to aim for",
    para1:
      "Creative direction and mood boards are crucial as they provide a visual representation of the desired aesthetic. They ensure stakeholder alignment, foster collaboration, and guide the development of a cohesive and impactful brand identity.",
  },
];
export default function OurWork() {
  return (
    <Suspense>
      <SwiperComponent
        name="card"
        array={cards}
        breakpoints={{}}
        slidesPerView={1.5}
        Slide={({ item, index }) => (
          <div
            key={index}
            className="max-w-[858px] w-full border rounded-32 py-20 px-12"
          >
            <div className="flex justify-between items-center">
              <h1 className=" text-lg font-normal leading-10 tracking-normal text-left">
                {item.heading}
              </h1>
              <p className="py-[10px] px-4 rounded-2xl border border-gray-300">
                {item.time}
              </p>
            </div>
            <div className="pt-10 gap-4 max-w-[762px] w-full">
              <p className="font-cabinet-grotesk-variable text-base font-bold leading-7 tracking-tighter">
                {item.para}
              </p>
              <p className="font-cabinet-grotesk-variable text-base font-normal leading-9 tracking-tighter">
                {item.para1}
              </p>
            </div>
          </div>
        )}
      />
    </Suspense>
  );
}
