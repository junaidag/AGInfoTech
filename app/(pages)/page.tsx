export default function Home() {
  return (
    <main className="container mx-auto ">
      <div className="text-32 lg:text-6xl/normal flex items-center mt-[184px] w-full lg:max-w-[938px] mx-auto flex-wrap justify-center">
        <span className="flex-none text-center">
          {"<"}/ Bringing your&nbsp;
        </span>
        <span className="overflow-hidden relative flex-none bg-[url('/visionbg.png')] w-[104px] lg:w-[301px] rounded-[20px] lg:leading-[76px] bg-cover bg-center -scale-x-100 inline-flex justify-center items-center">
          <span className="absolute inset-0 w-full h-full bg-[#0E0E0E99]" />
          <span className="bg-[linear-gradient(90deg,_#1D89FF_0%,_#8EF9F1_100%)] bg-clip-text text-transparent font-bold -scale-x-100 ">
            vision
          </span>
        </span>
        <span className="hidden lg:inline"> &nbsp; to</span>{" "}
        <span className="flex-none">
          <span className="lg:hidden inline"> &nbsp; to</span> its full
          potential {">"}
        </span>
      </div>
      <div className="mx-auto max-w-xs ">
        <p>your one stop shop for engineering and dev services.</p>
        <button className="bg-main">Get a quote</button>
      </div>
    </main>
  );
}
