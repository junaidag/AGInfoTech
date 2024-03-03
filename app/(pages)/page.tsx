import Image from "next/image";

export default function Home(): React.ReactElement {
  const trustedBy = [
    "ash.svg",
    "thesun.svg",
    "purecommerce.svg",
    "jdvm.svg",
    "copitch.svg",
    "randys.svg",
    "enterhere.svg",
    "istry.svg",
    "hrlogics.svg",
    "accualigners.svg",
    "s&h.svg",
    "poulta.png",
  ];
  return (
    <main className="container mx-auto">
      <h1 className="text-32 lg:text-6xl/normal flex items-center mt-[184px] w-full lg:max-w-[938px] mx-auto flex-wrap justify-center">
        <span className="flex-none text-center">
          {"<"}/ Bringing your&nbsp;
        </span>
        <span className="overflow-hidden relative flex-none bg-[url('/visionbg.png')] w-[104px] lg:w-[301px] rounded-[20px] lg:leading-[76px] bg-cover bg-center -scale-x-100 inline-flex justify-center items-center">
          <span className="absolute inset-0 w-full h-full bg-[#0E0E0E99]" />
          <span className="bg-main bg-clip-text text-transparent font-bold -scale-x-100 ">
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
          className="bg-main px-6 py-2.5 rounded-10 text-[#0E0E0E] text-lg font-bold"
        >
          Get a quote
        </button>
      </div>
      <div className="flex flex-col justify-center items-center mt-24 ">
        <h3 className="relative bg-main bg-clip-text text-transparent px-9 pb-3 font-bold text-xl/tight">
          Trusted by
          <span className="absolute inset-x-0 bottom-0 bg-main h-px rounded-full" />
        </h3>
        <div className="grid grid-cols-3 lg:grid-cols-6 gap-8 items-center gradientborder mt-8 p-6 bg-[#FFFFFF05] w-full">
          {trustedBy.map((item) => (
            <div
              key={item}
              className="relative h-12 flex items-center justify-center"
            >
              <Image
                className="object-center h-full w-auto "
                src={`/${item}`}
                alt={item}
                layout="fill"
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
