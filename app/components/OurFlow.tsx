import Image from "next/image";

export default function OurFlow(): React.ReactElement {
  const steps = [
    { id: "01", name: "Ideation & Evaluation", image: "/idea.gif" },
    { id: "02", name: "Product Design", image: "/penadjust.gif" },
    { id: "03", name: "Web Development", image: "/dovelpment.gif" },
    { id: "04", name: "Optimization", image: "/optimization.gif" },
  ];
  return (
    <div className="flex items-center justify-between w-full">
      {steps.map(({ id, name, image }) => (
        <div
          key={id}
          className="flex flex-col items-center gap-2 justify-center"
        >
          <Image
            width={0}
            height={0}
            className="w-52 h-52"
            src={image}
            alt={name}
          />
          <div className="flex flex-col items-center gap-4 text-2xl/6 justify-center">
            <p className="text-center text-slate-400">{id}</p>
            <p className="">{name}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
