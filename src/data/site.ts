import type { IconType } from "react-icons";
import { FiCode, FiLock, FiShield, FiDatabase } from "react-icons/fi";
import {
  SiBetterauth,
  SiC,
  SiCodeforces,
  SiCplusplus,
  SiCss,
  SiDaisyui,
  SiGit,
  SiGithub,
  SiGithubpages,
  SiHackerrank,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNetlify,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVite,
} from "react-icons/si";

export const me = {
  name: "Amena Begum",
  first: "Amena",
  role: "Full-Stack Developer",
  location: "Dhaka, Bangladesh",
  email: "amenamili04@gmail.com",
  phone: "+880 1580-741789",
  whatsapp: "+880 1580-741789",
  github: "https://github.com/Amena-Begum",
  linkedin: "https://www.linkedin.com/in/amena-begum123/",
  codeforces: "https://codeforces.com/profile/Amena102",
  hackerrank: "https://www.hackerrank.com/amenamili_diit",
  photo: "/amena.jpg",
  resume: "/Amena-Begum-Resume.pdf",
  intro:
    "I build responsive, user-friendly web apps with React, Next.js and TypeScript — from clean interfaces to sign-in and MongoDB-backed data. A CSE student who loves solving problems and learning in public.",
};

export const about = {
  journey: [
    "My journey started with competitive programming. Solving problems on Codeforces and HackerRank in C and C++ taught me to break big problems into small steps — the habit I still use every day.",
    "From there I moved to the web: HTML and CSS first, then JavaScript, and now React, Next.js and TypeScript through a full-stack web development course. Every module ends with a real project that I build, deploy and share.",
  ],
  work: [
    "I enjoy turning a design into a clean, responsive interface — reusable React components, Tailwind CSS layouts and state that just works, whether it's React Context or Zustand.",
    "I also like the logic behind the screen: connecting pages to REST APIs, adding email, Google and GitHub sign-in with Better Auth, and keeping user data in MongoDB.",
  ],
  hobbies: [
    {
      name: "Writing tech posts",
      text: "I write a JavaScript Fundamentals series on LinkedIn — explaining one concept at a time is the best way I know to really learn it.",
    },
    {
      name: "Traveling",
      text: "Exploring new places and cultures. A trip is the best reset after a long week of coding and problem solving.",
    },
  ],
};

export const stats = [
  { value: "4", label: "Live projects" },
  { value: "32+", label: "JavaScript posts" },
  { value: "17", label: "GitHub repos" },
];

export type Skill = { name: string; icon: IconType; color: string };
export type SkillGroup = { title: string; note: string; items: Skill[] };

export const skills: SkillGroup[] = [
  {
    title: "Frontend",
    note: "What users see and touch",
    items: [
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: SiCss, color: "#663399" },
      { name: "JavaScript", icon: SiJavascript, color: "#D4B106" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "React", icon: SiReact, color: "#1A9FC0" },
      { name: "Next.js", icon: SiNextdotjs, color: "#1E1B18" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#0EA5C6" },
      { name: "DaisyUI", icon: SiDaisyui, color: "#5A0EF8" },
    ],
  },
  {
    title: "Backend & Auth",
    note: "Sign-in, data and APIs",
    items: [
      { name: "Next.js server", icon: SiNextdotjs, color: "#1E1B18" },
      { name: "Better Auth", icon: SiBetterauth, color: "#1E1B18" },
      { name: "OAuth", icon: FiLock, color: "#C2552D" },
      { name: "MongoDB", icon: SiMongodb, color: "#3E8E41" },
      { name: "REST APIs", icon: FiDatabase, color: "#1F5560" },
      { name: "Protected routes", icon: FiShield, color: "#C2552D" },
    ],
  },
  {
    title: "Tools",
    note: "How I build and ship",
    items: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#1E1B18" },
      { name: "VS Code", icon: FiCode, color: "#2F80ED" },
      { name: "Vite", icon: SiVite, color: "#7B5CFF" },
      { name: "Vercel", icon: SiVercel, color: "#1E1B18" },
      { name: "Netlify", icon: SiNetlify, color: "#16A3A3" },
      { name: "GitHub Pages", icon: SiGithubpages, color: "#1E1B18" },
    ],
  },
  {
    title: "Problem Solving",
    note: "Where it all started",
    items: [
      { name: "C", icon: SiC, color: "#5C6BC0" },
      { name: "C++", icon: SiCplusplus, color: "#00599C" },
      { name: "Codeforces", icon: SiCodeforces, color: "#1F8ACB" },
      { name: "HackerRank", icon: SiHackerrank, color: "#1BA94C" },
    ],
  },
];

