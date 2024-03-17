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
  "poulta.svg",
];
export default function Cards(): React.ReactElement {
  const cardsRef = useRef<Array<any>>([]);
  useEffect(() => {
    if (cardsRef.current && typeof window !== "undefined") {
      const animateImages = () => {
        const tl = gsap.timeline({ defaults: { ease: "power2.in" } });

        cardsRef.current.forEach((image, i) => {
          const direction = Math.floor(Math.random() * 4); // 0 for left, 1 for right, 2 for top, 3 for bottom
          let startX = 0,
            startY = 0,
            rotation = 0;

          switch (direction) {
            case 0: // left
              startX = -100;
              rotation = -90;
              break;
            case 1: // right
              startX = 100;
              rotation = 90;
              break;
            case 2: // top
              startY = -100;
              rotation = 180;
              break;
            case 3: // bottom
              startY = 100;
              rotation = -180;
              break;
            default:
              break;
          }

          tl.from(image, {
            duration: 0.3,
            x: startX,
            y: startY,
            rotation,
            opacity: 0,
          }).to(image, {
            duration: 0.3,
            x: 0,
            y: 0,
            rotation: 0,
            opacity: 1,
          });
        });
      };

      animateImages();
    }
    return () => {
      gsap.globalTimeline.clear();
    };
  }, []);
  // const cardsRef = useRef<Array<any>>([]);
  // useEffect(() => {
  //   if (cardsRef.current && typeof window !== "undefined") {
  //     const animation = () => {
  //       const tl = gsap.timeline({ defaults: { ease: "power2.in" } });
  //       const direction = Math.floor(Math.random() * 2);
  //       tl.from(cardsRef.current, {
  //         duration: 0.5,
  //         scale: 0,
  //         opacity: 0,
  //         rotation: Math.floor(Math.random() * 2) ? 360 : -360,
  //         stagger: 0.2,
  //       }).to(cardsRef.current, {
  //         duration: 0.5,
  //         scale: 1,
  //         opacity: 1,
  //         rotation: 0,
  //         stagger: 0.2,
  //       });
  //     };
  //     animation();
  //   }
  //   return () => {
  //     gsap.globalTimeline.clear();
  //   };
  // }, []);
  return (
    <div className="grid grid-cols-3 lg:grid-cols-6 gap-8 items-center w-full">
      {trustedBy.map((item, i) => (
        <div
          ref={(el) => (cardsRef.current[i] = el)}
          key={item}
          className="relative flex items-center last:w-full justify-center"
        >
          <Image
            className={`object-center w-auto`}
            src={`/${item}`}
            alt={item}
            width={0}
            height={48}
            quality={75}
          />
        </div>
      ))}
    </div>
  );
}
