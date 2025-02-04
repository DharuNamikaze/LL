import {
  FaDatabase,
  FaPython,
  FaChartBar,
  FaBrain,
  FaRegFolderOpen,
  FaChartLine,
  FaServer,
} from "react-icons/fa6";

import {
  SiTensorflow,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
} from "react-icons/si";

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
    icon: FaChartBar,
    title: "Semester 1",
    subtitle: "Foundations of Data Science",
    mainTopics: [
      {
        icon: FaPython,
        title: "Introduction to Python for Data Science",
        subTopics: [
          {
            title: "Python Basics",
            points: [
              "Syntax, Variables, and Data Types",
              "Control Structures: Loops and Conditionals",
              "Functions and Modules",
              "Lists, Tuples, and Dictionaries",
            ],
          },
          {
            title: "Python Libraries for Data Science",
            points: [
              "Introduction to NumPy",
              "Working with Pandas DataFrames",
              "Data Visualization with Matplotlib and Seaborn",
              "Jupyter Notebooks for Data Analysis",
            ],
          },
        ],
      },
      {
        icon: FaChartLine,
        title: "Mathematics for Data Science",
        subTopics: [
          {
            title: "Linear Algebra and Probability",
            points: [
              "Vectors, Matrices, and Matrix Operations",
              "Probability Distributions",
              "Random Variables and Expectations",
              "Statistical Independence and Correlation",
            ],
          },
          {
            title: "Calculus and Optimization",
            points: [
              "Derivatives and Gradients",
              "Optimization Techniques",
              "Partial Derivatives",
              "Introduction to Gradient Descent",
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
              "Team Collaboration and Problem Solving",
              "Time Management and Productivity Skills",
              "Public Speaking and Presentation Skills",
            ],
          },
        ],
      },
    ],
  },
  {
    icon: SiScikitlearn,
    title: "Semester 2",
    subtitle: "Exploratory Data Analysis and Visualization",
    mainTopics: [
      {
        icon: SiPandas,
        title: "Data Analysis with Pandas",
        subTopics: [
          {
            title: "Data Cleaning and Preparation",
            points: [
              "Handling Missing Values",
              "Filtering and Sorting Data",
              "Data Transformation and Aggregation",
              "Time-Series Data Analysis",
            ],
          },
          {
            title: "Advanced Data Manipulation",
            points: [
              "Merging and Joining DataFrames",
              "Working with Multi-Index DataFrames",
              "Pivot Tables and Crosstabulations",
              "Efficient Data Handling with Pandas",
            ],
          },
        ],
      },
      {
        icon: FaChartLine,
        title: "Data Visualization",
        subTopics: [
          {
            title: "Basics of Data Visualization",
            points: [
              "Plotting with Matplotlib",
              "Creating Complex Visualizations with Seaborn",
              "Customizing Plots for Better Insights",
              "Creating Interactive Dashboards",
            ],
          },
          {
            title: "Best Practices in Visualization",
            points: [
              "Choosing the Right Charts",
              "Designing for Readability",
              "Avoiding Misleading Visualizations",
              "Storytelling with Data",
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
    icon: SiScikitlearn,
    title: "Semester 3",
    subtitle: "Statistical Modeling and Machine Learning",
    mainTopics: [
      {
        icon: SiScikitlearn,
        title: "Statistical Modeling",
        subTopics: [
          {
            title: "Core Statistical Concepts",
            points: [
              "Descriptive and Inferential Statistics",
              "Hypothesis Testing",
              "Confidence Intervals",
              "Correlation and Regression Analysis",
            ],
          },
          {
            title: "Advanced Statistical Methods",
            points: [
              "ANOVA and Chi-Square Tests",
              "Time Series Analysis",
              "Principal Component Analysis (PCA)",
              "Feature Selection Techniques",
            ],
          },
        ],
      },
      {
        icon: SiScikitlearn,
        title: "Introduction to Machine Learning",
        subTopics: [
          {
            title: "Supervised Learning",
            points: [
              "Linear Regression and Logistic Regression",
              "Decision Trees and Random Forests",
              "K-Nearest Neighbors (KNN)",
              "Model Evaluation Metrics",
            ],
          },
          {
            title: "Unsupervised Learning",
            points: [
              "Clustering Techniques (K-Means, Hierarchical Clustering)",
              "Dimensionality Reduction with PCA",
              "Anomaly Detection",
              "Applications of Unsupervised Learning",
            ],
          },
        ],
      },
      {
        icon: FaRegFolderOpen,
        title: "Soft Skills Class",
        subTopics: [
          {
            title: "Creative Problem Solving",
            points: [
              "Creative Thinking Techniques",
              "Conflict Resolution in Teams",
              "Building Confidence in Presentations",
              "Developing Leadership Skills",
            ],
          },
        ],
      },
    ],
  },
  {
    icon: SiTensorflow,
    title: "Semester 4",
    subtitle: "Advanced Machine Learning and Deep Learning",
    mainTopics: [
      {
        icon: SiTensorflow,
        title: "Advanced Machine Learning",
        subTopics: [
          {
            title: "Ensemble Methods",
            points: [
              "Boosting (XGBoost, AdaBoost)",
              "Bagging (Random Forests)",
              "Stacking and Blending",
              "Applications of Ensemble Learning",
            ],
          },
          {
            title: "Hyperparameter Tuning",
            points: [
              "Grid Search and Random Search",
              "Cross-Validation Techniques",
              "Bayesian Optimization",
              "Automating Tuning Processes",
            ],
          },
        ],
      },
      {
        icon: SiTensorflow,
        title: "Deep Learning Basics",
        subTopics: [
          {
            title: "Introduction to Neural Networks",
            points: [
              "Building Neural Networks with TensorFlow",
              "Understanding Activation Functions",
              "Forward and Backpropagation",
              "Training and Optimizing Neural Networks",
            ],
          },
          {
            title: "Convolutional Neural Networks (CNNs)",
            points: [
              "Image Processing Basics",
              "Building CNNs for Image Classification",
              "Popular Architectures (ResNet, AlexNet, VGG)",
              "Applications of CNNs",
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
    icon: FaDatabase,
    title: "Semester 5",
    subtitle: "Big Data and Scalable Data Science",
    mainTopics: [
      {
        icon: FaDatabase,
        title: "Big Data Tools",
        subTopics: [
          {
            title: "Hadoop Basics",
            points: [
              "Introduction to HDFS and MapReduce",
              "Data Processing with Hive",
              "Integration with Spark",
              "Applications of Big Data in Data Science",
            ],
          },
          {
            title: "Spark for Data Science",
            points: [
              "Introduction to PySpark",
              "Working with RDDs and DataFrames",
              "Streaming Data with Spark",
              "Optimizing Spark Applications",
            ],
          },
        ],
      },
      {
        icon: FaServer,
        title: "Model Deployment",
        subTopics: [
          {
            title: "Deploying Data Science Models",
            points: [
              "Creating APIs with Flask/FastAPI",
              "Dockerizing Data Science Applications",
              "Cloud Deployment (AWS, Azure, GCP)",
              "Monitoring and Retraining Models",
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
              "Building Personal Branding",
              "Coping with Stress and Burnout",
              "Networking and Industry Etiquette",
              "Developing Career Goals",
            ],
          },
        ],
      },
    ],
  },
  {
    icon: FaBrain,
    title: "Semester 6",
    subtitle: "Capstone Project and Portfolio Development",
    mainTopics: [
      {
        icon: FaBrain,
        title: "Capstone Project",
        subTopics: [
          {
            title: "Project Planning and Execution",
            points: [
              "Defining Objectives and Scope",
              "Building Real-World Data Science Applications",
              "Testing and Debugging Final Projects",
              "Presenting Results and Outcomes",
            ],
          },
          {
            title: "Team Collaboration",
            points: [
              "Version Control with Git and GitHub",
              "Code Reviews and Peer Feedback",
              "Collaborating in Teams",
              "Publishing Research Papers",
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
              "Highlighting Data Science Projects on GitHub",
              "Writing Technical Blogs and Documentation",
              "Building a Personal Website",
              "Recording Video Demonstrations of Projects",
            ],
          },
          {
            title: "Career Preparation",
            points: [
              "Preparing for Job Interviews",
              "Negotiation in Job Offers",
              "Global Trends in Data Science",
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
              "Developing Entrepreneurial Mindset",
              "Mastering Workplace Dynamics",
              "Adapting to Emerging Data Trends",
              "Building Long-Term Career Vision",
            ],
          },
        ],
      },
    ],
  },
];
