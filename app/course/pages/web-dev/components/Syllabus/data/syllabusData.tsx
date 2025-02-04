import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaRegFolderOpen,
  FaServer,
} from "react-icons/fa6";

import { SiNextdotjs, SiRedux, SiGraphql, SiDocker } from "react-icons/si";

interface SubTopic {
  title: string;
  points: string[];
}

interface SyllabusModule {
  icon: React.ElementType;
  title: string;
  subtitle: string;
  mainTopics: {
    icon: React.ElementType;
    title: string;
    subTopics: SubTopic[];
  }[];
}

export const syllabusData: SyllabusModule[] = [
  {
    icon: FaHtml5,
    title: "Semester 1",
    subtitle: "Foundations of Web Development",
    mainTopics: [
      {
        icon: FaHtml5,
        title: "HTML and CSS Basics",
        subTopics: [
          {
            title: "HTML Basics",
            points: [
              "Tags, Elements, and Attributes",
              "Semantic HTML for Accessibility",
              "HTML Forms and Inputs",
              "HTML5 Features",
            ],
          },
          {
            title: "CSS Basics",
            points: [
              "Selectors, Properties, and Box Model",
              "Flexbox and Grid Layout",
              "Responsive Design with Media Queries",
              "Building a Personal Portfolio Page",
            ],
          },
        ],
      },
      {
        icon: FaJs,
        title: "Introduction to JavaScript",
        subTopics: [
          {
            title: "JavaScript Fundamentals",
            points: [
              "Syntax, Variables, and Data Types",
              "Control Structures: Loops and Conditionals",
              "Functions and Scope",
              "Arrays and Objects",
            ],
          },
          {
            title: "Modern JavaScript",
            points: [
              "ES6+ Features (Arrow Functions, Destructuring, Modules)",
              "DOM Manipulation Basics",
              "Events and Event Handling",
              "Form Validation",
            ],
          },
        ],
      },
      {
        icon: FaRegFolderOpen,
        title: "Soft Skills Class",
        subTopics: [
          {
            title: "Communication and Collaboration",
            points: [
              "Effective Communication Techniques",
              "Time Management and Productivity Skills",
              "Team Collaboration and Problem Solving",
              "Building Confidence and Presentation Skills",
            ],
          },
        ],
      },
    ],
  },
  {
    icon: FaReact,
    title: "Semester 2",
    subtitle: "Frontend Development with React",
    mainTopics: [
      {
        icon: FaReact,
        title: "React Basics",
        subTopics: [
          {
            title: "React Fundamentals",
            points: [
              "What is React? Introduction to SPA",
              "Components and JSX Basics",
              "Props and State Management",
              "Handling Events in React",
            ],
          },
          {
            title: "Advanced React",
            points: [
              "React Lifecycle Methods",
              "Hooks: useState, useEffect",
              "Building Reusable Components",
              "React Context API Basics",
            ],
          },
        ],
      },
      {
        icon: SiRedux,
        title: "State Management",
        subTopics: [
          {
            title: "Redux Basics",
            points: [
              "Understanding Redux Architecture",
              "Setting Up Redux in Applications",
              "Actions, Reducers, and Store",
              "Middleware: Redux Thunk Basics",
            ],
          },
          {
            title: "Context API and Advanced Redux",
            points: [
              "Using Context API for State Management",
              "Advanced Redux Patterns",
              "Optimizing Redux Performance",
              "Persisting State with LocalStorage",
            ],
          },
        ],
      },
      {
        icon: FaRegFolderOpen,
        title: "Soft Skills Class",
        subTopics: [
          {
            title: "Professional Development",
            points: [
              "Critical Thinking and Decision-Making",
              "Handling Feedback and Constructive Criticism",
              "Networking and Building Professional Relationships",
              "Public Speaking and Presentation Skills",
            ],
          },
        ],
      },
    ],
  },
  {
    icon: FaNodeJs,
    title: "Semester 3",
    subtitle: "Backend Development and Database Integration",
    mainTopics: [
      {
        icon: FaNodeJs,
        title: "Backend Development with Node.js",
        subTopics: [
          {
            title: "Node.js Basics",
            points: [
              "What is Node.js? Event Loop Basics",
              "Setting Up a Node.js Server",
              "Working with Modules and Packages",
              "Building REST APIs with Express.js",
            ],
          },
          {
            title: "Middleware and Security",
            points: [
              "Middleware Functions in Express",
              "Securing APIs with JWT",
              "Cross-Origin Resource Sharing (CORS)",
              "Error Handling in Node.js",
            ],
          },
        ],
      },
      {
        icon: FaDatabase,
        title: "Database Integration",
        subTopics: [
          {
            title: "SQL Databases",
            points: [
              "Introduction to Relational Databases",
              "CRUD Operations with MySQL/PostgreSQL",
              "Database Normalization",
              "Joins and Query Optimization",
            ],
          },
          {
            title: "NoSQL Databases",
            points: [
              "Introduction to MongoDB",
              "Working with Collections and Documents",
              "Aggregation Framework",
              "Data Modeling for NoSQL",
            ],
          },
        ],
      },
      {
        icon: FaRegFolderOpen,
        title: "Soft Skills Class",
        subTopics: [
          {
            title: "Leadership and Teamwork",
            points: [
              "Creative Thinking and Problem-Solving",
              "Writing Professional Emails and Documents",
              "Leadership and Team Management",
              "Building an Online Presence (GitHub, LinkedIn)",
            ],
          },
        ],
      },
    ],
  },
  {
    icon: SiNextdotjs,
    title: "Semester 4",
    subtitle: "Advanced Frontend Development with Next.js",
    mainTopics: [
      {
        icon: SiNextdotjs,
        title: "Next.js Basics",
        subTopics: [
          {
            title: "Core Next.js Features",
            points: [
              "Introduction to Next.js",
              "File-Based Routing",
              "Server-Side Rendering (SSR)",
              "Static Site Generation (SSG)",
            ],
          },
          {
            title: "API Routes and Optimizations",
            points: [
              "Creating API Endpoints",
              "Incremental Static Regeneration (ISR)",
              "Image Optimization in Next.js",
              "Performance Optimization",
            ],
          },
        ],
      },
      {
        icon: SiGraphql,
        title: "GraphQL APIs",
        subTopics: [
          {
            title: "GraphQL Basics",
            points: [
              "What is GraphQL? Key Differences from REST",
              "Setting Up GraphQL Servers",
              "Writing Queries and Mutations",
              "Integrating GraphQL with React",
            ],
          },
          {
            title: "Advanced GraphQL",
            points: [
              "GraphQL Subscriptions for Real-Time Data",
              "Schema Design and Best Practices",
              "Authentication in GraphQL APIs",
              "Caching and Optimizing Queries",
            ],
          },
        ],
      },
      {
        icon: FaRegFolderOpen,
        title: "Soft Skills Class",
        subTopics: [
          {
            title: "Strategic Thinking",
            points: [
              "Strategic Planning and Execution",
              "Advanced Public Speaking and Storytelling",
              "Conflict Resolution and Negotiation",
              "Building Empathy in Communication",
            ],
          },
        ],
      },
    ],
  },
  {
    icon: SiDocker,
    title: "Semester 5",
    subtitle: "DevOps, Testing, and Deployment",
    mainTopics: [
      {
        icon: SiDocker,
        title: "Containerization and DevOps",
        subTopics: [
          {
            title: "Docker Basics",
            points: [
              "What is Docker? Setting Up Containers",
              "Creating and Managing Docker Images",
              "Docker Compose for Multi-Container Applications",
              "Using Docker in CI/CD Pipelines",
            ],
          },
          {
            title: "DevOps Basics",
            points: [
              "Introduction to CI/CD",
              "Setting Up CI/CD Pipelines",
              "Automated Testing and Deployment",
              "Monitoring and Logging Applications",
            ],
          },
        ],
      },
      {
        icon: FaServer,
        title: "Testing and Deployment",
        subTopics: [
          {
            title: "Testing Web Applications",
            points: [
              "Unit Testing with Jest",
              "Integration Testing with Cypress",
              "End-to-End Testing",
              "Testing API Endpoints",
            ],
          },
          {
            title: "Deployment",
            points: [
              "Deploying Applications to Cloud Platforms",
              "Hosting Static Sites and APIs",
              "Version Control and Rollback",
              "Best Practices for Production Deployment",
            ],
          },
        ],
      },
      {
        icon: FaRegFolderOpen,
        title: "Soft Skills Class",
        subTopics: [
          {
            title: "Professional Development",
            points: [
              "Leadership and Motivation",
              "Advanced Networking and Professional Etiquette",
              "Coping with Stress and Burnout",
              "Personal Branding and Career Development",
            ],
          },
        ],
      },
    ],
  },
  {
    icon: FaReact,
    title: "Semester 6",
    subtitle: "Capstone Project and Portfolio Development",
    mainTopics: [
      {
        icon: FaReact,
        title: "Capstone Project",
        subTopics: [
          {
            title: "Planning and Development",
            points: [
              "Defining Objectives and Scope",
              "Building End-to-End Full-Stack Applications",
              "Testing and Debugging Final Application",
              "Deploying Applications to Production",
            ],
          },
          {
            title: "Team Collaboration",
            points: [
              "Collaborating with Teams",
              "Version Control with Git and GitHub",
              "Code Reviews and Peer Feedback",
              "Showcasing the Final Project",
            ],
          },
        ],
      },
      {
        icon: FaRegFolderOpen,
        title: "Portfolio Development",
        subTopics: [
          {
            title: "Creating a Professional Portfolio",
            points: [
              "Building a Personal Website",
              "Highlighting Projects on GitHub",
              "Writing Technical Blogs and Documentation",
              "Recording Video Demonstrations of Projects",
            ],
          },
          {
            title: "Career Preparation",
            points: [
              "Preparing for Job Interviews",
              "Mastering Negotiation in Job Offers",
              "Understanding Global Market Trends",
              "Continuous Learning and Upskilling Strategies",
            ],
          },
        ],
      },
    ],
  },
];
