"use client";
import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";

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
export default function Cards(): React.ReactElement {
  const cardsRef = useRef<Array<any>>([]);
  useEffect(() => {
    if (cardsRef.current && typeof window !== "undefined") {
      const tl = gsap.timeline({ defaults: { ease: "power2.in" } });
      tl.from(cardsRef.current, {
        duration: 1,
        scale: 0,
        opacity: 0,
        rotation: 360,
        stagger: 0.1,
      }).to(cardsRef.current, {
        duration: 1,
        scale: 1,
        opacity: 1,
        rotation: 0,
        stagger: 0.1,
      });
    }
  }, []);

  return (
    <div className="grid grid-cols-3 lg:grid-cols-6 gap-8 items-center gradientborder mt-8 p-6 bg-[#FFFFFF05] w-full">
      {trustedBy.map((item, i) => (
        <div
          ref={(el) => (cardsRef.current[i] = el)}
          key={item}
          className="relative duration-300 ease-in-out h-12 flex items-center justify-center"
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
  );
}
