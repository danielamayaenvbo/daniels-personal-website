type Experience = {
  company: string
  role: string
  period: string
  location: string
  highlights: string[]
}

type Project = {
  name: string
  status: string
  summary: string
  technologies: string[]
  href: string
  linkLabel: string
}

export const profile = {
  name: 'Daniel Amayaenvbo',
  email: 'doa29@drexel.edu',
  github: 'https://github.com/danielamayaenvbo',
  linkedin: 'https://www.linkedin.com/in/amayaenvbo',
}

export const highlights = [
  { value: '3rd year', label: 'Software Engineering at Drexel' },
  { value: '89%', label: 'mAP on campus-safety detection' },
  { value: '30%', label: 'Revenue lift supported at Starr Transit' },
]

export const experience: Experience[] = [
  {
    company: 'Bentley Systems',
    role: 'Software Engineering Co-op',
    period: '2025',
    location: 'Exton, PA',
    highlights: [
      'Built MCP integrations and copilot features for engineering workflows.',
      'Contributed C# unit-test suites for production code paths.',
      'Helped reduce a multi-step engineering workflow to a single copilot interaction.',
    ],
  },
  {
    company: 'Starr Transit',
    role: 'Software Engineering Intern',
    period: '2024',
    location: 'Philadelphia, PA',
    highlights: [
      'Built a low-latency Python REST API for ML-powered pricing.',
      'Developed a real-time Node.js regression service for ETA prediction.',
      'Supported production systems associated with a 30% revenue lift.',
    ],
  },
  {
    company: 'Drexel University',
    role: 'Computer Science Teaching Assistant',
    period: '2024 — Present',
    location: 'Philadelphia, PA',
    highlights: [
      'Supported students learning C systems programming, pointers, and manual memory management.',
      'Led technical problem-solving sessions focused on fundamentals and debugging.',
    ],
  },
]

export const projects: Project[] = [
  {
    name: 'MCP Execution Ledger',
    status: 'In development',
    summary:
      'A durable tool-execution gateway for AI-assisted operations, designed around idempotency, policy checks, explicit state transitions, and replayable evaluation traces.',
    technologies: ['C#', '.NET', 'PostgreSQL', 'MCP', 'OpenTelemetry'],
    href: 'https://github.com/danielamayaenvbo',
    linkLabel: 'Follow on GitHub',
  },
  {
    name: 'Protégé',
    status: 'Voice study tool',
    summary:
      'A browser-based study tool that listens while you teach and asks short clarifying questions, with live speech transcription, learner personas, LLM provider fallback, and offline evaluation.',
    technologies: ['TypeScript', 'Next.js', 'Zod', 'SQLite', 'Playwright'],
    href: 'https://github.com/danielamayaenvbo/protege',
    linkLabel: 'View repository',
  },
  {
    name: 'Fixed Income & Equity Market Monitor',
    status: 'Full-stack data',
    summary:
      'A monitor for US Treasury yields and ETF market data, with PostgreSQL time-series storage, data-quality tracking, FastAPI analytics and streaming APIs, and a React dashboard.',
    technologies: ['Python', 'FastAPI', 'PostgreSQL', 'React', 'Docker'],
    href: 'https://github.com/danielamayaenvbo/fixed-income-equity-market-monitor',
    linkLabel: 'View repository',
  },
  {
    name: 'Campus Safety CV Pipeline',
    status: 'Computer vision',
    summary:
      'Real-time campus-safety monitoring with YOLOv8 detection, restricted-zone alerts, and a logged analytics dashboard, evaluated at 89% mean average precision.',
    technologies: ['Python', 'YOLOv8', 'OpenCV', 'Streamlit', 'SQLite'],
    href: 'https://github.com/danielamayaenvbo/Computer-Vision-for-Campus-Safety',
    linkLabel: 'View repository',
  },
]

export const skills = [
  {
    label: 'Languages',
    items: ['C#', 'Python', 'TypeScript', 'C++', 'C', 'SQL', 'Bash'],
  },
  {
    label: 'Systems & cloud',
    items: ['Docker', 'AWS', 'PostgreSQL', 'REST', 'MCP', 'GitHub Actions'],
  },
  {
    label: 'ML & evaluation',
    items: ['PyTorch', 'TensorFlow', 'MLflow', 'OpenCV', 'LangChain'],
  },
]
