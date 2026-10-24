type Experience = {
  company: string
  role: string
  period: string
  location: string
  highlights: string[]
}

type Project = {
  index: number
  name: string
  status: string
  summary: string
  technologies: string[]
  href: string
  linkLabel: string
}

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
    index: 1,
    name: 'MCP Execution Ledger',
    status: 'In development',
    summary:
      'A durable tool-execution gateway for AI-assisted operations, designed around idempotency, policy checks, explicit state transitions, and replayable evaluation traces.',
    technologies: ['C#', '.NET', 'PostgreSQL', 'MCP', 'OpenTelemetry'],
    href: 'https://github.com/danielamayaenvbo',
    linkLabel: 'View GitHub',
  },
  {
    index: 2,
    name: 'ProtégéAI',
    status: 'Voice study engine',
    summary:
      'A TypeScript and Node.js voice study engine built around structured output contracts, with zero-leakage test runs and fully valid schema output.',
    technologies: ['TypeScript', 'Node.js', 'JSON Schema', 'Voice'],
    href: 'https://github.com/danielamayaenvbo',
    linkLabel: 'View GitHub',
  },
  {
    index: 3,
    name: 'Campus Safety CV Pipeline',
    status: 'Computer vision',
    summary:
      'A YOLOv5 and OpenCV computer-vision pipeline for campus-safety detection, evaluated at 89% mean average precision.',
    technologies: ['Python', 'PyTorch', 'YOLOv5', 'OpenCV'],
    href: 'https://github.com/danielamayaenvbo',
    linkLabel: 'View GitHub',
  },
]

export const skills = [
  {
    label: 'Languages',
    items: ['C#', 'Python', 'TypeScript', 'C++', 'C', 'SQL', 'Bash'],
  },
  {
    label: 'Systems & cloud',
    items: ['Docker', 'AWS', 'REST', 'MCP', 'GitHub Actions'],
  },
  {
    label: 'ML & evaluation',
    items: ['PyTorch', 'TensorFlow', 'MLflow', 'OpenCV', 'LangChain'],
  },
]