export const learning = ["Node.js", "Express.js", "MongoDB queries", "JWT"];

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  summary: string;
  description: string;
  features: string[];
  stack: string[];
  challenges: string[];
  future: string[];
  image: string;
  live: string;
  code: string;
  date: string;
};

export const projects: Project[] = [
  {
    slug: "bazar-dor",
    title: "Bazar-Dor",
    tagline: "Grocery price web app",
    summary: "Browse everyday grocery products by category, check prices and manage your own profile.",
    description:
      "Bazar-Dor (বাজার দর) is a full-stack grocery price information app. Users browse everyday products by category — rice, lentils, oil, vegetables, fish, meat and eggs — check prices, open product detail pages and manage their own profile after signing in.",
    features: [
      "Email/password sign-in plus Google and GitHub login with Better Auth",
      "User accounts and sessions stored in MongoDB",
      "Protected profile page where users view and update their information",
      "Category browsing and dynamic product detail pages",
      "Fully responsive UI with Tailwind CSS and DaisyUI, plus toast notifications",
    ],
    stack: ["Next.js", "TypeScript", "MongoDB", "Better Auth", "Tailwind CSS", "DaisyUI"],
    challenges: [
      "Setting up three ways to sign in (email, Google and GitHub) and making sure each one creates a proper session in MongoDB.",
      "Protecting the profile page so signed-out visitors are sent to login instead of seeing an empty page.",
      "Building dynamic product pages from one template so every product gets its own URL.",
    ],
    future: [
      "Price history charts for each product",
      "Search and filters across all categories",
      "Saved favourite products for signed-in users",
      "A Bangla / English language switch",
    ],
    image: "/projects/bazar-dor.png",
    live: "https://bazar-dor-i1pg.vercel.app",
    code: "https://github.com/Amena-Begum/BazarDor",
    date: "Oct 2026",
  },
  {
    slug: "fitlog",
    title: "FitLog",
    tagline: "Workout library & planner",
    summary: "Explore workouts, build today's plan, save favourites and track exercises, duration and calories.",
    description:
      "FitLog is a responsive workout library and daily planner. Users explore workouts for different muscle groups, build a plan for today, save workouts for later and track completed exercises, total duration and calories burned.",
    features: [
      "Workout data fetched from a REST API with loading states and a custom 404 page",
      "Add or remove workouts from Today's Plan and a Saved list",
      "Track total exercises, workout duration and calories burned",
      "Sort workouts by duration, calories or rating",
      "Global state persisted with Zustand, with toast notifications for every action",
    ],
    stack: ["Next.js", "TypeScript", "Zustand", "REST API", "Tailwind CSS"],
    challenges: [
      "Keeping the plan and saved lists in sync across pages — moving them into a Zustand store fixed it.",
      "Persisting state so a page reload doesn't wipe the user's plan.",
      "Handling loading and error states while workout data is fetched from the API.",
    ],
    future: [
      "User accounts so plans sync across devices",
      "A workout timer with sets and reps",
      "Weekly progress charts",
    ],
    image: "/projects/fitlog.png",
    live: "https://fit-log-green.vercel.app",
    code: "https://github.com/Amena-Begum/FitLog",
    date: "Sep 2026",
  },
  {
    slug: "dev-stack",
    title: "Dev Stack",
    tagline: "Build your tech stack",
    summary: "Explore technologies by category, difficulty and rating, and build your own development stack.",
    description:
      "Dev Stack is a React app that helps developers explore technologies and build a personalised stack. Frontend, backend, database, language, styling, DevOps and tool technologies are shown with their category, difficulty and rating.",
    features: [
      "Technologies driven by JSON data with category, difficulty and rating",
      "Add to “Your Stack”, remove one at a time or clear the whole stack",
      "Duplicate detection with toast notifications for every action",
      "Component-based, fully responsive UI with Tailwind CSS",
    ],
    stack: ["React", "JavaScript", "Tailwind CSS", "React Toastify", "Vite", "Netlify"],
    challenges: [
      "Loading the JSON data once with useEffect instead of on every render.",
      "Stopping the same technology from being added twice and telling the user why.",
      "Splitting the UI into small components that share state through props.",
    ],
    future: ["Save and share a stack with a link", "Search and filter by category", "Compare two technologies side by side"],
    image: "/projects/dev-stack.png",
    live: "https://dev-stack123.netlify.app",
    code: "https://github.com/Amena-Begum/Dev-Stack",
    date: "Sep 2026",
  },
  {
    slug: "devconf",
    title: "DevConf",
    tagline: "Conference landing page",
    summary: "A responsive landing page for a developer conference, built from scratch with HTML and CSS.",
    description:
      "DevConf is a landing page for a developer conference, built from scratch with semantic HTML and modern CSS. It covers speakers, schedule, tracks and venue, and works on phones, tablets and desktops.",
    features: [
      "Semantic, accessible HTML5 structure",
      "Modern layouts with Flexbox and CSS Grid",
      "Mobile-first responsive design",
      "Deployed with GitHub Pages",
    ],
    stack: ["HTML5", "CSS3", "Flexbox", "CSS Grid", "GitHub Pages"],
    challenges: [
      "Making the schedule and speaker grids reflow cleanly from desktop down to small phones.",
      "Writing the page mobile-first and adding layout for bigger screens with media queries.",
      "Keeping the HTML semantic so screen readers can follow the page.",
    ],
    future: ["Rebuild it in React with reusable sections", "A working registration form", "Light and dark themes"],
    image: "/projects/devconf.png",
    live: "https://amena-begum.github.io/DevConf/",
    code: "https://github.com/Amena-Begum/DevConf",
    date: "Jul 2026",
  },
];

