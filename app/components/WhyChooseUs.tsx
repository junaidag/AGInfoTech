"use client";
import {
  checkbadge,
  commandLine,
  cpuchip,
  dollarsign,
  fingerprint,
  lifebuoy,
  sheildCheck,
  topLeftIcon,
  trophy,
  userGroup,
  wrench,
} from "./icons";

export default function WhyChooseUs() {
  const cards = [
    { name: "Scale with the right technology", icon: cpuchip },
    { name: "Software project rescue", icon: lifebuoy },
    { name: "Trusted tech partner", icon: fingerprint },
    { name: "99.98% app and team availability", icon: userGroup },
    { name: "We Don't Over-Engineer", icon: wrench },
    { name: "Cyber Security", icon: sheildCheck },
    { name: "Long-Term, Goal-Driven Solutions", icon: trophy },
    { name: "Quality Assurance", icon: checkbadge },
    { name: "Agile software development", icon: commandLine },
    { name: "Cost Efficient Solutions", icon: dollarsign },
  ];
  return (
    <div className="grid grid-cols-3 gap-8">
      {cards.map((card, idx) => (
        <div
          key={idx}
          className="scaleAnimation flex flex-col items-center justify-center last:col-start-2 py-16  overflow-hidden before:absolute before:inset-0 relative gradientborder before:!rounded-32 before:!p-px before:!bg-bordergradient rounded-32"
        >
          {card.icon}
          <h5 className="text-lg font-normal leading-10 tracking-normal text-left">
            {card.name}
          </h5>
        </div>
      ))}
    </div>
  );
}
