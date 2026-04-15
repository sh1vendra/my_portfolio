export const projects = [
  {
    name: 'Sortify for Students',
    description:
      'AI-powered document organization and retrieval platform. Automatically categorizes academic files and enables semantic search through a RAG pipeline with an AI chat assistant.',
    tags: ['React', 'TypeScript', 'Vite', 'TailwindCSS', 'FastAPI', 'PostgreSQL', 'PGVector', 'Sentence Transformers'],
    github: 'https://github.com/sh1vendra/Sortify',
    screenshot: '/assets/projects/sortify.png',
    alt: 'Sortify application dashboard',
  },
  {
    name: 'TelcoGuard - Fraud Detection Platform',
    description:
      'Engineered fraud detection engine flagging suspicious porting requests across 3 vectors, cutting manual review by ~80%. Built telecom number management platform with role-based access, automated porting workflows, and audit logging. Implemented 15+ REST endpoints with JWT authentication, OpenAPI docs, dockerized and deployed to Render + Vercel.',
    tags: ['React', 'Node.js', 'MongoDB', 'JWT', 'Git'],
    github: 'https://github.com/sh1vendra/TelcoGuard',
    screenshot: '/assets/projects/TelcoGuard.png',
    alt: 'TelcoGuard fraud detection platform',
  },
  {
    name: 'The Grid - Arcade Tic-Tac-Toe',
    description:
      'Commercial-grade Tic-Tac-Toe with retro neon arcade aesthetic. Features 3 difficulty levels including an unbeatable Minimax AI, 8-bit sound effects via Web Audio API, and neon particle animations.',
    tags: ['React 19', 'Vite', 'Tailwind CSS', 'Minimax', 'Web Audio API', 'Canvas', 'Firebase'],
    github: 'https://github.com/sh1vendra/Tic_Tac_Toe',
    screenshot: '/assets/projects/tictactoe.png',
    alt: 'Arcade Tic-Tac-Toe game interface',
  },
  {
    name: 'Weather App',
    description:
      'Real-time weather application with 5-day forecast, geolocation detection, detailed metrics (humidity, wind, pressure, sunrise/sunset), and dynamic backgrounds matching current conditions.',
    tags: ['React 18', 'TypeScript', 'OpenWeatherMap API', 'CSS Animations', 'Vercel'],
    github: 'https://github.com/sh1vendra/Weather_App',
    screenshot: '/assets/projects/weather.png',
    alt: 'Weather App showing forecast',
  },
  {
    name: 'Space Invaders - Save the World',
    description:
      'Modern Java implementation of the classic Space Invaders arcade game with customizable graphics, dynamic music system, character/enemy selection, and progressive difficulty scaling.',
    tags: ['Java SE', 'Swing', 'AWT', 'Java Sound API'],
    github: 'https://github.com/sh1vendra/Space_Invaders',
    screenshot: '/assets/projects/spaceinvaders.png',
    alt: 'Space Invaders gameplay',
  },
  {
    name: 'Soma - Physique Analyzer',
    description:
      'Modern, interactive BMI Calculator with real-time computation, metric/imperial units, health scale visualization, healthy weight range estimates, and recent results tracking with a mini chart.',
    tags: ['React', 'TypeScript'],
    github: 'https://github.com/sh1vendra/BMI_Calculator',
    screenshot: '/assets/projects/bmi.png',
    alt: 'BMI Calculator application',
  },
]

