import { Project, Experience, Education, Certification, BlogPost, Skill } from './types';

export const PERSONAL_INFO = {
  name: 'Swati Gupta',
  title: 'Data Scientist & Machine Learning Engineer',
  email: 'swatibadrigupta@gmail.com',
  phone: '+44 7771084480',
  location: 'London, UK',
  bio: 'Transforming complex data into actionable insights with 4+ years of experience in machine learning, deep learning, and statistical analysis. Passionate about solving real-world problems through data-driven solutions.',
  linkedin: 'https://www.linkedin.com/in/swatibadrigupta/',
  github: 'https://github.com/SwatiBGupta1110',
  twitter: 'https://twitter.com/SwatiGu38644443',
  kaggle: 'https://www.kaggle.com/swatigupta11'
};

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Customer Churn Prediction',
    description: 'Developed a machine learning model to predict customer churn with 94% accuracy using ensemble methods. Implemented feature engineering and deployed via Flask API.',
    category: 'ml',
    technologies: ['Python', 'Random Forest', 'Flask', 'Scikit-learn'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
    githubUrl: 'https://github.com/swati-sharma/customer-churn',
    liveUrl: 'https://churn-prediction-demo.herokuapp.com',
    featured: true
  },
  {
    id: '2',
    title: 'Social Media Sentiment Analysis',
    description: 'Built a real-time sentiment analysis system for social media data using BERT and transformer models. Achieved 91% accuracy on multi-class sentiment classification.',
    category: 'nlp',
    technologies: ['BERT', 'PyTorch', 'Streamlit', 'Transformers'],
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995',
    githubUrl: 'https://github.com/swati-sharma/sentiment-analysis',
    liveUrl: 'https://sentiment-analyzer-app.streamlit.app',
    featured: true
  },
  {
    id: '3',
    title: 'Medical Image Classification',
    description: 'Developed a deep learning model for medical image classification using CNN and transfer learning. Achieved 96% accuracy in detecting diseases from X-ray images.',
    category: 'cv',
    technologies: ['CNN', 'TensorFlow', 'ResNet', 'OpenCV'],
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485',
    githubUrl: 'https://github.com/swati-sharma/medical-image-classification',
    featured: true
  },
  {
    id: '4',
    title: 'Sales Forecasting Dashboard',
    description: 'Created an interactive dashboard for sales forecasting using time series analysis and ARIMA models. Improved forecast accuracy by 85% compared to previous methods.',
    category: 'analytics',
    technologies: ['ARIMA', 'Tableau', 'Time Series', 'Python'],
    image: 'https://images.unsplash.com/photo-1590479773265-7464e5d48118',
    githubUrl: 'https://github.com/swati-sharma/sales-forecasting',
    featured: true
  },
  {
    id: '5',
    title: 'Credit Card Fraud Detection',
    description: 'Implemented an anomaly detection system for credit card fraud using isolation forest and neural networks. Reduced false positives by 60% while maintaining 98% detection rate.',
    category: 'ml',
    technologies: ['Isolation Forest', 'Neural Networks', 'SMOTE', 'Python'],
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3',
    githubUrl: 'https://github.com/swati-sharma/fraud-detection',
    featured: false
  },
  {
    id: '6',
    title: 'E-commerce Recommendation System',
    description: 'Built a hybrid recommendation system combining collaborative and content-based filtering. Increased user engagement by 45% and sales conversion by 32%.',
    category: 'ml',
    technologies: ['Collaborative Filtering', 'Matrix Factorization', 'Apache Spark'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
    githubUrl: 'https://github.com/swati-sharma/recommendation-system',
    featured: false
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: '1',
    title: 'Senior Data Scientist',
    company: 'TechCorp Solutions',
    location: 'San Francisco, CA',
    startDate: '2022',
    endDate: 'Present',
    description: 'Led a team of 5 data scientists in developing ML models for customer analytics and business intelligence. Implemented end-to-end ML pipelines resulting in $2M annual cost savings.',
    technologies: ['Team Leadership', 'MLOps', 'AWS', 'Python']
  },
  {
    id: '2',
    title: 'Data Scientist',
    company: 'DataTech Analytics',
    location: 'London, UK',
    startDate: '2020',
    endDate: '2022',
    description: 'Developed predictive models for retail and e-commerce clients. Built recommendation systems and customer segmentation models that improved client revenues by an average of 25%.',
    technologies: ['Python', 'Recommendation Systems', 'A/B Testing', 'Machine Learning']
  },
  {
    id: '3',
    title: 'Junior Data Analyst',
    company: 'StartupXYZ',
    location: 'London, UK',
    startDate: '2019',
    endDate: '2020',
    description: 'Started my data science journey by analyzing user behavior data and creating dashboards. Developed automated reporting systems and performed statistical analysis for product teams.',
    technologies: ['SQL', 'Tableau', 'Statistics', 'Data Visualization']
  }
];

