import { skillCategories } from "../constants";
import TitleHeader from "../components/TitleHeader";

const FeatureCards = () => (
  <section id="about" className="flex-center section-padding">
    <div className="w-full h-full md:px-10 px-4">
      <TitleHeader title="About Me" sub="🚀 Who I Am & What I Do" />

      <div className="mt-10 md:mt-16 max-w-5xl mx-auto flex flex-col gap-6 md:gap-10">
        <p className="text-white-50 text-base md:text-xl leading-relaxed">
          I build web applications that actually work — fast, scalable, and
          built to last. With 3+ years of hands-on experience in full stack
          development, I've worked across the entire pipeline — from
          pixel-perfect frontends to rock-solid backend architectures and
          database design.
        </p>

        <div>
          <h3 className="text-white text-xl md:text-3xl font-semibold mb-5 md:mb-8">
            What I bring to the table
          </h3>
          <div className="grid-2-cols">
            {skillCategories.map(({ title, tech, desc }) => (
              <div
                key={title}
                className="card-border rounded-xl p-5 md:p-8 flex flex-col gap-2 md:gap-3"
              >
                <h4 className="text-white text-lg md:text-2xl font-semibold">
                  {title}
                </h4>
                <p className="text-blue-50 text-xs md:text-base font-medium">
                  {tech}
                </p>
                <p className="text-white-50 text-sm md:text-lg">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        <p className="text-white-50 text-base md:text-xl leading-relaxed">
          I don't just write code — I solve problems. Whether you need a SaaS
          product built from scratch, an existing system optimized, or a
          reliable developer who delivers on time — I'm your guy.
        </p>

        <p className="text-white text-base md:text-xl font-semibold">
          Let's connect. I'm always open to interesting projects and
          collaborations.
        </p>
      </div>
    </div>
  </section>
);

export default FeatureCards;
