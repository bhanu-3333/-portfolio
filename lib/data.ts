import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'bhanu339@gmail.com',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Udaya Bhanu, I am reaching out to you because...',

    // TODO: Add your portfolio URL if you have one
    oldPortfolio: '#',
    // TODO: Add your professional profile URL (LinkedIn recommended)
    upworkProfile: 'https://www.linkedin.com/in/udaya-bhanu-s-30039726/',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/bhanu-3333' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/udaya-bhanu-s-30039726/' },
    // TODO: Add your other social profiles if needed
];

export const MY_STACK = {
    frontend: [
        {
            name: 'HTML',
            icon: '/logo/html.png', // TODO: Add HTML icon
        },
        {
            name: 'CSS',
            icon: '/logo/css.png', // TODO: Add CSS icon
        },
        {
            name: 'JavaScript',
            icon: '/logo/js.png',
        },
        {
            name: 'React.js',
            icon: '/logo/react.png',
        },
        {
            name: 'Next.js',
            icon: '/logo/next.png',
        },
        {
            name: 'React Native',
            icon: '/logo/react.png', // Using React icon for React Native
        },
        {
            name: 'Vite',
            icon: '/logo/vite.png', // TODO: Add Vite icon
        },
        {
            name: 'GSAP',
            icon: '/logo/gsap.png',
        },
        {
            name: 'Leaflet',
            icon: '/logo/leaflet.png', // TODO: Add Leaflet icon
        },
    ],
    backend: [
        {
            name: 'Node.js',
            icon: '/logo/node.png',
        },
        {
            name: 'Express.js',
            icon: '/logo/express.png',
        },
        {
            name: 'MongoDB',
            icon: '/logo/mongodb.svg',
        },
        {
            name: 'REST APIs',
            icon: '/logo/api.png', // TODO: Add API icon
        },
    ],
    'AI & Tools': [
        {
            name: 'LangChain',
            icon: '/logo/langchain.png', // TODO: Add LangChain icon
        },
        {
            name: 'RAG',
            icon: '/logo/ai.png', // TODO: Add RAG icon
        },
        {
            name: 'Prompt Engineering',
            icon: '/logo/ai.png', // TODO: Add AI icon
        },
        {
            name: 'Hugging Face',
            icon: '/logo/huggingface.png', // TODO: Add Hugging Face icon
        },
        {
            name: 'LLM Integration',
            icon: '/logo/ai.png', // TODO: Add LLM icon
        },
        {
            name: 'Vector Databases',
            icon: '/logo/database.png', // TODO: Add Vector DB icon
        },
    ],
    'Tools & Platforms': [
        {
            name: 'Git',
            icon: '/logo/git.png',
        },
        {
            name: 'GitHub',
            icon: '/logo/github.png', // TODO: Add GitHub icon
        },
        {
            name: 'VS Code',
            icon: '/logo/vscode.png', // TODO: Add VS Code icon
        },
        {
            name: 'Postman',
            icon: '/logo/postman.png', // TODO: Add Postman icon
        },
        {
            name: 'Canva',
            icon: '/logo/canva.png', // TODO: Add Canva icon
        },
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'MedIntel AI - Offline Medical Document Intelligence System',
        slug: 'medintel-ai',
        // TODO: Add live URL if deployed
        liveUrl: '#',
        // TODO: Add source code URL
        sourceCode: 'https://github.com/bhanu-3333',
        year: 2024,
        description: `
      An AI-powered medical document analysis system using cutting-edge technologies for offline document querying and intelligent information retrieval. <br/> <br/>
      
      Key Features:<br/>
      <ul>
        <li>🤖 RAG (Retrieval-Augmented Generation) for intelligent document analysis</li>
        <li>🔗 LangChain integration for seamless AI workflow</li>
        <li>😊 Hugging Face models for document processing</li>
        <li>💾 Vector Databases for efficient information retrieval</li>
        <li>📄 Offline document querying capabilities</li>
        <li>🏥 Medical document analysis and insights</li>
      </ul><br/>
      
      Technical Highlights:
      <ul>
        <li>Implemented RAG architecture for context-aware responses</li>
        <li>Integrated multiple AI models for document understanding</li>
        <li>Built efficient vector database system for fast retrieval</li>
        <li>Developed offline-first approach for data privacy</li>
      </ul>
      `,
        role: `
      AI Full-Stack Developer <br/>
      Led the complete development:
      <ul>
        <li>🧠 Implemented RAG pipeline with LangChain</li>
        <li>🔧 Integrated Hugging Face models for NLP tasks</li>
        <li>💿 Designed and implemented Vector Database architecture</li>
        <li>🎨 Built user-friendly interface for document interaction</li>
        <li>⚡ Optimized performance for offline document processing</li>
      </ul>
      `,
        techStack: [
            'React.js',
            'Node.js',
            'LangChain',
            'RAG',
            'Hugging Face',
            'Vector Databases',
            'AI/ML',
        ],
        thumbnail: '/projects/thumbnail/medintel.jpg', // TODO: Add project thumbnail
        longThumbnail: '/projects/long/medintel.jpg', // TODO: Add long thumbnail
        images: [
            '/projects/images/medintel-1.jpg', // TODO: Add project images
            '/projects/images/medintel-2.jpg',
        ],
    },
    {
        title: 'College Fee Management System',
        slug: 'college-fee-management',
        techStack: [
            'React.js',
            'Node.js',
            'Express.js',
            'MongoDB',
            'Modern Web Technologies',
        ],
        thumbnail: '/projects/thumbnail/fee-management.jpg', // TODO: Add thumbnail
        longThumbnail: '/projects/long/fee-management.jpg',
        images: [
            '/projects/images/fee-management-1.jpg', // TODO: Add images
            '/projects/images/fee-management-2.jpg',
        ],
        // TODO: Add URLs if available
        liveUrl: '#',
        sourceCode: 'https://github.com/bhanu-3333',
        year: 2024,
        description: `A comprehensive full-stack platform for managing student records, fee tracking, payment management, and administrative reporting using modern web technologies.<br/><br/>
        
        Key Features:<br/>
        <ul>
          <li>👨‍🎓 Student record management system</li>
          <li>💰 Fee tracking and payment processing</li>
          <li>📊 Administrative reporting dashboard</li>
          <li>🔐 Secure authentication and authorization</li>
          <li>📱 Responsive design for all devices</li>
          <li>📈 Real-time data updates</li>
        </ul>`,
        role: `Full-Stack Developer - Built complete system architecture including frontend UI, backend APIs, database design, and deployment.`,
    },
    {
        title: 'AI Disease Predictor',
        slug: 'ai-disease-predictor',
        techStack: [
            'Machine Learning',
            'AI',
            'Python',
            'React.js',
            'Data Analysis',
        ],
        thumbnail: '/projects/thumbnail/disease-predictor.jpg', // TODO: Add thumbnail
        longThumbnail: '/projects/long/disease-predictor.jpg',
        images: [
            '/projects/images/disease-predictor-1.jpg', // TODO: Add images
        ],
        liveUrl: '#',
        sourceCode: 'https://github.com/bhanu-3333',
        year: 2024,
        description: `An intelligent disease prediction system using Machine Learning and AI models to analyze user symptoms and generate data-driven health predictions.<br/><br/>
        
        Key Features:<br/>
        <ul>
          <li>🤖 ML-based symptom analysis</li>
          <li>💊 Disease prediction with confidence scores</li>
          <li>📊 Data-driven health insights</li>
          <li>🎯 Accurate prediction algorithms</li>
          <li>👤 User-friendly interface</li>
        </ul>`,
        role: `AI Developer - Developed machine learning models, trained on medical datasets, and built the prediction engine with frontend interface.`,
    },
    {
        title: 'Team Collaboration App',
        slug: 'team-collaboration',
        techStack: [
            'React.js',
            'Node.js',
            'Real-time Communication',
            'WebSockets',
        ],
        thumbnail: '/projects/thumbnail/team-collab.jpg', // TODO: Add thumbnail
        longThumbnail: '/projects/long/team-collab.jpg',
        images: ['/projects/images/team-collab-1.jpg'], // TODO: Add images
        liveUrl: '#',
        sourceCode: 'https://github.com/bhanu-3333',
        year: 2024,
        description: `A full-stack team collaboration platform enabling real-time communication, task management, project tracking, and team coordination through an intuitive user interface.<br/><br/>
        
        Key Features:<br/>
        <ul>
          <li>💬 Real-time messaging and communication</li>
          <li>✅ Task management and assignment</li>
          <li>📋 Project tracking dashboard</li>
          <li>👥 Team coordination tools</li>
          <li>🔔 Notifications and updates</li>
          <li>📱 Responsive design</li>
        </ul>`,
        role: `Full-Stack Developer - Architected and developed the complete collaboration platform with real-time features and user management.`,
    },
];

export const MY_EXPERIENCE = [
    {
        title: 'Frontend Developer Intern',
        company: 'Xtracui (Onsite, Stipend-Based)',
        duration: 'Dec 2025 - Jan 2026',
        description: 'Developed responsive and user-friendly frontend applications using React.js, JavaScript, HTML, and CSS. Collaborated with the development team to deliver features, enhance UI/UX, and contribute to real-world product development.',
    },
    {
        title: 'React Native Developer Intern',
        company: 'Nirmaya',
        duration: 'Dec 2024 - Feb 2025',
        description: 'Built and enhanced mobile application features using React Native, focusing on performance and user experience. Worked closely with designers and developers to implement UI improvements, resolve issues, and deliver app functionalities.',
    },
];
