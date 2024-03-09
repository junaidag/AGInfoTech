import { Suspense } from "react";
import { scrollDown } from "../components/icons";
import dynamic from "next/dynamic";
const Cards = dynamic(() => import("./Cards"), { ssr: false });
export default function Home(): React.ReactElement {
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
  const cards1 = [
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
  return (
    <main className="container mx-auto">
      <h1 className="text-32 lg:text-6xl/normal flex items-center mt-[184px] w-full lg:max-w-[938px] mx-auto flex-wrap justify-center">
        <span className="flex-none text-center">
          {"<"}/ Bringing your&nbsp;
        </span>
        <span className="overflow-hidden relative flex-none bg-[url('/visionbg.png')] w-[104px] lg:w-[301px] rounded-[20px] lg:leading-[76px] bg-cover bg-center -scale-x-100 inline-flex justify-center items-center">
          <span className="absolute inset-0 w-full h-full bg-[#0E0E0E99]" />
          <span className="bg-main-text  !bg-clip-text !text-transparent font-bold -scale-x-100 ">
            vision
          </span>
        </span>
        <span className="hidden lg:inline"> &nbsp; to</span>{" "}
        <span className="flex-none">
          <span className="lg:hidden inline"> &nbsp; to</span> its full
          potential {">"}
        </span>
      </h1>
      <div className="mx-auto max-w-xs flex justify-center text-center flex-col items-center gap-6 mt-12">
        <p>your one stop shop for engineering and dev services.</p>
        <button
          type="button"
          className="getaQoute bg-main transition-all duration-300 ease-in-out px-6 py-2.5 rounded-10 text-[#0E0E0E] text-lg font-bold"
        >
          Get a quote
        </button>
      </div>
      <div className="flex flex-col justify-center items-center mt-24 ">
        <h3 className="relative bg-main-text  bg-clip-text text-transparent px-9 pb-3 font-bold text-xl/tight">
          Trusted by
          <span className="absolute inset-x-0 bottom-0 bg-main h-px rounded-full" />
        </h3>
        <Suspense
          fallback={
            <div className="container mx-auto w-full h-[176px] bg-slate-400 animate-pulse" />
          }
        >
          <Cards />
        </Suspense>
      </div>
      <div className="flex justify-center w-full mx-auto">
        <button className="mt-8 group px-2 py-4  gradientborder">
          <span className="group-hover:-mt-2">{scrollDown}</span>
        </button>
      </div>
      <div className="mt-16 ">
        <div className="container mx-auto border-t border-gray-700 "></div>
        <div className="pt-[59px] px-40">
          <div className="flex justify-between items-center">
            <h3 className="max-w-[437px] w-full font-space-grotesk text-6xl font-normal leading-1.1 tracking-tighter text-left">
              What can <br /> we do{" "}
              <span className="bg-main text-transparent bg-clip-text font-space-grotesk text-5xl font-medium leading-1.5 tracking-tighter text-left">
                for you?
              </span>
            </h3>
            <p className="font-cabinet-grotesk-variable text-base font-normal leading-7 tracking-normal text-left">
              We create products that achieve your end-goal
            </p>
          </div>
          <div className="flex pt-12 container overflow-x-auto no-scrollbar whitespace-nowrap gap-8 ">
            {tabs.map((tab) => (
              <p key={tab}>{tab}</p>
            ))}
          </div>
          <div className="pt-12 gap-8 flex">
            {cards.map((card, index) => (
              <div
                key={index}
                className="max-w-[858px] w-full border rounded-[32px]	py-20 px-12"
              >
                <div className="flex justify-between items-center">
                  <h1 className="font-space-grotesk text-lg font-normal leading-10 tracking-normal text-left">
                    {card.heading}
                  </h1>
                  <p className="py-[10px] px-4 rounded-2xl border border-gray-300">
                    {card.time}
                  </p>
                </div>
                <div className="pt-10 gap-4 max-w-[762px] w-full">
                  <p className="font-cabinet-grotesk-variable text-base font-bold leading-7 tracking-tighter">
                    {card.para}
                  </p>
                  <p className="font-cabinet-grotesk-variable text-base font-normal leading-9 tracking-tighter">
                    {card.para1}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-24 gap-12 ">
        <div className="container mx-auto border-t border-gray-700 "></div>
        <div className="flex justify-between items-center pt-12 px-40">
          <h3 className="max-w-[437px] w-full font-space-grotesk text-6xl font-normal leading-1.1 tracking-tighter text-left">
            Take a look <br /> at{" "}
            <span className="bg-main text-transparent bg-clip-text font-space-grotesk text-5xl font-medium leading-1.5 tracking-tighter text-left">
              our work
            </span>
          </h3>
          <p className="font-cabinet-grotesk-variable text-base font-normal leading-7 tracking-normal text-left">
            We create products that achieve your end-goal
          </p>
        </div>
        <div className="pt-12 gap-8 flex">
          {cards1.map((card, index) => (
            <div
              key={index}
              className="max-w-[858px] w-full border rounded-[32px]	py-20 px-12"
            >
              <div className="flex justify-between items-center">
                <h1 className="font-space-grotesk text-lg font-normal leading-10 tracking-normal text-left">
                  {card.heading}
                </h1>
                <p className="py-[10px] px-4 rounded-2xl border border-gray-300">
                  {card.time}
                </p>
              </div>
              <div className="pt-10 gap-4 max-w-[762px] w-full">
                <p className="font-cabinet-grotesk-variable text-base font-bold leading-7 tracking-tighter">
                  {card.para}
                </p>
                <p className="font-cabinet-grotesk-variable text-base font-normal leading-9 tracking-tighter">
                  {card.para1}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