export const skills = [
  {
    category: 'Languages',
    items: [
      { label: 'Python', icon: 'fab fa-python' },
      { label: 'JavaScript', icon: 'fab fa-js' },
      { label: 'TypeScript', icon: 'devicon-typescript-plain' },
      { label: 'Java', icon: 'fab fa-java' },
      { label: 'C++', icon: 'devicon-cplusplus-plain' },
      { label: 'SQL', icon: 'fas fa-database' },
    ],
  },
  {
    category: 'Frontend',
    items: [
      { label: 'React', icon: 'fab fa-react' },
      { label: 'HTML5', icon: 'fab fa-html5' },
      { label: 'CSS3', icon: 'fab fa-css3-alt' },
      { label: 'Tailwind CSS', icon: 'devicon-tailwindcss-original' },
      { label: 'Bootstrap', icon: 'fab fa-bootstrap' },
    ],
  },
  {
    category: 'Backend',
    items: [
      { label: 'Node.js', icon: 'fab fa-node-js' },
      { label: 'FastAPI', icon: 'devicon-fastapi-plain' },
      { label: 'Express.js', icon: 'devicon-express-original' },
    ],
  },
  {
    category: 'Databases',
    items: [
      { label: 'PostgreSQL', icon: 'devicon-postgresql-plain' },
      { label: 'MongoDB', icon: 'devicon-mongodb-plain' },
      { label: 'Supabase', icon: 'devicon-supabase-plain' },
    ],
  },
  {
    category: 'Tools & Platforms',
    items: [
      { label: 'Git', icon: 'fab fa-git-alt' },
      { label: 'GitHub', icon: 'fab fa-github' },
      { label: 'Linux', icon: 'fab fa-linux' },
      { label: 'VS Code', icon: 'devicon-vscode-plain' },
      { label: 'Docker', icon: 'fab fa-docker' },
      { label: 'Vite', icon: 'devicon-vitejs-plain' },
      { label: 'Firebase', icon: 'devicon-firebase-plain' },
      { label: 'Vercel', icon: 'devicon-vercel-original' },
      { label: 'AWS', icon: 'fab fa-aws' },
      { label: 'Claude AI', icon: 'fas fa-robot' },
    ],
  },
]

export const experience = [
  {
    role: 'AI Researcher',
    company: 'Texas State University',
    period: 'June 2025 – September 2025',
    bullets: [
      'Benchmarked 10+ LLMs (GPT-4, Claude, Llama, Gemini) using Python to automate prompt-based evaluations',
      'Built an evaluation pipeline using OpenAI and Anthropic APIs to test outputs against 8+ rubrics',
      'Developed a weighted scoring framework in Python and Pandas to rank AI models by department-specific use cases',
    ],
  },
  {
    role: 'Software Engineer Intern',
    company: 'Orgware Construct Software Development',
    period: 'June 2024 – August 2024',
    bullets: [
      'Engineered discount systems in Node.js/Express with validation logic for percentage-off, flat discounts, and expiry rules, integrating real-time discount previews on the React.js storefront, driving 20% subscription growth',
      'Architected RESTful APIs with Firebase Authentication, implementing Express middleware for JWT token verification, role-based access control, and input sanitization, securing endpoints serving 1000+ active users',
      'Wrote unit tests using Jest for coupon validation and API endpoints, achieving 80%+ code coverage across core modules',
    ],
  },
  {
    role: 'Software Developer Intern',
    company: 'Global Hub Education Network',
    period: 'May 2023 – August 2023',
    bullets: [
      'Developed 5+ reusable React components with responsive layouts and deployed across 3 production pages',
      'Built testimonial system connecting React to MySQL via REST APIs, enabling CRUD management for 500+ visitors',
      'Shipped 10+ pull requests via Git branching and code reviews, maintaining 0 merge conflicts across 3-month sprint cycle',
    ],
  },
]

export const hobbies = [
  { label: 'Fitness', emoji: '🏋️' },
  { label: 'Boxing', emoji: '🥊' },
  { label: 'Soccer', emoji: '⚽' },
  { label: 'Swimming', emoji: '🏊' },
  { label: 'Reading Books', emoji: '📚' },
]

export const about = {
  coursework: [
    'Data Structures & Algorithms in C++',
    'Object-Oriented Programming in Java',
    'Software Engineering in JavaScript',
    'Computing Systems Fundamentals',
    'Internet Software Development (MERN)',
    'Machine Learning (Python)',
  ],
  achievements: [
    "President's List Recognition",
    "Dean's List Recognition",
    'Texas State Achievement Scholarship',
    'Best Student Employee Award',
    'Computer Science Excellence Award',
  ],
  involvement: [
    'IEEE TXST',
    'ACM AI',
    'Alpha Lambda Delta Honor Society',
    'Bobcat Build Student Organization',
    'Google Developers Group',
    'Technical Interview Prep at TXST',
    'Honors College (Coordinator)',
  ],
}
