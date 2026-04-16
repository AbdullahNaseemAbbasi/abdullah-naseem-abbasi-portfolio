import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { expCards } from "../constants";
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  useGSAP(() => {
    gsap.utils.toArray(".timeline-card").forEach((card) => {
      gsap.from(card, {
        xPercent: -100,
        opacity: 0,
        transformOrigin: "left left",
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
        },
      });
    });

    gsap.utils.toArray(".expText").forEach((text) => {
      gsap.from(text, {
        opacity: 0,
        xPercent: 0,
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: text,
          start: "top 60%",
        },
      });
    }, "<");
  }, []);

  return (
    <section
      id="experience"
      className="flex-center md:mt-40 mt-16 section-padding xl:px-0 overflow-hidden"
    >
      <div className="w-full h-full md:px-10 lg:px-20 px-4">
        <TitleHeader
          title="Professional Work Experience"
          sub="💼 My Career Overview"
        />
        <div className="md:mt-32 mt-16 relative">
          <div className="relative z-50 xl:space-y-32 space-y-10">
            {expCards.map((card) => (
              <div key={card.title} className="exp-card-wrapper">
                <div className="xl:w-2/6 w-full">
                  <GlowCard card={card}>
                    <div>
                      <img
                        src={card.imgPath}
                        alt="exp-img"
                        className="w-full h-auto rounded-lg"
                      />
                    </div>
                  </GlowCard>
                </div>
                <div className="xl:w-4/6 w-full">
                  <div className="flex items-start">
                    <div className="expText flex xl:gap-12 md:gap-6 gap-3 relative z-20 w-full min-w-0">
                      <div className="timeline-logo">
                        <img src={card.logoPath} alt="logo" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h1 className="font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl leading-snug">
                          {card.title}
                        </h1>
                        <p className="text-blue-50 text-xs sm:text-sm md:text-lg lg:text-xl mt-1 md:mt-2">
                          @ {card.company}
                        </p>
                        <p className="my-2 sm:my-3 md:my-5 text-white-50 text-xs sm:text-sm md:text-base">
                          🗓️&nbsp;{card.date}
                        </p>
                        <p className="text-[#839CB5] italic text-xs sm:text-sm md:text-base">
                          Responsibilities
                        </p>
                        <ul className="list-disc ms-4 md:ms-5 mt-2 md:mt-5 flex flex-col gap-2 sm:gap-3 md:gap-5 text-white-50">
                          {card.responsibilities.map(
                            (responsibility, index) => (
                              <li
                                key={index}
                                className="text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed break-words"
                              >
                                {responsibility}
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
