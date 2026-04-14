const navLinks = [
  { name: "About", link: "#about" },
  { name: "Work", link: "#work" },
  { name: "Experience", link: "#experience" },
  { name: "Skills", link: "#skills" },
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
  { value: 15, suffix: "+", label: "Technologies Mastered" },
  { value: 10, suffix: "+", label: "Projects Built" },
];

const logoIconsList = [
  { name: "JavaScript", imgPath: "/images/logos/javascript.svg" },
  { name: "TypeScript", imgPath: "/images/logos/typescript.svg" },
  { name: "React", imgPath: "/images/logos/react.svg" },
  { name: "Node.js", imgPath: "/images/logos/nodejs.svg" },
  { name: "Express.js", imgPath: "/images/logos/express.svg" },
  { name: "NestJS", imgPath: "/images/logos/nestjs.svg" },
  { name: "Java", imgPath: "/images/logos/java.svg" },
  { name: "Ruby", imgPath: "/images/logos/ruby.svg" },
  { name: "MongoDB", imgPath: "/images/logos/mongodb.svg" },
  { name: "Supabase", imgPath: "/images/logos/supabase.svg" },
  { name: "Spring Boot", imgPath: "/images/logos/springboot.svg" },
  { name: "Docker", imgPath: "/images/logos/docker.svg" },
];

const skillCategories = [
  {
    title: "Frontend",
    tech: "React, Next.js, TypeScript, Tailwind CSS",
    desc: "Clean, responsive interfaces that users love to interact with.",
  },
  {
    title: "Backend",
    tech: "Node.js, Express, NestJS, Python, Django, Java, Spring Boot",
    desc: "APIs that are fast, secure, and easy to scale.",
  },
  {
    title: "Database & Cloud",
    tech: "PostgreSQL, MongoDB, MySQL, Redis, Supabase",
    desc: "Data solutions designed for performance.",
  },
  {
    title: "DevOps",
    tech: "Docker, Kubernetes, Vercel, Railway",
    desc: "Smooth deployments with zero downtime.",
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
    review:
      "Building scalable full-stack applications from database to deployment — owning features end-to-end across React/Next.js frontends and NestJS/Spring Boot backends.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "Full Stack Developer",
    company: "Zerovertical Labs",
    date: "2022 - Present",
    responsibilities: [
      "Building production-ready web applications using React, Next.js, and TypeScript with pixel-perfect, responsive UIs.",
      "Designing and developing scalable backend APIs with Node.js, NestJS, Express, and Spring Boot.",
      "Architecting database solutions using PostgreSQL, MongoDB, and Supabase for optimal performance and reliability.",
      "Setting up containerized deployments and CI/CD pipelines with Docker, Vercel, and Railway for zero-downtime releases.",
    ],
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
  skillCategories,
  logoIconsList,
  counterItems,
  expCards,
  socialImgs,
  techStackIcons,
  navLinks,
};
