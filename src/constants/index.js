const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 3, suffix: "+", label: "Years of Experience" },
  { value: 20, suffix: "+", label: "Projects Completed" },
  { value: 10, suffix: "+", label: "Happy Clients" },
  { value: 95, suffix: "%", label: "Client Satisfaction" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality, production-ready code with attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React & Next.js",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "NestJS & Spring Boot",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Java & TypeScript",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "PostgreSQL & Supabase",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Docker & Git",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React & Next.js",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "NestJS & Spring Boot",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Java & TypeScript",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "PostgreSQL & Supabase",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Docker & Git",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review: "Abdullah has been a key contributor to our engineering team, delivering full-stack solutions that have significantly improved our product quality and deployment speed.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "Full Stack Developer",
    date: "2022 - Present",
    responsibilities: [
      "Building and maintaining scalable web applications using Next.js, NestJS, and Spring Boot.",
      "Designing and implementing RESTful APIs and database architectures with PostgreSQL, MongoDB, and Supabase.",
      "Collaborating with cross-functional teams to deliver production-ready features on tight deadlines.",
      "Setting up CI/CD pipelines and Docker-based deployment workflows.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
];

const testimonials = [
  {
    name: "Sarah Mitchell",
    mentions: "@sarahmitchell",
    review:
      "Abdullah built our entire SaaS platform from scratch. His ability to handle both frontend and backend with equal expertise is rare. The end product was polished, fast, and exactly what we envisioned.",
    imgPath: "/images/client1.png",
  },
  {
    name: "James Carter",
    mentions: "@jamescarter",
    review:
      "Working with Abdullah was a fantastic experience. He transformed our outdated system into a modern, scalable web application. His knowledge of Next.js and NestJS is top-notch. Highly recommend!",
    imgPath: "/images/client3.png",
  },
  {
    name: "Fatima Khan",
    mentions: "@fatimakhan",
    review:
      "Abdullah delivered our e-commerce platform ahead of schedule. His attention to detail, clean code practices, and proactive communication made the entire process smooth. He's our go-to developer now.",
    imgPath: "/images/client2.png",
  },
  {
    name: "David Reynolds",
    mentions: "@davidreynolds",
    review:
      "Abdullah's full-stack skills are impressive. He architected our multi-tenant platform with role-based access, real-time features, and Stripe integration — all working flawlessly in production.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Ayesha Siddiqui",
    mentions: "@ayeshasiddiqui",
    review:
      "We hired Abdullah for a complex project involving AI integration and real-time collaboration. He exceeded every expectation. The codebase he delivered was clean, well-documented, and easy to maintain.",
    imgPath: "/images/client4.png",
  },
  {
    name: "Michael Torres",
    mentions: "@michaeltorres",
    review:
      "Abdullah is a true professional. He understood our requirements perfectly and delivered a solution that not only met but exceeded our expectations. His expertise in React, Spring Boot, and database design is outstanding.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "github",
    imgPath: "/images/github.svg",
    url: "https://github.com/AbdullahNaseemAbbasi",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    url: "https://www.linkedin.com/in/abdullah-naseem-abbasi-624a082b2",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
