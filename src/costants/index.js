import {
    backend,
    language1,
    language2,
    javascript,
    typescript,
    html,
    css,
    django,
    pg,
    playwright,
    nodejs,
    mongodb,
    git,
    figma,
    photography,
    global_terrorism,
    javascript1,
    grocery,
    buildings,
    pathfinder
  } from "../assets";



  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Python Developer",
      icon: language1,
    },
    {
      title: "C++ Developer",
      icon: language2,
    },
    {
      title: "Javascript Developer",
      icon: javascript1,
    },
    {
      title: "Backend Developer",
      icon: backend,
    }
  
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "Django",
      icon: django,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "PostgreSql",
      icon: pg,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "playwright",
      icon: playwright,
    },
  ];
  
  const experiences = [
    {
      title: "Backend Deveoper",
      company_name: "Trixno",
      iconBg: "#383E56",
      date: "July 2024 - February 2025",
      points: [
        "Designed and implemented 100+ robust APIs, optimized with Redis caching for performance. ",
        "Led backend development for 1 project and contributed to 3 others, ensuring scalability and reliability.", 
        "Conducted research to meet client demands, including integrating Meta APIs to develop a WhatsApp Business Solution Provider platform.",
        "Developed scripts to scrape, generate, and automate data for website and testing purposes, streamlining processes.", 
        "Integrated diverse third-party services: payment gateways, caching mechanisms, bulk SMS systems, and Meta APIs.", 
        "Utilized modern tools and technologies: Django, Node.js, TypeScript, PostgreSQL, Docker, Git, Postman, ngrok, and cloud platforms (GCP, AWS).",
        "Streamlined development processes with containerization and CI/CD pipelines, improving deployment efficiency." 
      ],
    },
    {
      title: "Software Trainee",
      company_name: "Bosscoder",
      // icon: bosscoder,
      iconBg: "#383E56",
      date: "Nov 2023 - May 2024",
      points: [
        "Mastered Data Structures and Algorithms, Backend Development, and Low-Level Design through a comprehensive 6-month training program.",  
        "Solved more than 400 DSA problems consistently for 6 months and participated in various discussions over HLD.",
        "Developed industry-level projects, integrating multiple frameworks to achieve robust solutions." 
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "lorem epsom dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Photography Portfolio",
      description:
        "I have created a portfolio to showcase my photography skills.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: photography,
      source_code_link: "https://nullfox-coder.github.io/null_fox.github.io/index.html",
    },
    {
      name: "Grocery App",
      description:[
          "A grocery App just like blinkit, where user can select store , add items to cart, checkout and pay. The Algorithm is such that user will be only be able to order from the store which is near to his location.",
      ],
      tags: [
        {
          name: "postgresql",
          color: "blue-text-gradient",
        },
        {
          name: "node.js",
          color: "green-text-gradient",
        },
        {
          name: "typescript",
          color: "pink-text-gradient",
        },
      ],
      image: grocery,
      source_code_link: "https://grocery-web-ebon.vercel.app/",
    },
    {
      name: "Real Estate Website",
      description:
        "Build a Real Estate website for seller, agent can list thier properties and buyer can search for properties based on different features/ratings of that property.",
      tags: [
        {
          name: "postgresql",
          color: "blue-text-gradient",
        },
        {
          name: "Django",
          color: "green-text-gradient",
        },
        {
          name: "python",
          color: "pink-text-gradient",
        },
      ],
      image: buildings,
      source_code_link: "https://github.com/nullfox-coder/real-estate",
    },
    {
      name: "Shortest Path Finder",
      description:
        "Applied Dijkstra’a shortest path algorithm to find the route which takes the shortest time to travel from source to destination in a grid where we can randomly generate traffic.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Javascript",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
      ],
      image: pathfinder,
      source_code_link: "https://github.com/nullfox-coder/Shortest-Path-Visualizer",
    },
    {
      name: "EDA on Global Terrorism",
      description:
        "As an analyst, I tried to find out the zone of terrorism, security issues and insight by performing EDA",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "jupyter",
          color: "green-text-gradient",
        },
        {
          name: "visualization-tools",
          color: "pink-text-gradient",
        },
      ],
      image: global_terrorism,
      source_code_link: "https://github.com/nullfox-coder",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };