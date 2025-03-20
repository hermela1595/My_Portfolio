import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import apple from "@/public/apple.png";
import netflix from "@/public/netflix2.jpg";
import amazon from "@/public/amazon.png";
import evangadi from "@/public/evangadi2.png"

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Full Stack (MERN) Developer",
    location: "Evangadi Tech",
    description:"I completed my full-stack developer program at Evangadi Tech in November 2023. It was a challenging but incredibly rewarding journey. I got hands-on experience in crafting dynamic and responsive web applications, learning front-end technologies like HTML, CSS, and JavaScript for user interfaces, as well as back-end technologies such as Node.js and Express. I also delved into database management with MySQL, mastered version control using Git, and collaborated on platforms like GitHub. Additionally, I gained skills in deploying and hosting on cloud services like firebase. My learing experience at Evangadi Tech has been a transformative journey that has equipped me with the skills and knowledge needed to thrive as a full-stack developer. The combination of a robust curriculum, hands-on projects, collaborative learning, and mentorship has provided me with a solid foundation for success in the dynamic field of web development.",
      // Evangadi Tech's immersive learning environment, hands-on projects, and collaborative approach have been instrumental in my growth. The curriculum's practical focus allowed me to grasp both front-end and back-end technologies, while group projects enhanced my teamwork and problem-solving skills.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Front End Developer | Data Entery",
    location: "YENAI PROPERTIES LLC",
    description:
      "As a dedicated Data Entry Specialist at YENAI PROPERTIES LLC, I played a pivotal role in maintaining the accuracy and integrity of critical data within the company's databases. My responsibilities encompassed a range of tasks that demanded precision, attention to detail, and a commitment to maintaining high-quality standards. Conducted efficient and error-free data entry tasks, ensuring the integrity of essential information. Regularly audited databases to identify and rectify discrepancies, contributing to a consistently reliable dataset. Collaborated with cross-functional teams to streamline data processes and enhance overall efficiency. Prioritized and managed workload to meet tight deadlines without compromising accuracy.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - present",
  },
  {
    title: "Work Experience",
    location: "Wahington, DC",
    description:"With two decades of dedicated service in the retail sector, I have honed my skills and expertise as an Assistant Store Manager at TJX Company. My journey has been marked by a commitment to operational excellence, team leadership, and customer satisfaction. Throughout my tenure at TJX Company, I played a pivotal role in driving store performance and optimizing day-to-day operations. As an Assistant Store Manager, I successfully navigated the dynamic retail landscape, implementing strategic initiatives to enhance customer experiences and maximize sales. My ability to lead and motivate teams resulted in improved staff efficiency and overall store productivity.",
    icon: React.createElement(FaReact),
    date: "2001 - 2022",
  },
] as const;

export const projectsData = [
  {
    title: "Apple Clon",
    description:
      "I constructed an Apple replica application, building API Integration and React Routing, enhancing the functionality and navigation of the platform. ",
    tags: ["React", "Bootstrap", "Css", "Sql", "Node"],
    imageUrl: apple,
    linkURL:
      "https://654db327bea46923be3a572e--dreamy-scone-ba290c.netlify.app/",
  },
  {
    title: "Netflix Clon",
    description:
      "I've integrated the latest Netflix features and kept the design in line with the brand's ethos.",
    tags: ["React", "Node", "Bootstrap", "css", "Redux"],
    imageUrl: netflix,
    linkURL: "https://netflix-clone-feb5d.web.app/",
  },
  {
    title: "Amazon Clone",
    description:
      "I use the following technologies: React, a JavaScript library designed for constructing user interfaces, and Firebase, a backend platform.",
    tags: ["React", "Jsx", "Node", "Tailwind", "Javascript"],
    imageUrl: amazon,
    linkURL: "https://project-d9df7.web.app/",
  },
  {
    title: "Evangadi Forum",
    description:
      "A complete Q&A platform allowing users to create accounts, log in, post questions or answers, and review shared content.",
    tags: ["React", "Javascript", "Node", "Tailwind", "MySQL"],
    imageUrl: evangadi,
    linkURL: "https://github.com/hermela1595/Final-EvangadiForum",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "Bootstrap",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "API",
  "React Hooks",
  "Single Page Applications",
  // "Apollo",
  "WordPress",
  "MySQL",
  // "Python",
  // "Django",
  "PhpMyAdmin",
] as const;
