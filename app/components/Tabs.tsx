"use client";

import { Suspense, useState } from "react";
import dynamic from "next/dynamic";
const SwiperComponent = dynamic(() => import("./SwiperComponent"), {
  ssr: false,
});

export default function Tabs() {
  const tabs = [
    "Software development",
    "UX & UI",
    "Hybrid Mobile App Development",
    "Digital Marketing",
    "AI Development",
    "SAAS Development",
    "Digital Transformation",
    "E-Commerce Development",
  ];
  const [selected, setSelected] = useState(0);
  const cards = [
    {
      heading: "Discovery + research",
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
  return (
    <div className="mt-12">
      <Suspense>
        <SwiperComponent
          array={tabs}
          name="tab"
          breakpoints={{}}
          Slide={({ item, index }) => (
            <button
              type="button"
              onClick={() => setSelected(index)}
              className={`relative py-3 w-fit whitespace-nowrap ${selected === index ? "  bg-main text-transparent bg-clip-text font-bold" : "font-medium"} transition-all duration-300 ease-in-out px-1`}
              key={index}
            >
              {item}
              <span
                className={`${selected === index ? " h-1 w-full inset-x-0  bottom-0" : "w-0 h-0 left-1/2 bottom-3"} rounded-t-lg transition-all duration-300 ease-in-out bg-main absolute`}
              />
            </button>
          )}
        />
      </Suspense>
      <div className="pt-12">
        <Suspense>
          <SwiperComponent
            name="cards"
            array={cards}
            breakpoints={{}}
            slidesPerView={1.5}
            Slide={({ item, index }) => (
              <div
                key={index}
                className="w-[858px] overflow-hidden before:absolute before:inset-0 relative gradientborder before:!rounded-32 before:!p-px before:!bg-bordergradient rounded-32 py-20 px-12"
              >
                <div className="flex justify-between items-center">
                  <h1 className="whitespace-nowrap text-40 font-normal leading-10 tracking-normal text-left">
                    {item.heading}
                  </h1>
                  <p className="py-2.5 before:!bg-bordergradient before:rounded-32 px-4 rounded-2xl gradientborder ">
                    {item.time}
                  </p>
                </div>
                <div className="pt-10 gap-4 w-full max-w-[762px]">
                  <p className=" font-bold leading-7 tracking-tighter">
                    {item.para}
                  </p>
                  <p className=" font-normal leading-9 tracking-tighter">
                    {item.para1}
                  </p>
                </div>
              </div>
            )}
          />
        </Suspense>
      </div>
    </div>
  );
}
