import {
  FaJava,
  FaCalculator,
  FaDatabase,
  FaDiagramProject,
  FaLaptopCode,
  FaRegFolderOpen,
} from "react-icons/fa6";
import { SiC, SiDjango } from "react-icons/si";

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
    icon: SiC,
    title: "Semester 1",
    subtitle: "Foundations of Programming",
    mainTopics: [
      {
        icon: SiC,
        title: "Introduction to Programming (C)",
        subTopics: [
          {
            title: "Programming Basics",
            points: [
              "Introduction to Programming Languages",
              "Understanding Compilers and Interpreters",
              "Basic Syntax and Variables in C",
              "Control Structures: Loops and Conditionals",
            ],
          },
          {
            title: "Advanced Concepts in C",
            points: [
              "Functions and Modular Programming",
              "Arrays and Strings in C",
              "Pointers and Memory Management",
              "File Handling in C",
            ],
          },
        ],
      },
      {
        icon: FaCalculator,
        title: "Mathematics for Computer Science",
        subTopics: [
          {
            title: "Mathematics Essentials",
            points: [
              "Basic Arithmetic and Algebra",
              "Discrete Mathematics Basics",
              "Set Theory and Boolean Algebra",
              "Introduction to Graph Theory",
            ],
          },
          {
            title: "Applications in Programming",
            points: [
              "Number Systems and Conversions",
              "Matrix Operations",
              "Understanding Modular Arithmetic",
              "Applications of Mathematics in Algorithms",
            ],
          },
        ],
      },
      {
        icon: FaRegFolderOpen,
        title: "Soft Skills Class",
        subTopics: [
          {
            title: "Professional Skills",
            points: [
              "Effective Communication Techniques",
              "Time Management and Productivity Skills",
              "Team Collaboration and Problem Solving",
              "Building Confidence in Presentations",
            ],
          },
        ],
      },
    ],
  },
  {
    icon: FaJava,
    title: "Semester 2",
    subtitle: "Programming with Java",
    mainTopics: [
      {
        icon: FaJava,
        title: "Introduction to Java",
        subTopics: [
          {
            title: "Java Basics",
            points: [
              "Understanding Java Syntax",
              "Variables and Data Types",
              "Control Structures: Loops and Conditionals",
              "Functions and Modular Programming in Java",
            ],
          },
          {
            title: "Advanced Java Concepts",
            points: [
              "Error Handling and Debugging",
              "File Handling in Java",
              "Introduction to Java Collections",
              "Working with JSON and APIs in Java",
            ],
          },
        ],
      },
      {
        icon: FaLaptopCode,
        title: "Data Structures and Algorithms with Java",
        subTopics: [
          {
            title: "Data Structures Basics",
            points: [
              "Understanding Arrays and Lists",
              "Working with Dictionaries and Sets",
              "Stacks, Queues, and Linked Lists",
              "Trees and Graphs Basics",
            ],
          },
          {
            title: "Algorithmic Problem Solving",
            points: [
              "Sorting and Searching Algorithms",
              "Understanding Recursion",
              "Dynamic Programming Basics",
              "Applications of Graph Algorithms",
            ],
          },
        ],
      },
      {
        icon: FaRegFolderOpen,
        title: "Soft Skills Class",
        subTopics: [
          {
            title: "Building Confidence",
            points: [
              "Critical Thinking and Decision-Making",
              "Handling Feedback Effectively",
              "Professional Networking Techniques",
              "Conflict Resolution in Teams",
            ],
          },
        ],
      },
    ],
  },
  {
    icon: FaDatabase,
    title: "Semester 3",
    subtitle: "Database Management and OOP with Java",
    mainTopics: [
      {
        icon: FaDatabase,
        title: "DBMS and Computer Networks",
        subTopics: [
          {
            title: "Database Basics",
            points: [
              "Understanding Relational Databases",
              "SQL CRUD Operations",
              "Joins and Query Optimization",
              "Database Normalization",
            ],
          },
          {
            title: "Computer Networks",
            points: [
              "Basics of Networking",
              "Understanding Network Protocols (TCP/IP)",
              "Socket Programming Basics",
              "Introduction to Firewalls and VPNs",
            ],
          },
        ],
      },
      {
        icon: FaJava,
        title: "OOP with Java",
        subTopics: [
          {
            title: "Object-Oriented Programming Basics",
            points: [
              "Understanding Classes and Objects",
              "Inheritance and Polymorphism",
              "Encapsulation and Abstraction",
              "Constructors and Destructors in Java",
            ],
          },
          {
            title: "Advanced OOP Concepts",
            points: [
              "Working with Interfaces and Abstract Classes",
              "Java Streams API",
              "Generics in Java",
              "Best Practices in OOP Design",
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
              "Developing Leadership Skills",
              "Building Effective Professional Relationships",
              "Handling Workplace Dynamics",
              "Creative Problem-Solving Techniques",
            ],
          },
        ],
      },
    ],
  },
  {
    icon: FaLaptopCode,
    title: "Semester 4",
    subtitle: "Advanced Programming Concepts",
    mainTopics: [
      {
        icon: FaLaptopCode,
        title: "Computer Architecture",
        subTopics: [
          {
            title: "Core Concepts",
            points: [
              "Understanding CPU and Memory Hierarchy",
              "Introduction to Operating Systems",
              "Virtual Memory and Paging",
              "I/O Systems and File Management",
            ],
          },
          {
            title: "Advanced Topics",
            points: [
              "Instruction Set Architectures",
              "Pipelining and Parallel Processing",
              "Cache Memory Optimization",
              "Applications in Modern Computing",
            ],
          },
        ],
      },
      {
        icon: SiDjango,
        title: "Data Engineering Basics",
        subTopics: [
          {
            title: "Data Pipelines",
            points: [
              "Introduction to Data Engineering",
              "Building ETL Pipelines",
              "Data Transformation Techniques",
              "Data Validation and Quality Checks",
            ],
          },
          {
            title: "Data Storage",
            points: [
              "Working with Data Lakes",
              "Cloud Storage Solutions",
              "Data Partitioning and Indexing",
              "Optimizing Data Retrieval",
            ],
          },
        ],
      },
      {
        icon: FaRegFolderOpen,
        title: "Soft Skills Class",
        subTopics: [
          {
            title: "Advanced Communication",
            points: [
              "Persuasive Communication Techniques",
              "Public Speaking for Impact",
              "Managing Team Conflicts",
              "Building Empathy in Leadership",
            ],
          },
        ],
      },
    ],
  },
  {
    icon: FaLaptopCode,
    title: "Semester 5",
    subtitle: "Applied Programming and System Design",
    mainTopics: [
      {
        icon: FaLaptopCode,
        title: "Operating Systems Basics",
        subTopics: [
          {
            title: "Understanding Operating Systems",
            points: [
              "Processes and Threads",
              "Scheduling Algorithms",
              "Deadlocks and Prevention Techniques",
              "File Systems Basics",
            ],
          },
          {
            title: "Systems Programming",
            points: [
              "Introduction to Shell Scripting",
              "Working with Linux Commands",
              "Networking Basics",
              "System Call Programming",
            ],
          },
        ],
      },
      {
        icon: SiDjango,
        title: "Data Engineering Applications",
        subTopics: [
          {
            title: "Real-World Data Engineering",
            points: [
              "Building Scalable Pipelines",
              "Data Cleaning at Scale",
              "Real-Time Data Processing",
              "Integrating with Machine Learning Models",
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
              "Career Planning and Goal Setting",
              "Building Personal Branding",
              "Networking and Industry Etiquette",
              "Coping with Stress and Burnout",
            ],
          },
        ],
      },
    ],
  },
  {
    icon: FaDiagramProject,
    title: "Semester 6",
    subtitle: "Capstone Project and Portfolio Development",
    mainTopics: [
      {
        icon: FaDiagramProject,
        title: "Capstone Projects",
        subTopics: [
          {
            title: "Project Development",
            points: [
              "Defining Objectives and Scope",
              "Developing Full-Stack Applications with Java",
              "Testing and Debugging Final Projects",
              "Showcasing Results and Outcomes",
            ],
          },
          {
            title: "Team Collaboration",
            points: [
              "Version Control with Git and GitHub",
              "Peer Reviews and Feedback",
              "Working in Collaborative Teams",
              "Presentation of Final Deliverables",
            ],
          },
        ],
      },
      {
        icon: FaRegFolderOpen,
        title: "Portfolio Development",
        subTopics: [
          {
            title: "Creating a Portfolio",
            points: [
              "Highlighting Projects on GitHub",
              "Writing Technical Blogs",
              "Building a Personal Website",
              "Recording Project Demonstrations",
            ],
          },
          {
            title: "Job Readiness",
            points: [
              "Preparing for Technical Interviews",
              "Mastering Negotiation Skills",
              "Understanding Global Industry Trends",
              "Continuous Learning and Upskilling",
            ],
          },
        ],
      },
      {
        icon: FaRegFolderOpen,
        title: "Soft Skills Class",
        subTopics: [
          {
            title: "Industry Readiness",
            points: [
              "Developing an Entrepreneurial Mindset",
              "Mastering Workplace Dynamics",
              "Adapting to Emerging Technologies",
              "Building Long-Term Career Vision",
            ],
          },
        ],
      },
    ],
  },
];
