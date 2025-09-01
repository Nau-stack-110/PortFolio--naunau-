import { SiVite, SiGimp, SiFastapi, SiNextdotjs, SiSqlite, SiPostgresql, SiTailwindcss } from "react-icons/si"; 
import { FaFigma, FaAngular, FaNodeJs, FaPython, FaWindows, FaGithub } from "react-icons/fa"; 
import { DiMysql, DiDjango } from "react-icons/di"; 
import { BsGit } from "react-icons/bs"; 
import { FcAndroidOs, FcLinux } from "react-icons/fc"; 

export const skills = [
  { id:1, name:'Angular', Icon: FaAngular, categorie:'Frontend', color:'#DD0031' },
  { id:2, name:'Node.js', Icon: FaNodeJs, categorie:'Backend', color:'#339933' },
  { id:3, name:'Python', Icon: FaPython, categorie:'Backend', color:'#3776AB' },
  { id:4, name:'Django', Icon: DiDjango, categorie:'Backend', color:'#092E20' },
  { id:5, name:'Vite', Icon: SiVite, categorie:'Frontend', color:'#646CFF' },
  { id:6, name:'TailwindCSS', Icon: SiTailwindcss, categorie:'Frontend', color:'#38BDF8' },
  { id:7, name:'GitHub', Icon: FaGithub, categorie:'Outils', color:'#181717' },
  { id:8, name:'Linux', Icon: FcLinux, categorie:'Systèmes', color:'' },
  { id:9, name:'Windows', Icon: FaWindows, categorie:'Systèmes', color:'#0078D6' },
  { id:10, name:'Next.js', Icon: SiNextdotjs, categorie:'Frontend', color:'#000000' },
  { id:11, name:'Git', Icon: BsGit, categorie:'Outils', color:'#F05032' },
  { id:12, name:'FastAPI', Icon: SiFastapi, categorie:'Backend', color:'#009688' },
  { id:13, name:'Android', Icon: FcAndroidOs, categorie:'Systèmes', color:'' },
  // { id:14, name:'Sequelize', Icon: SiSequelize, categorie:'Base de données', color:'#52B0E7' },
  { id:15, name:'PostgreSQL', Icon: SiPostgresql, categorie:'Base de données', color:'#4169E1' },
  { id:16, name:'MySQL', Icon: DiMysql, categorie:'Base de données', color:'#4479A1' },
  { id:17, name:'SQLite', Icon: SiSqlite, categorie:'Base de données', color:'#003B57' },
  // { id:18, name:'JavaScript', Icon: DiJsBadge, categorie:'Frontend', color:'#F7DF1E' },
  { id:19, name:'Figma', Icon: FaFigma, categorie:'Design', color:'#F24E1E' },
  { id:20, name:'Gimp', Icon: SiGimp, categorie:'Design', color:'#5C5543' },
];