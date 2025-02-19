import { FaLinkedin } from 'react-icons/fa';
import {
    codingSensaiImage,
    socialMediaCloneBackend,
    socialMediaCloneFrontend,
    tiktokClone 
} from "./assets/index";

export const navigation = [
  { id: "0", title: "Home", url: "#home" },
  { id: "1", title: "About", url: "#about" },
  { id: "2", title: "Projects", url: "#projects" },
  { id: "3", title: "Experience", url: "#experience"},
  { id: "4", title: "Skills", url: "#skills" },
  { id: "5", title: "Resume", url: "https://drive.google.com/file/d/1vHszOlUAqHTHbVZQ3zNbPtkpiJlWLBfD/view?usp=sharing", isExternal: true },
  { id: "6", title: "Contact", url: "#contact" },
];

export const projects = [
    {
        title: 'Education Platform Frontend',
        image: codingSensaiImage,
        technologies: 'React, Tailwind CSS, OAuth (GitHub)',
        description: `A dynamic education platform featuring interactive course tracks, 
        milestones, and gamification elements. Built with React.js 
        and Tailwind CSS for a responsive, engaging user experience.`,
        date: 'August 2024 - October 2024',
        liveLink: "https://github.com/AhmadOsama9/coding-sensai-frontend",
        githubLink: "https://github.com/AhmadOsama9/coding-sensai-frontend"
    },   
    {
        title: 'Education Platform Backend',
        image: codingSensaiImage,
        technologies: 'Node.js, Express.js, PostgreSQL, AWS Lambda, GitHub OAuth',
        description: `Scalable education platform backend built with Node.js/Express.js and PostgreSQL. 
        Features GitHub OAuth authentication and AWS Lambda integration for serverless architecture.`,
        date: 'August 2024 - October 2024',
        liveLink: "https://github.com/AhmadOsama9/coding-sensai-backend",
        githubLink: "https://github.com/AhmadOsama9/coding-sensai-backend"
    },    
    {
        title: 'TikTok-like Backend',
        image: tiktokClone,
        technologies: 'Node.js, Express.js, PostgreSQL, AWS S3',
        description: `
          A backend solution for a TikTok-like app, including video compression, content moderation, user authentication, 
          and real-time video recommendations for enhanced user engagement and scalability.
        `,
        date: 'January 2024 - March 2024',
        liveLink: "https://github.com/AhmadOsama9/TikTok-Clone-Backend",
        githubLink: "https://github.com/AhmadOsama9/TikTok-Clone-Backend"
    },  
    {
      title: 'Social Media Clone (Frontend)',
      image: socialMediaCloneFrontend,
      technologies: 'React, Tailwind CSS',
      description: `
        A fully responsive frontend for a social media clone, featuring dynamic profiles, posts, comments, likes, 
        real-time chat via WebSockets, and interactive community pages for seamless user experiences.
      `,
      date: 'July 2023 - September 2023',
      liveLink: "https://github.com/AhmadOsama9/SocialMediaCloneFrontEnd",
      githubLink: "https://github.com/AhmadOsama9/SocialMediaCloneFrontEnd"
    },
    {
      title: 'Social Media Clone (Backend)',
      image: socialMediaCloneBackend,
      technologies: 'Node.js, Express.js, MongoDB',
      description: `
        A robust backend system for a social media clone with features like real-time chat, authentication, 
        data management for posts and comments, friend lists, notifications, and scalable RESTful APIs.
      `,
      date: 'July 2023 - September 2023',
      liveLink: "https://github.com/AhmadOsama9/SocialMediaCloneBackend",
      githubLink: "https://github.com/AhmadOsama9/SocialMediaCloneBackend"
    },
];

