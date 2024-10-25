import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import rplProject from "../assets/projects/rpl-project.jpg";
import portfolioProject from "../assets/projects/portfolioProject.jpg";
import iotProject from "../assets/projects/iotProject.jpg";

export const HERO_CONTENT =
  "I am a committed Computer Science student at the University of California, San Diego, with hands-on experience in web development, research, and technical support. My expertise spans programming languages like JavaScript and Python, and I have a solid foundation in both frontend and backend development, data analysis, and creative problem-solving. I thrive in collaborative environments, actively contributing to projects that drive innovation and enhance user experiences. With a passion for continuous learning and a proactive approach, I am always excited to take on new challenges and expand my technical skill set.";

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "January 2024 - Present",
    role: "Research Assistant",
    company: "ESB.AI Lab",
    description:
      "Collaborating with Professor Edwin Solares on developing an app for agricultural data collection, enabling farmers to capture images and gather metadata for machine learning models. Responsible for backend integration and data collection workflows to support app functionality.",
    technologies: ["App Development", "Data Labeling", "Swift"],
  },
  {
    year: "July 2024 - October 2024",
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
    title: "Roommate Suite Management App",
    image: project1,
    description: `Collaborating on the design and development of a web app for UCSD students to manage shared living spaces and reduce conflicts. Features include profile management, task tracking, calendar integration, and a points-based system to encourage task completion.`,
    technologies: ["React", "Next.js", "Firebase", "Tailwind CSS"],
  },
  {
    title: "Rocket Propulsion Lab - G-Class Model Rocket",
    image: rplProject,
    description: `Designed and constructed a G-class model rocket. CAD development in SolidWorks, simulation setup, and avionics programming`,
    technologies: ["SolidWorks", "Rocket Simulation"],
  },
  {
    title: "IoT Parking System",
    image: iotProject,
    description: `Developed an IoT Parking System using Arduino and C++ during an internship at Imvvy Solutions LLP, integrating hardware with software for real-time parking management.`,
    technologies: ["Arduino", "C++", "IoT"],
  },
];

export const CONTACT = {
  phoneNo: "+1 858-241-1808 ",
  email: "vnarsaria@ucsd.edu",
};
