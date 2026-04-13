import {
  FaReact, FaNodeJs, FaPython, FaGitAlt, FaDocker, FaFigma, FaHtml5, FaCss3Alt, FaAws,
} from "react-icons/fa";
import {
  SiJavascript, SiTypescript, SiNextdotjs, SiTailwindcss, SiMongodb,
  SiPostgresql, SiFirebase, SiRedux, SiExpress, SiVite,
  SiPostman, SiVercel, SiLinux, SiGraphql,
} from "react-icons/si";

export const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: FaReact, color: "#61DAFB" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
      { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Redux", icon: SiRedux, color: "#764ABC" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: FaNodeJs, color: "#339933" },
      { name: "Express", icon: SiExpress, color: "#ffffff" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git", icon: FaGitAlt, color: "#F05032" },
      { name: "Vite", icon: SiVite, color: "#646CFF" },
      { name: "Figma", icon: FaFigma, color: "#F24E1E" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      { name: "Vercel", icon: SiVercel, color: "#ffffff" },
      { name: "Linux", icon: SiLinux, color: "#FCC624" },
    ],
  },
];
