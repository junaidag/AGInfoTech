import { Suspense } from "react";
import { scrollDown } from "../components/icons";
import dynamic from "next/dynamic";
import Tabs from "../components/Tabs";
import OurWork from "../components/OurWork";
const Cards = dynamic(() => import("./Cards"), { ssr: false });

export default function Home(): React.ReactElement {
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
        <button type="button" className="mt-8 group px-2 py-4  gradientborder">
          <span className="group-hover:-mt-2">{scrollDown}</span>
        </button>
      </div>
      <div className="mt-16 ">
        <div className="container mx-auto border-t border-gray-700 "></div>
        <div className="pt-[59px]">
          <div className="flex justify-between items-center">
            <h3 className="max-w-[437px] w-full  text-6xl font-normal leading-1.1 tracking-tighter text-left">
              What can <br /> we do{" "}
              <span className="bg-main text-transparent bg-clip-text  text-5xl font-medium leading-1.5 tracking-tighter text-left">
                for you?
              </span>
            </h3>
            <p className="font-cabinet-grotesk-variable text-base font-normal leading-7 tracking-normal text-left">
              We create products that achieve your end-goal
            </p>
          </div>
          <Tabs />
        </div>
      </div>
      <div className="mt-24 gap-12 ">
        <div className="container mx-auto border-t border-gray-700 "></div>
        <div className="flex justify-between items-center pt-12 px-40">
          <h3 className="max-w-[437px] w-full  text-6xl font-normal leading-1.1 tracking-tighter text-left">
            Take a look <br /> at{" "}
            <span className="bg-main text-transparent bg-clip-text  text-5xl font-medium leading-1.5 tracking-tighter text-left">
              our work
            </span>
          </h3>
          <p className="font-cabinet-grotesk-variable text-base font-normal leading-7 tracking-normal text-left">
            Started from an idea, now we are here!
          </p>
        </div>
        <div className="pt-12 gap-8 flex">
          <OurWork />
        </div>
      </div>
    </main>
  );
}
