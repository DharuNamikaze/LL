import {
  FaBrain,
  FaDatabase,
  FaPython,
  FaServer,
  FaRegFolderOpen,
  FaRobot,
  FaChartLine,
  FaDocker, // Use this instead of SiDocker
} from "react-icons/fa6";

import {
  SiTensorflow,
  SiScikitlearn,
  SiPytorch,
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
    icon: FaBrain,
    title: "Semester 1",
    subtitle: "Foundations of Machine Learning",
    mainTopics: [
      {
        icon: FaPython,
        title: "Introduction to Python for ML",
        subTopics: [
          {
            title: "Python Basics",
            points: [
              "Syntax, Variables, and Data Types",
              "Control Structures: Loops and Conditionals",
              "Functions and Modular Programming",
              "Working with Lists, Tuples, and Dictionaries",
            ],
          },
          {
            title: "Python Libraries for ML",
            points: [
              "NumPy for Numerical Computing",
              "Pandas for Data Manipulation",
              "Matplotlib and Seaborn for Data Visualization",
              "Introduction to Jupyter Notebooks",
            ],
          },
        ],
      },
      {
        icon: FaChartLine,
        title: "Mathematics for Machine Learning",
        subTopics: [
          {
            title: "Linear Algebra and Probability",
            points: [
              "Vectors, Matrices, and Matrix Operations",
              "Eigenvalues and Eigenvectors",
              "Probability Distributions (Normal, Binomial, etc.)",
              "Random Variables and Expectations",
            ],
          },
          {
            title: "Calculus and Optimization",
            points: [
              "Derivatives and Gradients",
              "Partial Derivatives and Chain Rule",
              "Optimization Techniques",
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
    subtitle: "Core Machine Learning Concepts",
    mainTopics: [
      {
        icon: SiScikitlearn,
        title: "Supervised Learning",
        subTopics: [
          {
            title: "Regression Algorithms",
            points: [
              "Linear Regression and Logistic Regression",
              "Polynomial Regression",
              "Evaluation Metrics (MAE, RMSE, R^2)",
              "Practical Implementation with Scikit-Learn",
            ],
          },
          {
            title: "Classification Algorithms",
            points: [
              "K-Nearest Neighbors (KNN)",
              "Decision Trees and Random Forests",
              "Support Vector Machines (SVMs)",
              "Model Evaluation Metrics (Precision, Recall, F1-Score)",
            ],
          },
        ],
      },
      {
        icon: SiScikitlearn,
        title: "Unsupervised Learning",
        subTopics: [
          {
            title: "Clustering Techniques",
            points: [
              "K-Means Clustering",
              "Hierarchical Clustering",
              "DBSCAN Algorithm",
              "Evaluation Metrics for Clustering",
            ],
          },
          {
            title: "Dimensionality Reduction",
            points: [
              "Principal Component Analysis (PCA)",
              "t-SNE for Data Visualization",
              "Feature Extraction Techniques",
              "Applications of Dimensionality Reduction",
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
    icon: SiTensorflow,
    title: "Semester 3",
    subtitle: "Deep Learning Fundamentals",
    mainTopics: [
      {
        icon: SiTensorflow,
        title: "Neural Networks",
        subTopics: [
          {
            title: "Understanding Neural Networks",
            points: [
              "What are Neural Networks?",
              "Activation Functions (ReLU, Sigmoid, Tanh)",
              "Forward Propagation and Backpropagation",
              "Training Neural Networks",
            ],
          },
          {
            title: "Deep Learning Frameworks",
            points: [
              "Introduction to TensorFlow",
              "Building Neural Networks with Keras",
              "Model Evaluation and Hyperparameter Tuning",
              "Training on GPU vs CPU",
            ],
          },
        ],
      },
      {
        icon: SiNumpy,
        title: "Optimization and Regularization",
        subTopics: [
          {
            title: "Improving Model Performance",
            points: [
              "Batch Normalization",
              "Dropout and Overfitting Prevention",
              "Learning Rate Schedulers",
              "Early Stopping Techniques",
            ],
          },
          {
            title: "Optimization Algorithms",
            points: [
              "Gradient Descent Variants (SGD, Adam, RMSProp)",
              "Loss Functions (Cross-Entropy, Mean Squared Error)",
              "Understanding Overfitting and Underfitting",
              "Best Practices for Model Optimization",
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
    icon: SiPytorch,
    title: "Semester 4",
    subtitle: "Advanced Deep Learning and NLP",
    mainTopics: [
      {
        icon: SiPytorch,
        title: "Advanced Neural Networks",
        subTopics: [
          {
            title: "Convolutional Neural Networks (CNNs)",
            points: [
              "Understanding Convolutions and Pooling",
              "Applications in Image Recognition",
              "Popular Architectures (AlexNet, ResNet, VGG)",
              "Implementing CNNs with PyTorch",
            ],
          },
          {
            title: "Recurrent Neural Networks (RNNs)",
            points: [
              "Sequence Modeling Basics",
              "Long Short-Term Memory (LSTMs)",
              "Applications in Time Series Analysis",
              "Implementing RNNs with PyTorch",
            ],
          },
        ],
      },
      {
        icon: FaRobot,
        title: "Natural Language Processing (NLP)",
        subTopics: [
          {
            title: "Core NLP Concepts",
            points: [
              "Text Preprocessing (Tokenization, Lemmatization)",
              "Bag-of-Words and TF-IDF",
              "Sentiment Analysis",
              "Named Entity Recognition (NER)",
            ],
          },
          {
            title: "Advanced NLP",
            points: [
              "Word Embeddings (Word2Vec, GloVe)",
              "Introduction to Transformers (BERT, GPT)",
              "Text Summarization and Translation",
              "Building Chatbots with NLP Models",
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
    icon: FaServer,
    title: "Semester 5",
    subtitle: "Machine Learning at Scale",
    mainTopics: [
      {
        icon: FaServer,
        title: "Big Data and Cloud Computing",
        subTopics: [
          {
            title: "Handling Big Data",
            points: [
              "Introduction to Hadoop and Spark",
              "MapReduce Basics",
              "Distributed Computing Principles",
              "Integrating ML with Big Data Tools",
            ],
          },
          {
            title: "Cloud Platforms for ML",
            points: [
              "AWS Machine Learning Services",
              "Google Cloud AI Platform",
              "Azure Machine Learning Studio",
              "Deploying ML Models on the Cloud",
            ],
          },
        ],
      },
      {
        icon: FaDocker,
        title: "Model Deployment and CI/CD",
        subTopics: [
          {
            title: "Deploying ML Models",
            points: [
              "Creating REST APIs for ML Models",
              "Deploying Models using Flask/FastAPI",
              "Dockerizing Machine Learning Applications",
              "Continuous Integration/Continuous Deployment (CI/CD) Pipelines",
            ],
          },
          {
            title: "Monitoring and Maintenance",
            points: [
              "Model Performance Monitoring",
              "A/B Testing and Experimentation",
              "Handling Model Drift",
              "Automating Retraining Pipelines",
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
              "Building Real-World ML Applications",
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
              "Highlighting ML Projects on GitHub",
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
              "Global Trends in Machine Learning",
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
              "Adapting to Emerging AI Trends",
              "Building Long-Term Career Vision",
            ],
          },
        ],
      },
    ],
  },
];
