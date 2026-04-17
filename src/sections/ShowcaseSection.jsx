import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const nexoraRef = useRef(null);
  const shopnowRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    const cards = [nexoraRef.current, shopnowRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div ref={nexoraRef} className="first-project-wrapper">
            <div className="image-wrapper">
              <img src="/images/project1.png" alt="Nexora - AI SaaS Platform" />
            </div>
            <div className="text-content">
              <h2>
                Nexora — AI-Powered Multi-Tenant SaaS Platform for Team
                Collaboration
              </h2>
              <p className="text-white-50 md:text-xl">
                A production-ready platform built with Next.js 14, NestJS,
                PostgreSQL, Prisma, Redis & Socket.io — featuring AI task
                generation, Kanban boards, and Stripe billing.
              </p>
              <div className="flex gap-3 mt-4">
                <a
                  href="https://nexora-web-three.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-50 underline text-sm md:text-base"
                >
                  Live Demo →
                </a>
                <a
                  href="https://github.com/AbdullahNaseemAbbasi/nexora"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-50 underline text-sm md:text-base"
                >
                  GitHub →
                </a>
              </div> 
            </div> 
          </div> 

          <div className="project-list-wrapper overflow-hidden"> 
            <div className="project" ref={shopnowRef}> 
              <div className="image-wrapper bg-[#FFEFDB]"> 
                <img
                  src="/images/project2.png" 
                  alt="ShopNow - E-Commerce Platform" 
                />
              </div>
              <h2>ShopNow — Full-Stack E-Commerce Platform</h2> 
              <p className="text-white-50 text-sm mt-2">
                Built with Next.js, Spring Boot, PostgreSQL & Tailwind CSS — 
                featuring JWT auth, product catalog, cart, orders, admin 
                dashboard & more.
              </p>
              <div className="flex gap-3 mt-3"> 
                <a
                  href="https://shopnow-frontend-bay.vercel.app" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-50 underline text-sm" 
                >
                  Live Demo →
                </a>
                <a
                  href="https://github.com/AbdullahNaseemAbbasi/shopnow-frontend" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-50 underline text-sm"
                >
                  GitHub →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
