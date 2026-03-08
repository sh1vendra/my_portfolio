export const projects = [
  {
    name: 'Sortify',
    description:
      'AI-powered document organization and retrieval platform. Automatically categorizes academic files and enables semantic search through a RAG pipeline with an AI chat assistant.',
    tags: ['React', 'TypeScript', 'Vite', 'TailwindCSS', 'FastAPI', 'PostgreSQL', 'PGVector', 'Sentence Transformers'],
    github: 'https://github.com/sh1vendra/Sortify',
    screenshot: '/assets/projects/sortify.png',
    alt: 'Sortify application dashboard',
  },
  {
    name: 'Arcade Tic-Tac-Toe',
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
    name: 'Space Invaders',
    description:
      'Modern Java implementation of the classic Space Invaders arcade game with customizable graphics, dynamic music system, character/enemy selection, and progressive difficulty scaling.',
    tags: ['Java SE', 'Swing', 'AWT', 'Java Sound API'],
    github: 'https://github.com/sh1vendra/Space_Invaders',
    screenshot: '/assets/projects/spaceinvaders.png',
    alt: 'Space Invaders gameplay',
  },
  {
    name: 'BMI Calculator',
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
    ],
  },
]

export const experience = [
  {
    role: 'Computer Science Researcher',
    company: 'Texas State University',
    period: 'June 2024 – September 2024',
    bullets: [
      'Conducted a comparative analysis report on AI models through literature and hands-on testing, evaluating their strengths, limitations, and task-specific performance, resulting in optimal selection of models for 15 departments',
      'Presented the findings to the board of Vice-President for IT, delivering technical analysis in a simple understandable format, directly influencing 120+ employee members of the university',
    ],
  },
  {
    role: 'Software Engineer Intern',
    company: 'Orgware Construct Software Development',
    period: 'April 2023 – July 2023',
    bullets: [
      'Built promotional and discount system features using React.js and Node.js with Express, implementing pricing logic and UI components that contributed to a 20% increase in subscriptions',
      'Architected RESTful APIs to handle user authentication and data validation, integrating with Firebase Authentication services to deliver secure login/logout functionality supporting 1,000+ users',
      'Designed and managed MySQL databases with 5+ tables, writing optimized SQL queries to efficiently fetch user data and support promotional features',
    ],
  },
  {
    role: 'Software Engineer Intern',
    company: 'Global Hub Education Network',
    period: 'January 2023 – March 2023',
    bullets: [
      'Contributed to the development of web application features using React.js under senior developer mentorship',
      'Implemented a dynamic React component for the company testimonials section, adding 3 new reviews with responsive card layouts and hover animations',
      'Gained hands-on experience with the software development life cycle, contributing across design and testing phases',
    ],
  },
]

export const about = {
  coursework: [
    'Data Structures & Algorithms in C++',
    'Object-Oriented Programming in Java',
    'Software Engineering in JavaScript',
    'Computing Systems Fundamentals',
    'Internet Software Development (MERN)',
  ],
  achievements: [
    "President's List Recognition",
    "Dean's List Recognition",
    'Texas State Achievement Scholarship',
  ],
  involvement: [
    'IEEE TXST',
    'ACM AI',
    'Alpha Lambda Delta Honor Society',
    'Bobcat Build Student Organization',
    'Google Developers Group',
    'Technical Interview Prep at TXST',
  ],
}
