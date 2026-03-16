export const personalInfo = {
  name: 'Krithik US',
  title: 'MERN Stack & Backend Developer',
  email: 'krithikus2004@gmail.com',
  phone: '+91 8618570153',
  location: 'Bengaluru, India',
  linkedin: 'https://www.linkedin.com/in/krithik-u-s-a545a4326/',   // update with real URL
  github: 'https://github.com/krithikus',           // update with real URL
  summary:
    "Backend-focused MERN Developer with hands-on experience designing and deploying secure, scalable REST APIs and full-stack applications. Experienced in MongoDB query optimization, role-based authentication, and end-to-end deployment workflows. Passionate about backend architecture, performance optimization, and building reliable web services.",
}

export const skills = [
  {
    category: "Backend",
    items: [
      { name: "Node.js", level: 80 },
      { name: "Express.js", level: 77 },
      { name: "REST API Design", level: 85 },
      { name: "JWT Authentication", level: 79 },
      { name: "Middleware Architecture", level: 83 },
    ],
  },

  {
    category: "Frontend",
    items: [
      { name: "React.js", level: 76 },
      { name: "JavaScript (ES6+)", level: 85 },
      { name: "HTML5", level: 90 },
      { name: "Tailwind CSS", level: 75 },
      { name: "Bootstrap 5", level: 70 },
    ],
  },

  {
    category: "Database & Authentication",
    items: [
      { name: "MongoDB (Mongoose)", level: 85 },
      { name: "Firebase Authentication", level: 72 },
    ],
  },

  {
    category: "Developer Tools",
    items: [
      { name: "Git / GitHub", level: 88 },
      { name: "Postman", level: 85 },
      { name: "Insomnia", level: 82 },
      { name: "REST API Documentation", level: 80 },
    ],
  },

  {
    category: "Deployment",
    items: [
      { name: "Render", level: 78 },
      { name: "Cloudinary", level: 72 },
      { name: "CI/CD Basics", level: 70 },
    ],
  },

  {
    category: "Python & ML",
    items: [
      { name: "Python", level: 78 },
      { name: "Flask", level: 75 },
      { name: "scikit-learn", level: 70 },
      { name: "ML Model Deployment", level: 72 },
      { name: "Chart.js", level: 76 },
    ],
  },
];

export const projects = [
  {
    id: '01',
    title: 'Admin-Managed Blogging Platform',
    short: 'Full-stack multi-user blog with role-based access control and multi-auth support.',
    description:
      'A responsive multi-user blogging platform with role-based admin control and multi-authentication support including Firebase Auth, Google OAuth, and custom JWT-based login. Designed and implemented REST APIs using Node.js & Express, integrated with MongoDB for scalable data storage. Added CRUD operations, pagination, and search functionality. Deployed on Render for stable backend connectivity.',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Firebase', 'JWT', 'Render'],
    liveUrl: 'https://a2d-blog.onrender.com/',   
    githubUrl: '"https://github.com/KRITHIKus/mern-blog', 
    highlights: [
      'Role-based admin control panel',
      'Firebase Auth + Google OAuth + JWT',
      'Pagination & full-text search',
      'Deployed on Render ',
    ],
  },
  {
    id: '02',
    title: 'Farming Web Service Using AI',
    short: 'AI-powered farming assistant with ML-based crop recommendation engine.',
    description:
      'An AI-powered farming assistant with React frontend and Flask-based ML backend. Trained and deployed scikit-learn models for crop recommendation based on soil properties and weather data. Integrated OpenWeatherMap API for real-time forecasts to assist farmers in planning irrigation and harvesting. Built interactive market price trend dashboards using Chart.js.',
    tags: ['Flask', 'React.js', 'Python', 'scikit-learn', 'Chart.js', 'OpenWeatherMap API'],
    liveUrl: 'https://farmer-ai-x2hw.onrender.com/',   
    githubUrl: 'https://github.com/KRITHIKus/project24', 
    highlights: [
      'ML crop recommendation engine',
      'Real-time weather via OpenWeatherMap',
      'Interactive price trend dashboards',
      'REST endpoints for ML predictions',
    ],
  },
  {
    id: '03',
    title: 'Bulls Eye',
    short: 'Comprehensive website security scanner with real-time threat detection.',
    description:
      'A comprehensive website security scanner tool that analyzes vulnerabilities and provides detailed security reports. Features real-time scanning and threat detection capabilities powered by Python automation and Selenium. Integrates multiple security APIs to surface actionable insights for developers and security analysts.',
    tags: ['Python', 'Security Tools', 'React', 'API Integration', 'Selenium'],
    liveUrl: 'https://bullseye-n9jz.onrender.com/',   
    githubUrl: 'https://github.com/KRITHIKus/safelink', 
    highlights: [
      'Real-time vulnerability scanning',
      'Detailed security threat reports',
      'Selenium-powered automation',
      'Multi-API security integration',
    ],
  },
]

export const experience = [
  {
    role: 'AI & Python Intern',
    company: 'Hope Foundation',
    location: 'Bengaluru',
    period: 'Jan 2025 – Feb 2025',
    points: [
      'Worked on an AI-powered Farming Web Service, leveraging Machine Learning and Python for agricultural insights.',
      'Developed an ML-based Crop Recommendation System based on soil properties, weather conditions, and location.',
      'Integrated OpenWeatherMap API for real-time weather forecasts to assist farmers in planning irrigation and harvesting.',
      'Designed an interactive market price trends dashboard using Flask, React.js, and Chart.js.',
      'Gained practical experience in AI model deployment, API integration, and frontend-backend communication.',
    ],
    cert: 'https://drive.google.com/file/d/1PAL9Dn1Fe0RoL8yv3-cYcq7Pfq27BJqf/view', 
  },
]

export const education = [
  {
    degree: 'Bachelor of Computer Application',
    institution: 'East Point Group of Institutions',
    period: '2022 – 2025',
    location: 'Bengaluru',
  },
]


export const typingPhrases = [
  "JavaScript Developer",
  "Backend-Focused MERN Engineer",
  "Node.js & Express",
  "REST API Development",
  "MongoDB Data Modeling",
  "Backend Systems",
  "Full-Stack Applications"
]


