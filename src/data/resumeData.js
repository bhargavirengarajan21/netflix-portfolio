// resumeData.js

export const personalInfo = {
  name: "Bhargavi Rengarajan",
  email: "bhargaviwork21@gmail.com",
  phone: "+1(951)334-6504",
  linkedin: "https://linkedin.com/in/bhargavi-r21",
  github: "https://github.com/bhargavirengarajan21",
  leetcode: "https://leetcode.com/u/bhargavirengarajan21/",
  portfolio: "https://thebhargavi.com/browse",
  location: "Chicago, IL",
  openToRelocation: true,
};

export const resumeData = {
  frontend: {
    title: "Frontend Developer",
    skills: [
      { name: "React / Redux / Hooks / Context API", level: 95 },
      { name: "Next.js / Gatsby / Vite", level: 92 },
      { name: "TypeScript / JavaScript (ES6+)", level: 95 },
      { name: "HTML5 / CSS3 / SCSS / TailwindCSS", level: 95 },
      { name: "Webpack / Babel / npm", level: 88 },
      { name: "Jest / Cypress / RTL / Enzyme", level: 90 },
      { name: "WCAG / WAI-ARIA Accessibility", level: 88 },
      { name: "A/B Testing / GTM / Web Vitals", level: 85 },
    ],
    experience: [
      {
        role: "Software Engineer II",
        company: "Mr. Cooper (Rocket Mortgage)",
        location: "Dallas, TX (Remote)",
        period: "March 2025 – Present",
        highlights: [
          "Developed reusable, time-sensitive Next.js templates with Node.js and GCP-hosted configuration, reducing build time by 90%",
          "Integrated third-party chat functionality into Next.js marketing pages, increasing user retention by 25%",
          "Improved regression test coverage by 50% across marketing pages by expanding React Testing Library test suites",
          "Standardized UI patterns by integrating a shared React component library across 4 applications using Context API",
        ],
      },
      {
        role: "Software Engineer II",
        company: "Mr. Cooper",
        location: "Chennai, India",
        period: "April 2022 – September 2023",
        highlights: [
          "Migrated 100+ pages from Gatsby to Next.js (SSR/SSG), improving Lighthouse scores from 70 to 95+",
          "Reduced bundle size by 15% by enabling tree shaking for a shared React component library supporting SSR",
          "Spearheaded marketing banner automation for 100+ banners using JavaScript, Node.js and Webpack, reducing effort from 1 day to 30 minutes",
          "Developed a loan provider reviews page with GraphQL-based sorting/filtering, increasing engagement by 25%",
        ],
      },
      {
        role: "Software Engineer I",
        company: "Mr. Cooper",
        location: "Chennai, India",
        period: "July 2020 – March 2022",
        highlights: [
          "Built reusable React components with Redux and UTM tracking, increasing lead generation by 50%",
          "Increased test coverage across 100+ React components using Jest/Cypress/RTL, reducing regression bugs by 30%",
          "Revamped 100+ web pages to meet WCAG and WAI-ARIA accessibility standards",
          "Improved responsive design across 95% of screen sizes using SCSS mixins and optimized media queries",
        ],
      },
    ],
    openSource: [
      {
        name: "AI Git Commit Tool",
        tech: "Node.js, Ollama, Docker",
        description: "On-device Git subcommand using LLM for commit messages, achieving 168× size reduction with 381+ downloads",
        link: "https://www.npmjs.com/package/git-commit-at",
      },
    ],
    projects: [
      {
        name: "Netflix-Inspired Portfolio",
        tech: "TypeScript, Tailwind, AWS EC2, Gemini AI, GitHub Actions",
        description: "Netflix-style portfolio with Gemini chatbot, improving recruiter engagement 30% and reducing bounce rate 20%",
        link: "https://thebhargavi.com/browse",
      },
      {
        name: "US Accident Zone Visualization",
        tech: "React, React Maps, PySpark, Hadoop",
        description: "Geospatial accident-zone visualization platform with React frontend to identify high-risk hotspots",
        link: "https://zpg98r.csb.app/",
      },
    ],
    achievements: [
      "Awarded 'Challenger - Q4' for outstanding innovation and problem-solving contributions",
      "Mentored 5+ interns developing B2C application (React frontend, Spring Boot Backend, MySQL)",
      "Served as Point of Contact between India and U.S. teams, reducing deployment blockers by 50%",
      "ACM Developer: Built Next.js web application prototype for university job portal",
    ],
    certifications: [
      { name: "Azure Fundamentals", issuer: "Microsoft" },
      { name: "MongoDB for JavaScript Developers", issuer: "MongoDB University" },
    ],
    education: [
      {
        degree: "MS in Computer Engineering",
        school: "University of California, Riverside",
        period: "October 2023 – March 2025",
        coursework: "Cloud Computing, Data Structures & Algorithms, Operating Systems, Computer Networks, Database Systems",
      },
      {
        degree: "BE in Computer Science and Engineering",
        school: "Anna University",
        period: "August 2016 – April 2020",
      },
    ],
  },
  fullstack: {
    title: "Software Engineer",
    skills: [
      { name: "React / Next.js / Redux", level: 95 },
      { name: "Node.js / Express / REST API", level: 92 },
      { name: "TypeScript / JavaScript / Java", level: 95 },
      { name: "GraphQL / MongoDB / Redis", level: 88 },
      { name: "AWS / GCP / Azure", level: 85 },
      { name: "Docker / Kubernetes / CI/CD", level: 85 },
      { name: "Kafka / Git / GitHub Actions", level: 88 },
      { name: "Jest / Cypress / RTL", level: 90 },
    ],
    experience: [
      {
        role: "Software Engineer II",
        company: "Mr. Cooper (Rocket Mortgage)",
        location: "Dallas, TX (Remote)",
        period: "March 2025 – Present",
        highlights: [
          "Optimized a Java service with Redis caching to reduce 10K/day mortgage-rate API requests, minimizing redundant traffic",
          "Enhanced CI/CD in Jenkins and added New Relic alerts for scheduled-job services, reducing debugging time from 15 mins to 2 mins",
          "Developed reusable Next.js templates with Node.js and GCP-hosted configuration, reducing build time by 90%",
          "Improved regression test coverage by 50% across marketing pages by expanding React Testing Library test suites",
        ],
      },
      {
        role: "Software Engineer II",
        company: "Mr. Cooper",
        location: "Chennai, India",
        period: "April 2022 – September 2023",
        highlights: [
          "Automated marketing banner publishing using Kafka-driven workflows with Node.js/Webpack middleware and Azure Pipelines, clearing 200-ticket backlog",
          "Migrated 100+ pages from Gatsby to Next.js (SSR/SSG), improving Lighthouse scores from 70 to 95+",
          "Refactored legacy Dockerfiles and rolled out multi-stage builds, reducing image size by 40%",
          "Developed a loan provider reviews page with GraphQL-based sorting/filtering, increasing engagement by 25%",
        ],
      },
      {
        role: "Software Engineer I",
        company: "Mr. Cooper",
        location: "Chennai, India",
        period: "July 2020 – March 2022",
        highlights: [
          "Published a TypeScript REST client library for 10 endpoints, standardizing request/response handling",
          "Optimized Spring Boot REST APIs and MongoDB aggregations, improving data retrieval latency by 15% for 9K+ users",
          "Built a Node.js/Express reverse proxy to mirror Nginx on Windows, enabling local dev without Docker",
          "Increased test coverage across 100+ React components using Jest/Cypress/RTL, reducing regression bugs by 30%",
        ],
      },
    ],
    openSource: [
      {
        name: "AI Git Commit Tool",
        tech: "Node.js, Ollama, Docker",
        description: "On-device Git subcommand using LLM for commit messages, achieving 168× size reduction with 381+ downloads",
        link: "https://www.npmjs.com/package/git-commit-at",
      },
    ],
    projects: [
      {
        name: "Distributed Cloud Logging",
        tech: "Golang, Kubernetes, Blockchain",
        description: "Serverless, tamper-resistant cloud logging system reducing debugging time by 60%",
        link: "https://github.com/bhargavirengarajan21/cloud-logging",
      },
      {
        name: "Air Pollution Prediction",
        tech: "Python, Flask, XGBoost",
        description: "Full-stack ML app for PM10 prediction achieving 95% cross-validated accuracy",
        link: "https://github.com/bhargavirengarajan21/airpollution",
      },
      {
        name: "Image Compression in CUDA",
        tech: "C++, CUDA, cuFFT, cuBLAS",
        description: "GPU-based image compression reducing size from 166KB to 10KB while maintaining fidelity",
        link: "https://github.com/bhargavirengarajan21/finalproject-f23-gpu-etherealtrio",
      },
      {
        name: "Electrostatic Dithering",
        tech: "Python, CuPy, Google Colab",
        description: "GPU-accelerated dithering algorithms improving pattern uniformity and reducing artifacts",
        link: "https://github.com/bhargavirengarajan21/Electrostatic-halftoning",
      },
      {
        name: "Netflix-Inspired Portfolio",
        tech: "TypeScript, Tailwind, AWS EC2, Gemini AI",
        description: "Netflix-style portfolio with Gemini chatbot, improving recruiter engagement 30%",
        link: "https://thebhargavi.com/browse",
      },
    ],
    achievements: [
      "Awarded 'Challenger - Q4' for outstanding innovation and problem-solving contributions",
      "Published IEEE paper 'Assessment Of Spatial Hazard And Impact Of PM10 Using Machine Learning'",
      "Mentored 5+ interns developing B2C application (React frontend, Spring Boot Backend, MySQL)",
      "Served as Point of Contact between India and U.S. teams, reducing deployment blockers by 50%",
      "Teaching Assistant (Chemistry): Supported 50+ students with experiments and lab assessments",
    ],
    certifications: [
      { name: "Azure Fundamentals", issuer: "Microsoft" },
      { name: "MongoDB for JavaScript Developers", issuer: "MongoDB University" },
    ],
    education: [
      {
        degree: "MS in Computer Engineering",
        school: "University of California, Riverside",
        period: "October 2023 – March 2025",
        coursework: "Cloud Computing, Data Structures & Algorithms, Operating Systems, Computer Networks, Database Systems",
      },
      {
        degree: "BE in Computer Science and Engineering",
        school: "Anna University",
        period: "August 2016 – April 2020",
      },
    ],
  },
};

export default resumeData;