export const EDUCATION: Education[] = [
  {
    id: '1',
    degree: 'Master of Science in Data Science',
    institution: 'Stanford University',
    location: 'Stanford, CA',
    startDate: '2017',
    endDate: '2019',
    gpa: '3.9/4.0',
    description: 'Specialized in Machine Learning, Statistical Modeling, and Big Data Analytics. Thesis: "Deep Learning Applications in Healthcare Analytics"'
  },
  {
    id: '2',
    degree: 'Bachelor of Science in Computer Science',
    institution: 'University of California, Berkeley',
    location: 'Berkeley, CA',
    startDate: '2013',
    endDate: '2017',
    gpa: '3.8/4.0',
    description: 'Focused on Algorithms, Data Structures, and Database Systems. Minor in Mathematics and Statistics.'
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: '1',
    name: 'AWS Certified Machine Learning - Specialty',
    issuer: 'Amazon Web Services',
    date: '2023',
    credentialId: 'AWS-ML-2023-001'
  },
  {
    id: '2',
    name: 'Google Cloud Professional ML Engineer',
    issuer: 'Google Cloud',
    date: '2022',
    credentialId: 'GCP-MLE-2022-001'
  },
  {
    id: '3',
    name: 'Deep Learning Specialization',
    issuer: 'deeplearning.ai',
    date: '2021',
    credentialId: 'DL-SPEC-2021-001'
  },
  {
    id: '4',
    name: 'Tableau Desktop Specialist',
    issuer: 'Tableau',
    date: '2021',
    credentialId: 'TDS-2021-001'
  },
  {
    id: '5',
    name: 'TensorFlow Developer Certificate',
    issuer: 'TensorFlow',
    date: '2020',
    credentialId: 'TF-DEV-2020-001'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'The Future of AutoML in Enterprise',
    excerpt: 'Exploring how automated machine learning is transforming enterprise data science workflows and democratizing AI across organizations.',
    date: 'December 15, 2023',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31',
    readTime: '8 min read',
    tags: ['AutoML', 'Enterprise AI', 'Machine Learning'],
    url: '/blog/future-of-automl'
  },
  {
    id: '2',
    title: 'Ethical AI: Building Responsible ML Models',
    excerpt: 'A comprehensive guide to implementing ethical considerations in machine learning projects and ensuring fair and unbiased AI systems.',
    date: 'November 28, 2023',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31',
    readTime: '12 min read',
    tags: ['Ethics', 'AI Bias', 'Responsible AI'],
    url: '/blog/ethical-ai'
  },
  {
    id: '3',
    title: 'Real-time Analytics at Scale',
    excerpt: 'Lessons learned from building and deploying real-time analytics systems that process millions of events per second.',
    date: 'November 10, 2023',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
    readTime: '10 min read',
    tags: ['Real-time Analytics', 'Big Data', 'Streaming'],
    url: '/blog/realtime-analytics'
  }
];

export const SKILLS: Skill[] = [
  // Technical Skills
  { name: 'Python', level: 95, category: 'technical' },
  { name: 'Machine Learning', level: 92, category: 'technical' },
  { name: 'Deep Learning', level: 88, category: 'technical' },
  { name: 'SQL', level: 90, category: 'technical' },
  { name: 'R', level: 85, category: 'technical' },
  { name: 'Statistics', level: 90, category: 'technical' },
  
  // Tools & Frameworks
  { name: 'TensorFlow', level: 85, category: 'tools' },
  { name: 'PyTorch', level: 82, category: 'tools' },
  { name: 'Scikit-learn', level: 95, category: 'tools' },
  { name: 'Pandas', level: 95, category: 'tools' },
  { name: 'NumPy', level: 95, category: 'tools' },
  { name: 'Tableau', level: 88, category: 'tools' },
  { name: 'AWS', level: 80, category: 'tools' },
  { name: 'Docker', level: 75, category: 'tools' }
];

export const STATS = {
  experience: '4+',
  projects: '50+',
  certifications: '15+',
  publications: '8'
};
