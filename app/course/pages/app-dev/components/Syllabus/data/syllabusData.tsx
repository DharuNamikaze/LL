import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaRegFolderOpen,
} from "react-icons/fa6";
import { PiCubeBold } from "react-icons/pi";
import { FaPenRuler } from "react-icons/fa6";
import { SiJavascript, SiCss3, SiFigma } from "react-icons/si";

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
    icon: PiCubeBold,
    title: "Semester 1",
    subtitle: "Foundations of Mobile App Development",
    mainTopics: [
      {
        icon: SiCss3,
        title: "Introduction to Web Development (HTML & CSS)",
        subTopics: [
          {
            title: "HTML Basics",
            points: [
              "Tags, Elements, and Attributes",
              "Semantic HTML for Accessibility",
              "HTML Forms and Inputs",
              "Building Static Websites",
            ],
          },
          {
            title: "CSS Basics",
            points: [
              "Selectors, Properties, and Box Model",
              "Flexbox and Grid Layout",
              "Responsive Design and Media Queries",
              "Styling a Portfolio Website",
            ],
          },
        ],
      },
      {
        icon: SiJavascript,
        title: "Introduction to Programming (JavaScript/TypeScript)",
        subTopics: [
          {
            title: "JavaScript Basics",
            points: [
              "Syntax, Variables, and Data Types",
              "Control Structures: Loops and Conditionals",
              "Functions and Scope",
              "Arrays, Objects, and ES6 Features",
            ],
          },
          {
            title: "TypeScript Basics",
            points: [
              "Type Annotations and Interfaces",
              "Classes and Inheritance",
              "Working with Modules",
              "Type Safety in Modern Applications",
            ],
          },
        ],
      },
      {
        icon: FaReact,
        title: "Introduction to React Native",
        subTopics: [
          {
            title: "React Native Basics",
            points: [
              "What is React Native? History and Architecture",
              "Setting up the Development Environment (Expo/CLI)",
              "Components and JSX Basics",
              "Styling in React Native (Flexbox, StyleSheet)",
            ],
          },
          {
            title: "State Management",
            points: [
              "Understanding State and Props",
              "Managing State with Hooks (useState, useEffect)",
              "Handling Events in React Native",
              "Reusable Components and Best Practices",
            ],
          },
        ],
      },
      {
        icon: FaRegFolderOpen,
        title: "Soft Skills Class",
        subTopics: [
          {
            title: "Communication and Productivity",
            points: [
              "Effective Communication Techniques",
              "Time Management and Productivity Skills",
              "Building Confidence and Presentation Skills",
              "Team Collaboration and Problem Solving",
            ],
          },
        ],
      },
    ],
  },
  {
    icon: FaReact,
    title: "Semester 2",
    subtitle: "Advanced React Native and APIs",
    mainTopics: [
      {
        icon: FaReact,
        title: "React Native Core Concepts",
        subTopics: [
          {
            title: "Advanced Navigation",
            points: [
              "React Navigation Basics",
              "Stack and Tab Navigation",
              "Deep Linking in React Native",
              "Dynamic Routing",
            ],
          },
          {
            title: "Handling Forms and Lists",
            points: [
              "Forms and User Input (TextInput, Keyboard Handling)",
              "Working with FlatList and SectionList",
              "Optimizing Large Lists",
              "Custom List Components",
            ],
          },
        ],
      },
      {
        icon: FaPenRuler,
        title: "UI/UX Design with Figma",
        subTopics: [
          {
            title: "Design Basics",
            points: [
              "Introduction to UI/UX Design Principles",
              "Wireframing and Prototyping",
              "Designing Mobile App Interfaces",
              "Collaborating on Design Projects",
            ],
          },
          {
            title: "Hands-On Practice",
            points: [
              "Building a Mobile App Design in Figma",
              "Exporting Assets for Development",
              "Ensuring Design Consistency",
              "User Testing and Feedback Integration",
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
        title: "Backend Fundamentals",
        subTopics: [
          {
            title: "Node.js and Express Basics",
            points: [
              "Setting up a Backend Server",
              "Building REST APIs",
              "Middleware and Routing Basics",
              "Securing APIs (CORS, Authentication)",
            ],
          },
          {
            title: "API Design",
            points: [
              "Versioning APIs",
              "Error Handling and Validation",
              "Introduction to GraphQL",
              "Building Scalable APIs",
            ],
          },
        ],
      },
      {
        icon: FaDatabase,
        title: "Database Integration",
        subTopics: [
          {
            title: "Database Basics",
            points: [
              "Introduction to SQL and NoSQL Databases",
              "CRUD Operations with Firebase Firestore",
              "Real-Time Data Updates",
              "Data Modeling and Optimization",
            ],
          },
          {
            title: "Advanced Topics",
            points: [
              "Integrating Firebase Authentication",
              "Working with Cloud Functions",
              "Database Security Rules",
              "Scaling Databases for Large Applications",
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
    icon: FaReact,
    title: "Semester 4",
    subtitle: "State Management and Advanced Features",
    mainTopics: [
      {
        icon: FaReact,
        title: "State Management in React Native",
        subTopics: [
          {
            title: "Redux Basics",
            points: [
              "Introduction to Redux and Context API",
              "Setting Up Redux in React Native Apps",
              "Actions, Reducers, and Store",
              "Middleware: Redux Thunk and Saga",
            ],
          },
          {
            title: "Advanced State Management",
            points: [
              "Persisting State with AsyncStorage",
              "Optimizing Performance in State Updates",
              "Using Context API for Local State Management",
              "Advanced Patterns in Redux",
            ],
          },
        ],
      },
      {
        icon: FaReact,
        title: "Advanced Features in React Native",
        subTopics: [
          {
            title: "Enhancing User Experience",
            points: [
              "Animations with Reanimated",
              "Gestures with React Native Gesture Handler",
              "Offline Functionality and Caching",
              "Push Notifications with Firebase",
            ],
          },
          {
            title: "Integration and Optimization",
            points: [
              "File Uploads and Downloads in React Native",
              "Integrating GraphQL APIs",
              "Improving App Performance",
              "Debugging and Error Tracking with Reactotron",
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
    icon: FaNodeJs,
    title: "Semester 5",
    subtitle: "Deployment, Testing, and Advanced Topics",
    mainTopics: [
      {
        icon: FaReact,
        title: "Testing and Debugging",
        subTopics: [
          {
            title: "Debugging Tools",
            points: [
              "Debugging React Native Apps (Reactotron, Flipper)",
              "Analyzing Network Requests",
              "Common Errors and Fixes in React Native",
              "Profiling and Optimizing Performance",
            ],
          },
          {
            title: "Testing Strategies",
            points: [
              "Unit Testing with Jest",
              "End-to-End Testing with Detox",
              "Test Coverage and Automation",
              "Integration Testing for API Calls",
            ],
          },
        ],
      },
      {
        icon: FaReact,
        title: "Deployment and CI/CD",
        subTopics: [
          {
            title: "Preparing for Deployment",
            points: [
              "Generating Build Files for iOS and Android",
              "Signing APKs and iOS Certificates",
              "Publishing to Google Play Store",
              "Publishing to Apple App Store",
            ],
          },
          {
            title: "Continuous Integration and Delivery",
            points: [
              "Introduction to CI/CD Pipelines",
              "Setting Up Fastlane for Deployment Automation",
              "Testing and Deploying Automatically",
              "Best Practices for Versioning and Updates",
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
              "Building End-to-End Mobile Applications",
              "Integrating Features: Authentication, APIs, and State Management",
              "Testing and Debugging Final Application",
            ],
          },
          {
            title: "Deployment and Feedback",
            points: [
              "Deploying the App to Stores",
              "Peer Review and Incorporating Feedback",
              "Showcasing the Application",
              "Continuous Improvements and Iterations",
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
              "Recording Video Demonstrations of Projects",
              "Engaging with Online Developer Communities",
            ],
          },
          {
            title: "Technical and Personal Branding",
            points: [
              "Writing Technical Blogs and Documentation",
              "Publishing Open-Source Contributions",
              "Showcasing AI and ML Integrations in Apps",
              "Building a Strong Online Presence",
            ],
          },
        ],
      },
      {
        icon: FaRegFolderOpen,
        title: "Soft Skills Class",
        subTopics: [
          {
            title: "Career Preparation",
            points: [
              "Preparing for Job Interviews",
              "Mastering Negotiation in Job Offers",
              "Understanding Global Market Trends in Mobile App Development",
              "Continuous Learning and Upskilling Strategies",
            ],
          },
        ],
      },
    ],
  },
];
