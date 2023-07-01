import {
    mobile,
    backend,
    language1,
    language2,
    mobile2,
    // creator,
    blockchain,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    photography,
    mrs,
    global_terrorism,
    threejs,
    javascript1,
    streamlit,
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Javascript Developer",
      icon: javascript1,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Blockchain Developer",
      icon: blockchain,
    },
  
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
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
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
      name: "streamlit",
      icon: streamlit,
    },
  ];
  
  const experiences = [
    {
      title: "Tech Intern",
      company_name: "The Spaarks Foundation",
      icon: starbucks,
      iconBg: "#383E56",
      date: "July 2022 - August 2022",
      points: [
        "Created a hybrid model for stock price/performance prediction",
        "Used numerical analysis of historical stock prices, and sentimental analysis of news headlines.",
      ],
    },
    {
      title: "Data Science Internship",
      company_name: "Yoshops",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "June 2022 - August 2022",
      points: [
        "Performed Exploratory Data Analysis on company order datasets.",
        "Developed Predictive models for sales.",
        "Presented information using the data visualization technique.",
        "Proposed solutions and strategies for business challenges.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
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
      name: "Movie Recommender System",
      description:[
        "With the help of TMDB dataset created a recommender system.",
        "It provides top 5 recommendation based on the current movie search.",
      ],
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "streamlit",
          color: "green-text-gradient",
        },
        {
          name: "jupyter",
          color: "pink-text-gradient",
        },
      ],
      image: mrs,
      source_code_link: "https://github.com/nullfox-coder",
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