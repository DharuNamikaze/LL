import { PiCubeBold } from "react-icons/pi";
import { FaPython, FaBrain } from "react-icons/fa6";
import { PiMathOperationsBold } from "react-icons/pi";
import { FaRegFolderOpen } from "react-icons/fa";

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
    subtitle: "Foundations of AI and Problem-Solving",
    mainTopics: [
      {
        icon: FaPython,
        title: "Introduction to Programming (Python)",
        subTopics: [
          {
            title: "Basics of Python Programming",
            points: [
              "Syntax and Variables",
              "Control Structures: Loops and Conditionals",
              "Functions and Modular Programming",
              "Lists, Tuples, and Dictionaries",
            ],
          },
          {
            title: "Advanced Programming Concepts",
            points: [
              "File Handling in Python",
              "Introduction to Python Libraries (NumPy, Pandas, Matplotlib)",
              "Error Handling and Debugging",
              "Basic Object-Oriented Programming (OOP) Concepts",
            ],
          },
        ],
      },
    ],
  },
  {
    icon: PiCubeBold,
    title: "Semester 2",
    subtitle: "Building Computational Thinking",
    mainTopics: [
      {
        icon: FaPython,
        title: "Data Structures and Algorithms with Python",
        subTopics: [
          {
            title: "Core Data Structures",
            points: [
              "Arrays, Linked Lists, Stacks, Queues",
              "Searching and Sorting Algorithms",
              "Recursion and Dynamic Programming",
              "Trees and Graphs with Python",
            ],
          },
          {
            title: "Advanced Concepts",
            points: [
              "Hashing and Hash Tables",
              "Advanced Sorting Techniques (Merge Sort, Quick Sort)",
              "Applications of Graph Algorithms (DFS, BFS, Dijkstra's)",
              "Introduction to Big-O Notation and Complexity Analysis",
            ],
          },
        ],
      },
      {
        icon: PiMathOperationsBold,
        title: "Statistics for AI",
        subTopics: [
          {
            title: "Foundational Concepts",
            points: [
              "Descriptive and Inferential Statistics",
              "Data Distributions and Visualization",
              "Hypothesis Testing and Confidence Intervals",
              "Introduction to Bayesian Inference",
            ],
          },
          {
            title: "Advanced Applications",
            points: [
              "Sampling Techniques and Sampling Distributions",
              "Correlation and Regression Analysis",
              "Understanding Central Limit Theorem",
              "Chi-Square and t-Tests Applications",
            ],
          },
        ],
      },
      {
        icon: FaRegFolderOpen,
        title: "Soft Skills Class",
        subTopics: [
          {
            title: "Critical Thinking and Leadership",
            points: [
              "Critical Thinking and Decision Making",
              "Emotional Intelligence in the Workplace",
              "Building Leadership Skills",
              "Cross-Cultural Communication",
            ],
          },
          {
            title: "Professional Growth",
            points: [
              "Conflict Management Strategies",
              "Negotiation Skills and Techniques",
              "Building Trust in Teams",
              "Handling Feedback Positively",
            ],
          },
        ],
      },
    ],
  },
  {
    icon: PiCubeBold,
    title: "Semester 3",
    subtitle: "Introduction to AI Concepts",
    mainTopics: [
      {
        icon: FaBrain,
        title: "Introduction to Artificial Intelligence",
        subTopics: [
          {
            title: "AI Basics",
            points: [
              "What is AI? History and Applications",
              "AI vs Machine Learning vs Deep Learning",
              "Ethical Implications of AI",
              "Introduction to Search Algorithms (DFS, BFS)",
            ],
          },
          {
            title: "Advanced AI Topics",
            points: [
              "Constraint Satisfaction Problems",
              "Applications of AI in Real-World Scenarios",
              "AI Frameworks Overview (TensorFlow, PyTorch Basics)",
              "Fundamentals of Intelligent Agents",
            ],
          },
        ],
      },
      {
        icon: FaPython,
        title: "Programming Tools for AI",
        subTopics: [
          {
            title: "Python for AI",
            points: [
              "Python Advanced Techniques for AI",
              "Working with Jupyter Notebooks",
              "Version Control using Git and GitHub",
              "Data Manipulation with Pandas and NumPy",
            ],
          },
          {
            title: "Automation and APIs",
            points: [
              "Visualizing Data with Matplotlib and Seaborn",
              "Introduction to APIs and JSON Handling",
              "Working with Large Datasets",
              "Automating Tasks with Python Scripts",
            ],
          },
        ],
      },
      {
        icon: FaRegFolderOpen,
        title: "Soft Skills Class",
        subTopics: [
          {
            title: "Personal Development",
            points: [
              "Creative Thinking and Innovation",
              "Conflict Resolution and Negotiation",
              "Building a Growth Mindset",
              "Resume Building and Interview Preparation",
            ],
          },
          {
            title: "Professional Networking",
            points: [
              "Developing an Online Presence (LinkedIn, GitHub)",
              "Networking Effectively",
              "Building Effective Professional Relationships",
              "Understanding Team Dynamics",
            ],
          },
        ],
      },
    ],
  },
  {
    icon: FaBrain,
    title: "Semester 4",
    subtitle: "Machine Learning Mastery",
    mainTopics: [
      {
        icon: FaPython,
        title: "Machine Learning (ML)",
        subTopics: [
          {
            title: "Core ML Concepts",
            points: [
              "Supervised and Unsupervised Learning",
              "Linear and Logistic Regression",
              "Decision Trees and Random Forests",
              "Clustering (K-Means, Hierarchical Clustering)",
            ],
          },
          {
            title: "Advanced Techniques",
            points: [
              "Support Vector Machines (SVMs)",
              "Ensemble Learning Techniques (Bagging, Boosting)",
              "Overfitting and Regularization (L1, L2)",
              "Dimensionality Reduction (PCA)",
            ],
          },
        ],
      },
      {
        icon: FaPython,
        title: "Python for ML",
        subTopics: [
          {
            title: "Libraries and Tools",
            points: [
              "Introduction to Scikit-Learn",
              "Model Evaluation Metrics (Accuracy, Precision, Recall, F1 Score)",
              "Data Preprocessing and Feature Engineering",
              "Building and Evaluating ML Models",
            ],
          },
          {
            title: "Advanced Topics",
            points: [
              "Hyperparameter Tuning (Grid Search, Random Search)",
              "Cross-Validation Techniques",
              "Working with Real-World Datasets",
              "Automating Machine Learning with Pipelines",
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
              "Persuasive Communication Skills",
              "Team Leadership and Motivation",
              "Networking and Building Professional Relationships",
              "Managing Feedback and Criticism",
            ],
          },
          {
            title: "Public Speaking and Problem Solving",
            points: [
              "Advanced Public Speaking Techniques",
              "Designing Effective Presentations",
              "Understanding Workplace Politics",
              "Effective Problem Solving in Teams",
            ],
          },
        ],
      },
    ],
  },
  {
    icon: FaBrain,
    title: "Semester 5",
    subtitle: "Advanced AI Techniques",
    mainTopics: [
      {
        icon: FaBrain,
        title: "Deep Learning (DL)",
        subTopics: [
          {
            title: "Core Deep Learning Concepts",
            points: [
              "Neural Network Basics",
              "Convolutional Neural Networks (CNNs)",
              "Recurrent Neural Networks (RNNs) and LSTMs",
              "Applications of Deep Learning in AI",
            ],
          },
          {
            title: "Advanced Techniques",
            points: [
              "Transfer Learning and Pre-Trained Models",
              "GANs (Generative Adversarial Networks)",
              "Optimization Techniques for Neural Networks",
              "Understanding Activation Functions",
            ],
          },
        ],
      },
      {
        icon: FaBrain,
        title: "Natural Language Processing (NLP)",
        subTopics: [
          {
            title: "Core NLP Topics",
            points: [
              "Text Preprocessing (Tokenization, Stemming, Lemmatization)",
              "Sentiment Analysis and Text Classification",
              "Word Embeddings (Word2Vec, GloVe)",
              "Introduction to Transformers and BERT",
            ],
          },
          {
            title: "Advanced NLP Applications",
            points: [
              "Sequence-to-Sequence Models",
              "Chatbot Development Basics",
              "Topic Modeling (LDA, NMF)",
              "Applications of NLP in Real-World Problems",
            ],
          },
        ],
      },
      {
        icon: FaRegFolderOpen,
        title: "Soft Skills Class",
        subTopics: [
          {
            title: "Leadership and Resilience",
            points: [
              "Advanced Public Speaking and Storytelling",
              "Strategic Planning and Execution",
              "Building Personal Branding",
              "Coping with Stress and Burnout",
            ],
          },
          {
            title: "Empathy and Communication",
            points: [
              "Developing Emotional Resilience",
              "Effective Delegation Techniques",
              "Creating Impactful Elevator Pitches",
              "Practicing Empathy in Communication",
            ],
          },
        ],
      },
    ],
  },
  {
    icon: FaRegFolderOpen,
    title: "Semester 6",
    subtitle: "AI in Action",
    mainTopics: [
      {
        icon: FaBrain,
        title: "Capstone Projects",
        subTopics: [
          {
            title: "AI Project Planning",
            points: [
              "Define and Plan AI Projects",
              "Implementation of AI Solutions",
              "Presentation and Peer Review",
              "Real-World Case Studies",
            ],
          },
          {
            title: "AI Deployment and Publishing",
            points: [
              "Collaboration in AI Project Teams",
              "Publishing Research Papers",
              "Incorporating Feedback for Improvements",
              "End-to-End Deployment of AI Models",
            ],
          },
        ],
      },
      {
        icon: FaRegFolderOpen,
        title: "Portfolio Development",
        subTopics: [
          {
            title: "Building an AI Portfolio",
            points: [
              "Creating an Online Portfolio (GitHub, LinkedIn)",
              "Writing Technical Blogs and Documenting Projects",
              "Showcasing AI and ML Projects",
              "Building a Personal Website",
            ],
          },
          {
            title: "Engagement and Contribution",
            points: [
              "Publishing Open-Source Contributions",
              "Highlighting Soft Skills and Achievements",
              "Recording Video Demonstrations of Projects",
              "Engaging with Online Developer Communities",
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
              "Developing Entrepreneurial Mindset",
              "Industry Networking and Professional Etiquette",
              "Continuous Learning and Upskilling Strategies",
            ],
          },
          {
            title: "Advanced Career Development",
            points: [
              "Mastering Negotiation in Job Offers",
              "Understanding Global AI Market Trends",
              "Building a Vision for Your Career",
              "Exploring Opportunities Beyond the Classroom",
            ],
          },
        ],
      },
    ],
  },
];
