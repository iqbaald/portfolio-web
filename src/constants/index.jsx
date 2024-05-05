import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.jpg";
import project6 from "../assets/projects/project-6.jpg";
import project7 from "../assets/projects/project-7.jpg";
import project8 from "../assets/projects/project-8.jpg";
import myImage from "../assets/profileImage.png";

export const IMAGE = myImage;

export const HERO_CONTENT = `I have a strong interest in frontend development and aspire to begin a career in the IT industry, particularly in web development. Every project I work on is the result of my dedication and desire to create engaging and innovative web experiences.`;

export const EDUCATION = [
  {
    year: "2021 Jul - Present",
    role: "S1 Informatics Engineering",
    company: "Universitas Muhammadiyah Sidoarjo",
    description: `During my Bachelor's studies, I delved into various aspects of computer science, including programming, computer networks, software engineering, and databases. I was also involved in team projects that required technical problem-solving and the development of innovative solutions.`,
    link: "https://drive.google.com/file/d/15e0h11WhNCejS8xA6nShLJXYcuWpouXD/view?usp=sharing",
    button: "Academic Transcript",
  },

  {
    year: "2023 Aug - 2023 Dec",
    role: "Data Analytics & Software Engineering",
    company: "Kampus Merdeka x Revou ",
    description: `Focusing on Data Analytics and Software Engineering. Participants engage in a structured curriculum that encompasses the fundamentals of data analysis and software development. Through hands-on projects and real-world applications, students gain practical skills in both fields.`,
    link: "https://drive.google.com/file/d/1N8lF2fzyRXUfwzoN4cNEpGr6X8574CR5/view?usp=sharing",
    button: "Certificate Document",
  },
  {
    year: "2022 Oct - 2023 Feb",
    role: "Skilvul Bootcamp: Fullstack UI/UX Design",
    company: "Skilvul",
    description: `
    Experience an immersive bootcamp journey with Skilvul, diving deep into Fullstack UI/UX Design.  Through a combination of structured learning modules and hands-on projects, participants develop essential skills in user interface and user experience design. `,
    link: "https://drive.google.com/file/d/1rBdxRnZvwFXd3hR4HGslyj_eVx9SwVGt/view?usp=sharing",
    button: "Certificate Document",
  },
  {
    year: "2024 Jan - 2024 Dec",
    role: "DBS Foundation Coding Camp 2024",
    company: "DBS Bank X Dicoding ",
    description: `Focused on empowering individuals with expertise in web development, particularly frontend development, the bootcamp encourages collaboration between participants and backend developers to seamlessly integrate frontend components with Node.js APIs.`,
    link: "https://drive.google.com/drive/folders/1mW-opbdBVaB2LTadLC9Zk25t_GWWnmMx?usp=sharing",
    button: "Certificate Document",
  },
  {
    year: "2024 Mar - 2025 Feb",
    role: "Codepolitan Course: Fullstack Web Developer",
    company: "Codepolitan",
    description: `An intensive video course provided by Codepolitan, dedicated to Fullstack Web Development. Participants explore a comprehensive curriculum encompassing frontend and backend technologies, acquiring proficiency in various tools and frameworks.`,
    link: "https://drive.google.com/drive/folders/1gm0omrl0teC11S1WWYymXtjnGHXnYJt_?usp=sharing",
    button: "Certificate Document",
  },
];

