import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import myImage from "../assets/profileImage.png";

export const IMAGE = myImage;

export const HERO_CONTENT = `I am passionate about Web development and UI Design. I blend
creativity with technical skills to craft engaging and functional
web experiences. Each project is an opportunity for me to dive
deeper into modern web technologies and apply them with boundless
enthusiasm.`;

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    date: "April 2023",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.A fully functional e-commerce website with features like product listing, shopping cart, and user authentication",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Task Management App",
    date: "April 2023",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.A fully functional e-commerce website with features like product listing, shopping cart, and user authentication",
    technologies: ["HTML", "CSS", "React"],
  },
  {
    title: "Portfolio Website",
    date: "April 2023",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.A fully functional e-commerce website with features like product listing, shopping cart, and user authentication",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Blogging Platform",
    date: "April 2023",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.A fully functional e-commerce website with features like product listing, shopping cart, and user authentication",
    technologies: ["HTML", "CSS", "Vue", "Tailwind"],
  },
];

export const EDUCATION = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["JavaScript", "React", "Tailwind", "MongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue", "MongoDB"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};