export type Entry = { period: string; title: string; place: string; text: string };

export const education: Entry[] = [
  {
    period: "Oct 2024 — Oct 2028",
    title: "B.Sc. in Computer Science & Engineering",
    place: "Daffodil Institute of IT, Dhaka",
    text: "Studying programming, data structures, algorithms and databases, alongside competitive programming practice.",
  },
];

export const experience: Entry[] = [
  {
    period: "2026 — Present",
    title: "Full-Stack Web Development Course",
    place: "Programming Hero",
    text: "Building a real project every module — React, Next.js, TypeScript, authentication and MongoDB — and deploying each one to Vercel, Netlify or GitHub Pages.",
  },
  {
    period: "Ongoing",
    title: "Learning in Public — JavaScript Fundamentals",
    place: "LinkedIn",
    text: "Writing a 32+ part series that explains one JavaScript concept at a time with real-world examples.",
  },
  {
    period: "Ongoing",
    title: "Competitive Programming",
    place: "Codeforces & HackerRank",
    text: "Regular problem solving in C and C++, which built my foundation in logic, algorithms and debugging.",
  },
];

export const nav = [
  { href: "/#about", label: "About" },
  { href: "/#skills", label: "Skills" },
  { href: "/#education", label: "Education" },
  { href: "/#experience", label: "Experience" },
  { href: "/#projects", label: "Projects" },
  { href: "/#contact", label: "Contact" },
];
