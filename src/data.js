import { DiReact } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { TbBrandThreejs } from "react-icons/tb";
import { FaPython } from "react-icons/fa";
import { SiNumpy, SiPandas, SiWhatsapp } from "react-icons/si";
import { SiJupyter } from "react-icons/si";

import { SiExpress, SiMongodb } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiFiverr } from "react-icons/si";
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { CgFigma } from "react-icons/cg";
import { TbBrandReactNative } from "react-icons/tb";
import { SiAdobexd } from "react-icons/si";
import { FaSketch } from "react-icons/fa";
import { SiAdobephotoshop } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import napft from "../src/assets/napft.png";
import { SiHiveBlockchain } from "react-icons/si";
import portfolio from "../src/assets/portfoliosatya.png";
import Mehar from "../src/assets/Mehar.png";
export const menu = [
  { name: "About" },
  { name: "Services" },
  { name: "Skill" },
  { name: "Projects" },
  { name: "Testimonial" },
  { name: "Contact" },
];

export const projects = [
  {
    id: 1,
    title: "NAFFT: NFT Marketplace",
    image: napft,
    category: "Web",
    data: {
      description: `Crafted with cutting-edge technology, NAFFT is a fully-featured NFT marketplace where users can seamlessly create, buy, sell, and trade NFTs. Developed using the MERN stack, the platform is reinforced with blockchain integration, ensuring secure and transparent transactions. Advanced 3D features elevate the user experience, providing a dynamic environment for NFT enthusiasts. Hosted on Hostinger, NAFFT showcases my ability to blend innovative technologies into a cohesive, high-performance platform that meets the demands of a rapidly evolving digital market.`,
      demoLink: "https://napft.com/",
    },
    buttonname: "live Website",
    stack: [
      {
        name: "ReactJs",
        icon: <DiReact />,
        iconColor: "skyblue",
      },
      {
        name: "NodeJs",
        icon: <FaNodeJs />,
        iconColor: "green",
      },
      {
        name: "ExpressJs",
        icon: <SiExpress />,
      },
      {
        name: "MongoDB",
        icon: <SiMongodb />,
        iconColor: "limegreen",
      },
      {
        name: "Blockchain",
        icon: <SiHiveBlockchain />,
      },
    ],
  },
  {
    id: 2,
    title: "Mehar HospitalityService freelance project",
    image: Mehar,
    category: "Web",
    data: {
      description: `Developed a hospitality website for client to support marketing and sales for hotels in India, specifically
in Delhi. The site includes dynamic content, real-time data updates, and interactive UI
components,notification system,email delivery system and hosted in web hosting and VPS`,
      demoLink: "https://meharhospitalityservices.com/",
    },
    buttonname: "live Website",
    stack: [
      {
        name: "ReactJs",
        icon: <DiReact />,
        iconColor: "skyblue",
      },
      {
        name: "NodeJs",
        icon: <FaNodeJs />,
        iconColor: "green",
      },
      {
        name: "ThreeJs",
        icon: <TbBrandThreejs />,
        iconColor: "green",
      },
      {
        name: "ExpressJs",
        icon: <SiExpress />,
      },
      {
        name: "MongoDB",
        icon: <SiMongodb />,
        iconColor: "limegreen",
      },
    ],
  },
  {
    id: 3,
    title: "Portfolio Website",
    image: portfolio,
    category: "Web",
    data: {
      description: `Experience the fusion of creativity and technology with my interactive portfolio website. Developed using the MERN stack, Redis for efficient data management, and brought to life with the immersive capabilities of 3.js and GSAP animations, this site is a testament to my expertise in modern web development. Styled-components provide a polished and cohesive design, ensuring a visually appealing and responsive user experience. Dive into my work and explore a digital space where innovation meets elegance.`,
      demoLink: "https://satyapriya-mishra-portfolio.vercel.app/",
    },
    buttonname: "live Website",
    stack: [
      {
        name: "ReactJs",
        icon: <DiReact />,
        iconColor: "skyblue",
      },
      {
        name: "NodeJs",
        icon: <FaNodeJs />,
        iconColor: "green",
      },
      {
        name: "ThreeJs",
        icon: <TbBrandThreejs />,
        iconColor: "green",
      },
      {
        name: "ExpressJs",
        icon: <SiExpress />,
      },
      {
        name: "MongoDB",
        icon: <SiMongodb />,
        iconColor: "limegreen",
      },
    ],
  },
  {
    id: 4,
    title: "Netflix Clone",
    image:
      "https://cdn.dribbble.com/userupload/5919110/file/original-4fd69ed014f2e248f331b3ce341bee69.png?resize=1905x1429",
    category: "Web",
    data: {
      description: `A video streaming Platform with user authentication, movie browsing, and video streaming.Developed a responsive UI with React and styled-components for seamless multi-device experience. Managed MongoDB for efficient storage, retrieval, and aggregation of user and media data, allowing users to search,
filter, and view detailed content.Enhanced performance with server-side rendering, Redux state management, and Redis caching.`,
      demoLink: "https://github.com/mishrasatyapriya9/NetFlix-clone",
    },
    buttonname: "Checkout Code",
    stack: [
      {
        name: "ReactJs",
        icon: <DiReact />,
        iconColor: "skyblue",
      },
      {
        name: "NodeJs",
        icon: <FaNodeJs />,
        iconColor: "green",
      },
      {
        name: "ExpressJs",
        icon: <SiExpress />,
      },
      {
        name: "MongoDB",
        icon: <SiMongodb />,
        iconColor: "limegreen",
      },
    ],
  },
  {
    id: 5,
    title: "Book My Space",
    image:
      "https://cdn.dribbble.com/users/5557327/screenshots/18944261/media/36e2cb844cb6952edf67c8fa734c3931.png",
    category: "Web",
    data: {
      description: `Built an all-in-one platform for event booking and management using the MERN stack, targeting event
organizers and service providers like photographers, decorators, and caterers.Developed comprehensive user roles, with their respective dashboards.Ensured real-time updates and notifications using WebSockets,Implemented MongoDB pipeline for data
aggregation.Razor pay for Payment Integretion.`,
      demoLink: "https://github.com/mishrasatyapriya9/Venue_booking_System",
    },
    buttonname: "Checkout Code",
    stack: [
      {
        name: "ReactJs",
        icon: <DiReact />,
        iconColor: "skyblue",
      },
      {
        name: "NodeJs",
        icon: <FaNodeJs />,
        iconColor: "green",
      },
      {
        name: "ExpressJs",
        icon: <SiExpress />,
      },
      {
        name: "MongoDB",
        icon: <SiMongodb />,
        iconColor: "limegreen",
      },
    ],
  },
  {
    id: 6,
    title: "Just Note",
    image:
      "https://cdn.dribbble.com/userupload/4111131/file/original-df34c8066f3a56c237534ecc1e8772e7.jpeg?resize=1600x1060",
    category: "Web",
    data: {
      description: `Transform the way you organize your thoughts with this dynamic notes-making platform. Built using the robust MERN stack and supercharged with Redis for lightning-fast caching and session management, this app offers a seamless experience for users to create, manage, and access their notes with unparalleled efficiency. Whether you're jotting down quick ideas or organizing detailed plans, this project showcases not only my skills in full-stack development but also my ability to integrate powerful data storage solutions for enhanced performance.`,
      demoLink: "https://github.com/mishrasatyapriya9/JustNote_Webapp_",
    },
    buttonname: "Checkout Code",
    stack: [
      {
        name: "ReactJs",
        icon: <DiReact />,
        iconColor: "skyblue",
      },
      {
        name: "NodeJs",
        icon: <FaNodeJs />,
        iconColor: "green",
      },
      {
        name: "ExpressJs",
        icon: <SiExpress />,
      },
      {
        name: "MongoDB",
        icon: <SiMongodb />,
        iconColor: "limegreen",
      },
    ],
  },
  {
    id: 7,
    title: "Credit Risk Assessment:",
    image:
      "https://cdn.dribbble.com/users/8244207/screenshots/16627622/media/3907176a66e3a4d3d0d16ddd103caab0.png",
    category: "Web",
    data: {
      description: `Developed a machine learning model to assess credit risk by analyzing customer data and predicting the
likelihood of default. Implemented data preprocessing, feature engineering, and model evaluation
techniques.`,
      demoLink:
        "https://drive.google.com/file/d/1B7t-TPeX2kJjdR1EdqTQIfSZHM57AJQx/view",
    },
    buttonname: "Checkout Presentation",
    stack: [
      {
        name: "Python",
        icon: <FaPython />,
        iconColor: "skyblue",
      },
      {
        name: "Pandas",
        icon: <SiPandas />,
        iconColor: "skyblue",
      },
      {
        name: "Jupyter Notebook",
        icon: <SiJupyter />,
        iconColor: "skyblue",
      },
      {
        name: "Numpy",
        icon: <SiNumpy />,
        iconColor: "green",
      },
    ],
  },
  {
    id: 8,
    title: "Project Management application",
    image:
      "https://miro.medium.com/v2/resize:fit:1400/1*6iO0wm8q4cByvxY6kB9WiQ.png",
    category: "Apps",
    data: {
      description: `Simplify project coordination with our intuitive Project Management application. Track tasks, collaborate in real-time, and streamline workflows effortlessly. With customizable features and robust reporting, stay organized and efficient.
                       Elevate your project management experience and achieve success with ease.`,
      demoLink: "https://google.com/",
    },
    stack: [
      {
        name: "React Native",
        icon: <TbBrandReactNative />,
        iconColor: "skyblue",
      },
      {
        name: "NodeJs",
        icon: <FaNodeJs />,
        iconColor: "green",
      },
      {
        name: "ExpressJs",
        icon: <SiExpress />,
      },
      {
        name: "MongoDB",
        icon: <SiMongodb />,
        iconColor: "limegreen",
      },
    ],
  },
  {
    id: 9,
    title: "Mobile bank - App Design",
    image:
      "https://i.pinimg.com/originals/a0/be/c3/a0bec3706210e6ab28470eee95bf5889.png",
    category: "UI/UX",
    data: {
      description: `Experience banking at your fingertips with our sleek Mobile Bank app design. Seamlessly manage your finances on-the-go with intuitive navigation, secure transactions, and personalized insights. Enjoy a modern interface that prioritizes convenience and accessibility, revolutionizing your banking experience.`,
      demoLink: "https://google.com/",
    },
    stack: [
      {
        name: "Figma",
        icon: <CgFigma />,
        iconColor: "orangered",
      },
    ],
  },
  {
    id: 10,
    title: "Quiz App Development",
    image:
      "https://i.pinimg.com/originals/b3/35/02/b33502e465346ace2a7f1df203d851a3.jpg",
    category: "Apps",
    data: {
      description: `Elevate engagement and knowledge retention with our Quiz App 
                      Development project. Seamlessly crafted for interactive learning 
                      experiences, our app offers customizable quizzes, real-time feedback, 
                      and captivating visuals. Empower users to test their knowledge anytime,
                       anywhere, fostering a dynamic learning environment tailored to their 
                       needs.`,
      demoLink: "https://google.com/",
    },
    stack: [
      {
        name: "React Native",
        icon: <TbBrandReactNative />,
        iconColor: "skyblue",
      },
      {
        name: "NodeJs",
        icon: <FaNodeJs />,
        iconColor: "green",
      },
      {
        name: "ExpressJs",
        icon: <SiExpress />,
      },
      {
        name: "MongoDB",
        icon: <SiMongodb />,
        iconColor: "limegreen",
      },
    ],
  },
];

