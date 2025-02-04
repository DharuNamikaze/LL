import { PiCubeBold, PiMathOperationsBold } from "react-icons/pi";
import { FaPython, FaUsers, FaCode, FaGitAlt } from "react-icons/fa"; // Updated imports

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
    title: "Module 1",
    subtitle: "Getting Started with Git",
    mainTopics: [
      {
        icon: FaCode,
        title: "Introduction to Git",
        subTopics: [
          {
            title: "Basics of Git",
            points: [
              "What is Git?",
              "Installing Git",
              "Configuring Git",
              "Git Command Line Basics",
            ],
          },
          {
            title: "Understanding Repositories",
            points: [
              "Initializing Repositories",
              "Cloning Repositories",
              "Navigating the Repository Structure",
            ],
          },
        ],
      },
    ],
  },
  {
    icon: FaGitAlt, // Replacing PiMerge
    title: "Module 2",
    subtitle: "Creating and Managing Snapshots",
    mainTopics: [
      {
        icon: FaGitAlt, // Replacing PiMerge
        title: "Version Control Basics",
        subTopics: [
          {
            title: "Committing Changes",
            points: [
              "Staging Files",
              "Writing Good Commit Messages",
              "Undoing Commits",
            ],
          },
          {
            title: "Managing Snapshots",
            points: [
              "Viewing Commit History",
              "Tagging Commits",
              "Using the Git Log",
            ],
          },
        ],
      },
    ],
  },
  {
    icon: FaGitAlt, // Replacing FaBranch
    title: "Module 3",
    subtitle: "Branching and Merging",
    mainTopics: [
      {
        icon: FaGitAlt, // Replacing FaBranch
        title: "Working with Branches",
        subTopics: [
          {
            title: "Creating and Switching Branches",
            points: [
              "Understanding Branches",
              "Branch Naming Conventions",
              "Switching Between Branches",
            ],
          },
          {
            title: "Merging and Rebasing",
            points: [
              "Fast-forward Merges",
              "Three-way Merges",
              "Resolving Merge Conflicts",
              "Rebasing for a Clean Commit History",
            ],
          },
        ],
      },
    ],
  },
  {
    icon: FaUsers,
    title: "Module 4",
    subtitle: "Collaboration with Git and GitHub",
    mainTopics: [
      {
        icon: FaUsers,
        title: "Team Collaboration",
        subTopics: [
          {
            title: "GitHub Basics",
            points: [
              "Creating a Repository on GitHub",
              "Forking and Cloning Repositories",
              "Pull Requests and Code Reviews",
            ],
          },
          {
            title: "Best Practices",
            points: [
              "Managing Issues and Labels",
              "Using Branch Protection Rules",
              "Open Source Contributions",
            ],
          },
        ],
      },
    ],
  },
];
