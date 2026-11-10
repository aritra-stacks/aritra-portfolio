// Yahi file tumhara saara content hai. Sirf yahan badlo, baaki code chhedna nahi.

export const about = 'I’m Aritra Das, an undergraduate student pursuing the BS in Data Science and Applications at IIT Madras alongside a B.Sc. in Computer Science at Acharya Narendra Dev College, University of Delhi. I’m building my programming and problem-solving foundations while learning Python and C++. I’m especially interested in artificial intelligence, machine learning, data science, and software development. Through coursework, workshops, hackathons, and personal projects, I’m exploring how to turn what I learn into useful technology—one step at a time.'
export const education = [
  { title: 'IIT Madras', detail: 'BS Programme', description: 'BS in Data Science and Applications · Currently Pursuing.', website: 'https://study.iitm.ac.in/', logo: '/logo/iitm-preview.jpg' },
  { title: 'Acharya Narendra Dev College', detail: 'Delhi University', description: 'B.Sc. Computer Science · Currently Pursuing.', website: 'https://www.andcollege.du.ac.in/', logo: '/logo/andc-preview.jpg' },
]
export const skills = [
  { name: 'Python', level: 'Beginner · Currently Learning', group: 'Programming Languages', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'NumPy', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg' },
  { name: 'Pandas', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg' },
  { name: 'Matplotlib', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg' },
  { name: 'Seaborn', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/seaborn/seaborn-original.svg' },
  { name: 'Scikit-learn', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg' },
  { name: 'C++', level: 'Beginner · Currently Learning', group: 'Programming Languages', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
  { name: 'Microsoft Excel', logo: '/logo/excel.png' },
  { name: 'Microsoft Word', logo: '/logo/word.png' },
  { name: 'Microsoft PowerPoint', logo: '/logo/powerpoint.png' },
]

export const interests = ['Artificial Intelligence', 'Machine Learning', 'Data Science', 'Software Development', 'Computer Science']

export const projects = [
  {
    title: 'Personal Portfolio Website',
    description: 'A personal portfolio showcasing my education, technical skills, achievements, workshops, and development journey.',
    tech: ['React.js', 'JavaScript', 'CSS', 'Three.js / React Three Fiber'],
    status: 'In Progress',
    link: 'https://github.com/aritra-stacks/aritra-portfolio',
  },
  {
    title: 'College Finder — Resof Demo',
    description: 'A college-finder web demo. More project details can be added as the project develops.',
    tech: ['JavaScript', 'HTML'],
    link: 'https://github.com/aritra-stacks/Resof',
  },
]
// Add future projects here using the same fields; add `link` when a repository is available.

export const hackathons = [
  {
    title: 'IIIT Delhi Hackathon',
    date: '2026 · Indraprastha Institute of Information Technology Delhi (IIIT-Delhi)',
    detail: 'Attended a hackathon and explored collaborative technology and problem-solving activities. Neo4j was part of the event experience. Project details to be updated.',
    socialPosts: {
      linkedin: 'https://lnkd.in/p/ep5Zsj-2',
      instagram: 'https://www.instagram.com/p/DeXEhF8GO4d/',
    },
  },
  {
    title: 'AI Build Agent Workshop',
    date: '2026 · Hosted by Paytm Skymark · Organized through India Data Club',
    detail: 'Participated in a workshop and learned about AI Build Agents, AI-powered development workflows, and practical applications of AI tools.',
    socialPosts: {
      linkedin: 'https://lnkd.in/p/emgc6g6W',
      instagram: 'https://www.instagram.com/p/Demw9MjE3tV/',
    },
  },
]

export const internships = []
// Add internship entries here later: { title, organization, period, description, skills }

export const certificates = [
  {
    title: 'Certificate in BCC (Basic Computer Course)',
    issuer: 'Digital Information Technology & Research for Professional (DITRP) · Avishu Education Services',
    year: '2024',
    category: 'Skills',
    image: '/certificates/bcc-certificate-2024-preview.jpg',
    file: '/certificates/bcc-certificate-2024.jpg',
    duration: '3 months · 28 March 2024 to 27 June 2024',
    issueDate: '27 June 2024',
    description: 'Completed with Grade A (76%).',
  },
  {
    title: 'AI Skill Fest 2026 Participation Badge',
    issuer: 'Cradles',
    year: '2026',
    category: 'Skills',
    image: '/certificates/ai-skill-fest-2026-badge-preview.jpg',
    file: '/certificates/ai-skill-fest-2026-badge.png',
    description: 'Participation badge for AI Skill Fest 2026.',
  },
  {
    title: 'Neo4j Graph Builder: Build Sprint, Delhi',
    issuer: 'hackFront India in collaboration with Neo4j',
    year: '2026',
    category: 'Hackathons',
    image: '/certificates/neo4j-build-sprint-delhi-preview.jpg',
    file: '/certificates/neo4j-build-sprint-delhi.jpg',
    eventDate: '11 October 2026',
    issueDate: '12 October 2026',
    venue: 'Indraprastha Institute of Information Technology, Delhi',
    description: 'Certificate of participation for hands-on building and exploration of Graph + AI and Agent Memory.',
  },
  {
    title: 'GraphRAG Hackathon',
    issuer: 'Neo4j GraphAcademy',
    year: '2026',
    category: 'Hackathons',
    eventDate: '10 October 2026',
    duration: '43 minutes',
    description: 'Certificate of attendance for the GraphRAG Hackathon.',
    verifyUrl: 'https://graphacademy.neo4j.com/c/363b03b9-e0cc-4b9f-9b4c-33bec175616e/',
  },
  {
    title: 'Popular Lecture Series: From Idea to Intellectual Property',
    issuer: 'Anusandhan Kosh · IQAC, Acharya Narendra Dev College, University of Delhi',
    year: '2026',
    category: 'Education',
    institution: 'Acharya Narendra Dev College',
    preview: '/certificates/andc-popular-lecture-series-preview.jpg',
    file: '/certificates/andc-popular-lecture-series.pdf',
    eventDate: '6 October 2026',
    venue: 'Acharya Narendra Dev College, University of Delhi',
    description: 'Certificate of participation in the lecture “From Idea to Intellectual Property: Protecting Innovation in Academia,” delivered by Dr. Mohit Sahni.',
  },
  {
    title: 'Popular Lecture Series: From Idea to Intellectual Property',
    issuer: 'Anusandhan Kosh · IQAC, Acharya Narendra Dev College, University of Delhi',
    year: '2026',
    category: 'Other Activities',
    preview: '/certificates/andc-popular-lecture-series-preview.jpg',
    file: '/certificates/andc-popular-lecture-series.pdf',
    eventDate: '6 October 2026',
    venue: 'Acharya Narendra Dev College, University of Delhi',
    description: 'Certificate of participation in the lecture “From Idea to Intellectual Property: Protecting Innovation in Academia,” delivered by Dr. Mohit Sahni.',
  },
]
export const journey = [
  {
    id: 'iit-madras-start',
    date: '2025 · IIT Madras',
    title: 'Started My IIT Madras Journey',
    detail: 'Qualified for the IIT Madras BS Programme in Data Science and Applications and began my undergraduate learning journey.',
    icon: 'education',
    category: 'Academic milestone',
  },
  {
    id: 'dual-academic-journey',
    date: '2026 · IIT Madras + University of Delhi',
    title: 'Started My Dual Academic Journey',
    detail: 'Began pursuing the IIT Madras BS Programme alongside my undergraduate studies at Acharya Narendra Dev College, University of Delhi.',
    icon: 'books',
    category: 'Education',
  },
  {
    id: 'started-programming',
    date: '2026',
    title: 'Started Programming',
    detail: 'Began learning Python and C++ to develop strong programming and problem-solving fundamentals.',
    icon: 'code',
    category: 'Learning to code',
  },
  {
    id: 'exploring-ai',
    date: '2026',
    title: 'Exploring AI & Technology',
    detail: 'Started exploring artificial intelligence, data science, and emerging technology through hands-on learning and community events.',
    icon: 'ai',
    category: 'Exploration',
  },
  {
    id: 'neo4j-hackathon',
    date: '2026 · IIIT Delhi',
    title: 'Neo4j Hackathon – IIIT Delhi',
    detail: 'Participated in a hackathon organized at IIIT Delhi and got exposure to Neo4j and graph database technology.',
    icon: 'network',
    category: 'Hackathon experience',
  },
  {
    id: 'ai-agent-workshop',
    date: '2026 · Indian Data Club',
    title: 'Paytm Skymark – AI Agent Workshop',
    detail: 'Attended an AI Agent workshop through Indian Data Club. Explored AI Build Agents and learned about building AI-powered solutions.',
    icon: 'ai',
    category: 'Practical AI learning',
  },
  {
    id: 'resof-college-finder',
    date: '2026',
    title: 'Resof – College Finder Project',
    detail: 'A JavaScript and HTML college-finder demo created by my teammate. I forked the repository to my GitHub and explored it as a project before starting my personal portfolio.',
    icon: 'code',
    category: 'Project experience',
  },
  {
    id: 'portfolio-website',
    date: '2026',
    title: 'Personal Portfolio Website',
    detail: 'Started building my portfolio with modern web technologies and interactive 3D elements. It showcases my education, technical skills, projects, achievements, and professional growth.',
    icon: 'code',
    category: 'Building in public',
  },
]

export const contact = {
  email: 'aritra.bytes@gmail.com',
  secondaryEmail: 'aritradaslegender@gmail.com',
  github: 'https://github.com/aritra-stacks',
  linkedin: 'https://www.linkedin.com/in/aritra-das-b54bb8437/',
  instagram: 'https://www.instagram.com/quantumaritra/',
  whatsapp: 'https://wa.me/919999298584',
  telegram: 'https://t.me/+919999298584',
  reddit: 'https://www.reddit.com/user/IITIAN_ARITRA_DAS_DS/',
}

// Birthday month is 1-12; update this object whenever the birthday date changes.
export const birthday = { month: 8, day: 22 }