export const experience = [
  {
    title: "UI/UX",
    data: [
      {
        skill: "Figma",
        logo: <CgFigma />,
        level: "Experienced",
      },
      {
        skill: "Sketch",
        logo: <FaSketch />,
        level: "Intermediate",
      },
      {
        skill: "XD",
        logo: <SiAdobexd />,
        level: "Intermediate",
      },
      {
        skill: "Photoshop",
        logo: <SiAdobephotoshop />,
        level: "Intermediate",
      },
    ],
  },
  {
    title: "Frontend Development",
    data: [
      {
        skill: "HTML",
        logo: <FaHtml5 />,
        level: "Experienced",
      },
      {
        skill: "CSS",
        logo: <FaCss3 />,
        level: "Experienced",
      },
      {
        skill: "JavaScript",
        logo: <IoLogoJavascript />,
        level: "Experienced",
      },
      {
        skill: "Tailwind",
        logo: <RiTailwindCssFill />,
        level: "Intermediate",
      },
      {
        skill: "Bootstrap",
        logo: <FaBootstrap />,
        level: "Experienced",
      },
      {
        skill: "React",
        logo: <DiReact />,
        level: "Experienced",
      },
      {
        skill: "React Native",
        logo: <TbBrandReactNative />,
        level: "Experienced",
      },
    ],
  },
  {
    title: "Backend Development",
    data: [
      {
        skill: "Node JS",
        logo: <FaNodeJs />,
        level: "Experienced",
      },
      {
        skill: "MangoDB",
        logo: <SiMongodb />,
        level: "Intermediate",
      },
      {
        skill: "Express JS",
        logo: <SiExpress />,
        level: "Experienced",
      },
      {
        skill: "MySQL",
        logo: <SiMysql />,
        level: "Experienced",
      },
    ],
  },
];

export const socialHandles = [
  {
    name: "Fiverr",
    icon: <SiFiverr />,
    link: "",
  },
  {
    name: "Github",
    icon: <AiFillGithub />,
    link: "",
  },
  {
    name: "LinkedIn",
    icon: <AiFillLinkedin />,
    link: "",
  },
  {
    name: "Whatsapp",
    icon: <SiWhatsapp />,
    link: "https://api.whatsapp.com/send?phone=7982319067",
  },
  {
    name: "Youtube",
    icon: <AiFillYoutube />,
    link: "",
  },
];
