import {
  FaCode,
  FaCalculator,
  FaDatabase,
  FaDiagramProject,
  FaLaptopCode,
  FaRegFolderOpen,
} from "react-icons/fa6";
import { SiCplusplus, SiC } from "react-icons/si";

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
              "Introduction to Programming and its Applications",
              "Basic Syntax and Variables in C",
              "Control Structures: Loops and Conditionals",
              "Functions and Modular Programming",
            ],
          },
          {
            title: "Advanced C Programming",
            points: [
              "Arrays and Strings in C",
              "Pointers and Memory Management",
              "File Handling in C",
              "Debugging Techniques in C",
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
    icon: SiCplusplus,
    title: "Semester 2",
    subtitle: "Programming with C++",
    mainTopics: [
      {
        icon: SiCplusplus,
        title: "Introduction to C++",
        subTopics: [
          {
            title: "C++ Basics",
            points: [
              "History and Applications of C++",
              "Understanding C++ Syntax and Variables",
              "Control Structures: Loops and Conditionals in C++",
              "Functions and Modular Programming",
            ],
          },
          {
            title: "Core C++ Concepts",
            points: [
              "Arrays and Strings in C++",
              "Error Handling and Debugging",
              "File Handling in C++",
              "Introduction to C++ Libraries",
            ],
          },
        ],
      },
      {
        icon: FaLaptopCode,
        title: "Data Structures and Algorithms with C++",
        subTopics: [
          {
            title: "Data Structures Basics",
            points: [
              "Understanding Arrays and Linked Lists",
              "Stacks and Queues",
              "Trees and Graphs Basics",
              "Hashing and Hash Tables",
            ],
          },
          {
            title: "Algorithmic Problem Solving",
            points: [
              "Searching and Sorting Algorithms",
              "Introduction to Recursion",
              "Applications of Graph Algorithms",
              "Dynamic Programming Basics",
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
    subtitle: "Database Management and OOP with C++",
    mainTopics: [
      {
        icon: FaDatabase,
        title: "Database Management Systems (DBMS)",
        subTopics: [
          {
            title: "Relational Databases",
            points: [
              "Understanding SQL and CRUD Operations",
              "Joins and Query Optimization",
              "Database Normalization",
              "Stored Procedures and Triggers",
            ],
          },
          {
            title: "NoSQL Databases",
            points: [
              "Introduction to NoSQL Databases",
              "Working with MongoDB",
              "Comparing SQL and NoSQL",
              "Applications of NoSQL Databases",
            ],
          },
        ],
      },
      {
        icon: SiCplusplus,
        title: "Object-Oriented Programming (OOP) in C++",
        subTopics: [
          {
            title: "OOP Basics",
            points: [
              "Understanding Classes and Objects",
              "Inheritance and Polymorphism",
              "Encapsulation and Abstraction",
              "Constructors and Destructors in C++",
            ],
          },
          {
            title: "Advanced OOP Concepts",
            points: [
              "Operator Overloading",
              "Templates and Generic Programming",
              "Design Patterns in C++",
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
        title: "Advanced C++ Programming",
        subTopics: [
          {
            title: "Modern C++",
            points: [
              "Introduction to C++11, C++14, and C++17",
              "Lambda Functions and Functional Programming",
              "Advanced Template Metaprogramming",
              "Working with Smart Pointers",
            ],
          },
          {
            title: "Concurrency and Multithreading",
            points: [
              "Understanding Threads in C++",
              "Synchronization Techniques",
              "Debugging Multithreaded Applications",
              "Applications of Concurrency in Real World",
            ],
          },
        ],
      },
      {
        icon: FaLaptopCode,
        title: "Computer Architecture",
        subTopics: [
          {
            title: "Core Concepts",
            points: [
              "CPU and Memory Hierarchy",
              "Virtual Memory and Paging",
              "Cache Memory Optimization",
              "Understanding Instruction Sets",
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
    icon: FaDiagramProject,
    title: "Semester 5",
    subtitle: "Applications of C++ and System Design",
    mainTopics: [
      {
        icon: FaDiagramProject,
        title: "System Design Basics",
        subTopics: [
          {
            title: "High-Level System Design",
            points: [
              "Scalability and Load Balancing",
              "Designing for High Availability",
              "Object-Oriented Design Principles",
              "Real-World System Design Examples",
            ],
          },
        ],
      },
      {
        icon: FaLaptopCode,
        title: "Performance Optimization in C++",
        subTopics: [
          {
            title: "Optimizing C++ Applications",
            points: [
              "Memory Management Techniques",
              "Using Profiling and Debugging Tools",
              "Code Optimization Best Practices",
              "Advanced Debugging Techniques",
            ],
          },
        ],
      },
      {
        icon: FaRegFolderOpen,
        title: "Soft Skills Class",
        subTopics: [
          {
            title: "Career Planning",
            points: [
              "Building Personal Branding",
              "Networking and Industry Etiquette",
              "Coping with Stress and Burnout",
              "Continuous Learning and Upskilling",
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
              "Building Full-Scale Applications",
              "Testing and Debugging Final Projects",
              "Presenting Results and Outcomes",
            ],
          },
        ],
      },
      {
        icon: FaRegFolderOpen,
        title: "Portfolio Development",
        subTopics: [
          {
            title: "Creating an Impressive Portfolio",
            points: [
              "Highlighting Projects on GitHub",
              "Building a Personal Website",
              "Recording Project Demonstrations",
              "Writing Technical Blogs",
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
              "Preparing for Technical Interviews",
              "Mastering Negotiation Skills",
              "Adapting to Global Industry Trends",
              "Building a Vision for Long-Term Success",
            ],
          },
        ],
      },
    ],
  },
];
