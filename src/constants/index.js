import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import rplProject from "../assets/projects/rpl-project.jpg";
import portfolioProject from "../assets/projects/portfolioProject.jpg";
import iotProject from "../assets/projects/iotProject.jpg";

export const HERO_CONTENT = `I am a dedicated Computer Science student at the University of California, San Diego. I have gained hands-on experience in web development, research, and technical support through various roles and projects. My skills include a strong command of programming languages such as JavaScript, Python, and C++, as well as experience in frontend and backend development, data analysis, and problem-solving. I enjoy working both independently and as part of a team, contributing to meaningful projects that drive innovation and improve user experiences. With a passion for learning and a collaborative approach, I am always eager to tackle new challenges and expand my technical expertise.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

// export const EXPERIENCES = [
//   {
//     year: "July 2024 - Present",
//     role: "Full Stack Developer Intern",
//     company: "We Care Insurance",
//     description: `Collaboratively developed a web-based insurance management system, assisted with migrating code from javascript to react.js, and implemented new features to improve user experience.o	Utilized Java, Spring Boot, and JPA Hibernate for backend development.`,
//     technologies: ["Javascript", "React.js", "Next.js", "Spring Boot", "JPA Hibernate"],
//   },
//   {
//     year: "2022 - 2023",
//     role: "Frontend Developer",
//     company: "Adobe",
//     description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
//     technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
//   },
//   {
//     year: "2021 - 2022",
//     role: "Full Stack Developer",
//     company: "Facebook",
//     description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
//     technologies: ["Python", "Svelte", "Three.js", "Postgres"],
//   },
//   {
//     year: "2020 - 2021",
//     role: "Software Engineer",
//     company: "Paypal",
//     description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
//     technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
//   },
// ];

export const EXPERIENCES = [
  {
    year: "July 2024 - Present",
    role: "Web Developer Intern",
    company: "We Care Insurance",
    description: `Collaboratively developed a web-based insurance management system, contributing to the migration from JavaScript to React. Utilized Bootstrap and Axios for frontend development and API handling, while conducting unit and integration testing using JEST and Postman. Assisted in containerizing applications to streamline deployment with Docker and managed version control via Bitbucket, integrating CI/CD pipelines through GitHub Actions.`,
    technologies: [
      "React",
      "Bootstrap",
      "Axios",
      "JEST",
      "Postman",
      "Docker",
      "Bitbucket",
    ],
  },
  {
    year: "January 2024 - Present",
    role: "Research Assistant",
    company: "ESB.AI Lab",
    description: `Collaborated with Professor Edwin Solares to analyze and label data for image recognition. Conducted research on drone-based target identification.`,
    technologies: ["Image Recognition", "Data Labeling", "Drone Research"],
  },
  {
    year: "September 2023 - Present",
    role: "Field Technician",
    company: "IT Services UCSD",
    description: `Provided tier one technical support for campus IT equipment. Managed work orders and asset tracking using ServiceNow and Maximo.`,
    technologies: ["ServiceNow", "Maximo", "IT Support"],
  },
  {
    year: "September 2023 - December 2023",
    role: "Tutor",
    company: "UCSD Computer Science Department",
    description: `Tutored CSE8A: Introduction to Python Programming. Guided students in mastering core programming concepts and held office hours for assistance.`,
    technologies: ["Python", "Tutoring", "Student Guidance"],
  },
  {
    year: "November 2020 - April 2021",
    role: "Student Developer Intern",
    company: "Myan Pro Solution Ltd.",
    description: `Scoped requirements, coordinated design, and conducted User Acceptance Testing. Assisted in developing an online pharmacy application.`,
    technologies: ["User Acceptance Testing", "Software Development"],
  },
];

// export const PROJECTS = [
//   {
//     title: "E-Commerce Website",
//     image: project1,
//     description:
//       "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
//     technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
//   },
//   {
//     title: "Task Management App",
//     image: project2,
//     description:
//       "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
//     technologies: ["HTML", "CSS", "Angular", "Firebase"],
//   },
//   {
//     title: "Portfolio Website",
//     image: project3,
//     description:
//       "A personal portfolio website showcasing projects, skills, and contact information.",
//     technologies: ["HTML", "CSS", "React", "Bootstrap"],
//   },
//   {
//     title: "Blogging Platform",
//     image: project4,
//     description:
//       "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
//     technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
//   },
// ];

export const PROJECTS = [
  {
    title: "Personal Portfolio Website",
    image: portfolioProject,
    description: `Designed and developed a personal portfolio website to showcase projects, skills, and contact information.`,
    technologies: ["HTML", "React", "Tailwind CSS"],
  },
  {
    title: "Rocket Propulsion Lab - G-Class Model Rocket",
    image: rplProject,
    description: `Designed and constructed a G-class model rocket. CAD development in SolidWorks, simulation setup, and avionics programming in C++.`,
    technologies: ["SolidWorks", "C++", "Rocket Simulation"],
  },
  {
    title: "IoT Parking System",
    image: iotProject,
    description: `Developed an IoT Parking System using Arduino and C++ during an internship at Imvvy Solutions LLP, integrating hardware with software for real-time parking management.`,
    technologies: ["Arduino", "C++", "IoT"],
  },
];

export const CONTACT = {
  address: "7665 Palmilla Drive, San Diego, CA 92122",
  phoneNo: "+1 858-241-1808 ",
  email: "vnarsaria@ucsd.edu",
};
