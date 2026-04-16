import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

import { counterItems } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const AnimatedCounter = () => {
  const counterRef = useRef(null);
  const countersRef = useRef([]);

  useGSAP(() => {
    countersRef.current.forEach((counter, index) => {
      const numberElement = counter.querySelector(".counter-number");
      const item = counterItems[index];

      gsap.set(numberElement, { innerText: "0" });

      gsap.to(numberElement, {
        innerText: item.value,
        duration: 2.5,
        ease: "power2.out",
        snap: { innerText: 1 },
        scrollTrigger: {
          trigger: "#counter",
          start: "top center",
        },
        onComplete: () => {
          numberElement.textContent = `${item.value}${item.suffix}`;
        },
      });
    }, counterRef);
  }, []);

  return (
    <div id="counter" ref={counterRef} className="padding-x-lg xl:mt-0 mt-10 sm:mt-14">
      <div className="mx-auto grid-3-cols">
        {counterItems.map((item, index) => (
          <div
            key={index}
            ref={(el) => el && (countersRef.current[index] = el)}
            className="bg-zinc-900 rounded-lg p-2.5 sm:p-4 md:p-8 lg:p-10 flex flex-col justify-center items-center text-center"
          >
            <div className="counter-number text-white-50 text-lg sm:text-2xl md:text-4xl lg:text-5xl font-bold mb-0.5 sm:mb-1 md:mb-2">
              0 {item.suffix}
            </div>
            <div className="text-white-50 text-[9px] sm:text-[11px] md:text-sm lg:text-lg leading-tight">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedCounter;
