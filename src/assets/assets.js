import { FaLightbulb, FaPaintBrush, FaCode, FaReact, FaServer, FaMobileAlt, FaTools, FaNodeJs, FaStripe, FaVuejs, FaFire, FaDatabase, FaCloud, FaRobot } from 'react-icons/fa';

import profileImg from '../assets/profile.avif';
import projectImg1 from '../assets/project1.avif';
import projectImg2 from '../assets/project2.avif';
import projectImg3 from '../assets/project3.avif';
import projectImg4 from '../assets/portfolio-Website.png';
import projectImg5 from '../assets/CV-Front-View.png';
import projectImg6 from '../assets/project6.png';


export const assets = {
    profileImg,
}


export const aboutInfo = [
    {
      icon: FaLightbulb,
      title: 'Innovative',
      description: 'I love creating unique solutions to complex problems with cutting-edge technologies.',
      color: 'text-purple'
    },
    {
      icon: FaPaintBrush,
      title: 'Design Oriented',
      description: 'Beautiful design and user experience are at the heart of everything I create.',
      color: 'text-pink'
    },
    {
      icon: FaCode,
      title: 'Clean Code',
      description: 'I write maintainable, efficient code following best practices and modern patterns.',
      color: 'text-blue'
    }
  ];



export const skills = [
  {
    title: 'Frontend Development',
    icon: FaReact,
    description: 'Building responsive and interactive user interfaces with modern frameworks.',
    tags: ['React', 'Vue.js', 'Angular', 'TypeScript']
  },
  {
    title: 'Backend Development',
    icon: FaServer,
    description: 'Creating robust server-side applications and RESTful APIs.',
    tags: ['Node.js', 'Express', 'Django', 'Laravel']
  },
  {
    title: 'Database Management',
    icon: FaDatabase,
    description: 'Designing and optimizing databases for performance and scalability.',
    tags: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase']
  },
  {
    title: 'Mobile Development',
    icon: FaMobileAlt,
    description: 'Building cross-platform mobile applications with modern tools.',
    tags: ['React Native', 'Flutter', 'Ionic', 'Swift']
  },
  {
    title: 'Cloud & DevOps',
    icon: FaCloud,
    description: 'Deploying and managing applications in cloud environments.',
    tags: ['AWS', 'Docker', 'Kubernetes', 'CI/CD']
  },
  {
    title: 'Tools & Technologies',
    icon: FaTools,
    description: 'Essential tools and technologies I use in my development workflow.',
    tags: ['Git & GitHub', 'Webpack', 'Figma', 'Jest']
  }
];



export const projects = [
  {
    title: "E-Commerce Platform (dummy card)",
    description: "A full-featured online store with shopping cart, user authentication, and payment processing.",
    image: projectImg1,
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    icons: [FaReact, FaNodeJs, FaDatabase , FaStripe],
    demo: "#",
    code: "#",
  },
  {
    title: "Task Management App (dummy card)",
    description: "A productivity application with drag-and-drop functionality and real-time updates.",
    image: projectImg2,
    tech: ["Vue.js", "Firebase", "Tailwind CSS", "WebSockets"],
    icons: [FaVuejs, FaFire, FaCloud , FaDatabase],
    demo: "#",
    code: "#",
  },
  {
    title: "Maria Chohan CV (dummy card)",
    description: "A Maria Chohan's Responsive CV to Show case my skills.",
    image: projectImg3,
    tech: ["React Native", "GraphQL", "MySQL", "Chart.js"],
    icons: [FaReact, FaDatabase],
    demo: "https://mariaahmedchohan.github.io/Maria-Chohan-CV/",
    code: "https://github.com/MariaAhmedChohan/Maria-Chohan-CV",
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio to showcase projects, skills, and contact to me !.",
    image: projectImg4,
    tech: ["vite", "React.js", "Tailwind CSS", "React icons", "Framer Motion" ],
    icons: [FaReact, FaCloud],
    demo: "#",
    code: "#",
  },
  {
    title: "Maria Chohan CV",
    description: "A Maria Chohan's Responsive CV to Show case my skills.",
    image: projectImg5,
    tech: ["html", "simple css", "javascript", "VS code"],
    icons: [FaReact, FaNodeJs, FaDatabase ],
     demo: "https://mariaahmedchohan.github.io/Maria-Chohan-CV/",
    code: "https://github.com/MariaAhmedChohan/Maria-Chohan-CV",
  },
  {
    title: "Tic-Tac-Toe Game",
    description: "Tic-Tac-Toe Game built by using simple HTML, CSS and javaScript at VS code plateform.",
    image: projectImg6,
    tech: ["html", "simple css", "javascript", "VS code"],
    icons: [FaRobot, FaReact, FaCloud],
    demo: "#",
    code: "https://github.com/MariaAhmedChohan/Tic-Tac-Toe-Game",
  }
];