export const PROJECTS = [
  {
    title: "Showcasing Creativity using React and Tailwind",
    date: "April 2023",
    image: project1,
    description:
      "A professional portfolio website project built using React, Vite, and Tailwind CSS. It showcases features like responsive design, dynamic content, project showcase, skills section, and contact button.",
    technologies: ["Figma", "React", "Vite", "CSS", "Tailwind"],
    category: "FrontEnd",
    link: "https://iqbaald.github.io/portfolio-web/",
    code: "https://github.com/iqbaald/portfolio-web",
    button: "GitHub Repository",
  },
  {
    title: "Walk to Talk: Discover Your Next Destination",
    date: "April 2023",
    image: project2,
    description:
      "This is a fullstack travel website that simplifies users to discovery of their next travel destinations with a user-friendly interface.The platform provides a smooth and responsive experience across various devices, users can make bookings quickly and conveniently.",
    technologies: ["Figma", "HTML", "CSS", "NodeJS", "MongoDB", "Railway"],
    category: "Fullstack",

    link: "https://kampus-merdeka-software-engineering.github.io/FE-2-Surabaya-8/",
    code: "https://www.behance.net/gallery/188063089/Walk-to-Talk-A-Journey-Through-Our-Travel-Website",
    button: "Project Documentation",
  },
  {
    title: "Imbalance of Children's and Adult Shows on Netflix",
    date: "April 2023",
    image: project3,
    description:
      "The project aims to balance content distribution across age groups on Netflix. Using Python, it analyzes the platform's library to uncover factors causing the imbalance and presents recommendations on an interactive dashboard to enhance the viewing experience for all audiences.",
    technologies: ["Python", "Spreadsheet", "Docs", "Colab", "Looker"],
    category: "Data Analysis",

    link: "https://colab.research.google.com/drive/1hj0tYJgNT_UfgXlBPHakT1DRbE5-wDc-?usp=sharing",
    code: "https://www.behance.net/gallery/182777487/Imbalance-of-childrens-and-adult-shows-on-Netflix",
    button: "Project Documentation",
  },
  {
    title: "UI/UX Case Study: Send Your Waste App",
    date: "April 2023",
    image: project4,
    description: `The case study addresses Indonesia's waste mismanagement issue through the "Send Your Waste App", developed by Waste4Change. It educates users about waste management, emphasizing benefits and fostering community-driven waste reduction.`,
    technologies: ["Figma", "Docs"],
    category: "UI/UX",

    link: "https://www.figma.com/proto/HQtz6WycQgh95oeevG3G9m/Send-Your-Waste-App?page-id=246%3A1892&type=design&node-id=251-4780&viewport=503%2C139%2C0.17&t=I3NGk0D8Nsfz9grB-1&scaling=scale-down&starting-point-node-id=246%3A2414&show-proto-sidebar=1&mode=design",
    code: "https://medium.com/@devano.noerisaputra/ui-ux-case-study-send-your-waste-app-for-new-customer-d12cca09945d",
    button: "Project Documentation",
  },
  {
    title: "Learnbirin: Online Learning App",
    date: "April 2023",
    image: project5,
    description:
      "Focuses on the UI/UX design process to provide an immersive and effective online learning experience for users. Through user-centered design principles, the study addresses various aspects of the app's interface and interaction design to optimize user engagement and learning outcomes.",

    technologies: ["Figma", "Docs"],
    category: "UI/UX",

    link: "https://www.behance.net/gallery/162549899/UIUX-Case-Study-Learnbirin-Online-Learning-App",
    code: "https://www.behance.net/gallery/162549899/UIUX-Case-Study-Learnbirin-Online-Learning-App",
    button: "Project Documentation",
  },
  {
    title: "Dotcom Media: Company Profile Website Design",
    date: "April 2023",
    image: project6,
    description:
      "This case study delves into the creation of a captivating and informative company profile website for Dotcom Media. By prioritizing user-centered design principles. The goal is to elevate user engagement and effectively convey the company's brand identity and services.",

    technologies: ["Figma"],
    category: "UI/UX",

    link: "https://www.behance.net/gallery/162549899/UIUX-Case-Study-Learnbirin-Online-Learning-App",
    code: "https://www.behance.net/gallery/162549899/UIUX-Case-Study-Learnbirin-Online-Learning-App",
    button: "Project Documentation",
  },
  {
    title: "Design Exploration: Mixue Mobile App",
    date: "April 2023",
    image: project7,
    description:
      "Exploring the UI/UX of the Mixue mobile app, this case study employs iterative design processes. It aims to enhance user experience and engagement by optimizing usability and scrutinizing various aspects of interface and interaction design to effectively meet user needs.",

    technologies: ["Figma"],
    category: "UI/UX",

    link: "https://www.behance.net/gallery/162799091/Design-Exploration-Mixue-Mobile-App",
    code: "https://www.behance.net/gallery/162799091/Design-Exploration-Mixue-Mobile-App",
    button: "Project Documentation",
  },
  {
    title: "Design Exploration: Mixue Smartwatch App",
    date: "April 2023",
    image: project8,
    description:
      "This case study focuses on the Mixue smartwatch app, supporting user shopping journey with all features. Easily make payments, track user product progress, and receive order updates.",
    technologies: ["Figma"],
    category: "UI/UX",

    link: "https://www.behance.net/gallery/163180287/Design-Exploration-Mixue-Smartwatch-App",
    code: "https://www.behance.net/gallery/163180287/Design-Exploration-Mixue-Smartwatch-App",
    button: "Project Documentation",
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};
