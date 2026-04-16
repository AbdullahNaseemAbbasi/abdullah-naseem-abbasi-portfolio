import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import AnimatedCounter from "../components/AnimatedCounter";
import Button from "../components/Button";
import { words } from "../constants";
import HeroExperience from "../components/models/hero_models/HeroExperience";

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
    );
  });

  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10 w-full pointer-events-none opacity-60 md:opacity-100">
        <img src="/images/bg.png" alt="" className="w-full h-auto object-cover" />
      </div>

      <div className="hero-layout">
        <header className="flex flex-col justify-center w-full md:px-20 sm:px-6 px-4">
          <div className="flex flex-col gap-4 sm:gap-5 md:gap-7 max-w-full">
            <div className="hero-profile">
              <div className="hero-avatar">
                <img src="/images/myphoto.png" alt="Abdullah Naseem Abbasi" />
              </div>
              <div className="hero-status">
                <span className="status-dot" />
                <span>Available for Work</span>
              </div>
            </div>

            <div className="hero-text">
              <h1>
                Shaping
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word, index) => (
                      <span
                        key={index}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt="person"
                          className="xl:size-12 md:size-10 size-6 sm:size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>into Real Projects</h1>
              <h1>that Deliver Results</h1>
            </div>

            <p className="text-white-50 text-sm sm:text-base md:text-xl relative z-10 pointer-events-none max-w-full sm:max-w-xl leading-relaxed">
              Hi, I'm Abdullah — a Full Stack Developer from Karachi, Pakistan.
              I build web applications that actually work — fast, scalable, and
              built to last.
            </p>

            <div className="hero-cta-group">
              <Button
                text="See My Work"
                className="md:w-72 md:h-16 sm:w-56 w-auto h-12"
                id="counter"
              />
              <a
                href="/Abdullah_Naseem_Abbasi_Resume.pdf"
                download="Abdullah_Naseem_Abbasi_Resume.pdf"
                className="download-cv-btn group w-auto"
              >
                <span className="download-icon">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                </span>
                <span>Download CV</span>
              </a>
            </div>
          </div>
        </header>

        <figure>
          <div className="hero-3d-layout">
            <HeroExperience />
          </div>
        </figure>
      </div>

      <AnimatedCounter />
    </section>
  );
};

export default Hero;
