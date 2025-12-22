
import type { ImagePlaceholder } from './placeholder-images';
import { PlaceHolderImages } from './placeholder-images';

const getImage = (id: string) => PlaceHolderImages.find(img => img.id === id) as ImagePlaceholder;

export const navLinks = [
  { href: '#preamble', label: 'About' },
  { href: '#papers', label: 'Call for Papers' },
  { href: '#schedules', label: 'Important Dates' },
  { href: '#tickets', label: 'Registration' },
  { href: '#speakers', label: 'Speakers' },
  { href: '#contact', label: 'Contact' },
];

export const heroData = {
  title: 'SustainTechCon 2026',
  subtitle: '1st International Conference on Sustainable Technologies and Intelligent Systems',
  date: '6–7 March 2026',
  location: 'Vasantdada Patil’s College of Engineering and Visual Arts, Sion, Mumbai, India',
  countdownTarget: '2026-03-06T09:00:00',
  images: [getImage('hero-1'), getImage('hero-2')],
};

export const preamble = {
    title: 'Preamble',
    content: "SustainTechCon 2026 is the 1st International Conference on Sustainable Technologies and Intelligent Systems, designed to bring together researchers, academicians, industry experts, innovators, and policymakers from across the globe. The conference focuses on the convergence of sustainability, intelligent systems, artificial intelligence, IoT, smart engineering, and emerging technologies to address real-world challenges. In the era of rapid technological advancement and environmental concerns, SustainTechCon 2026 aims to provide a premier platform for knowledge exchange, innovation, and interdisciplinary collaboration. The conference emphasizes cutting-edge research, practical implementations, and sustainable engineering solutions aligned with global development goals."
}

export const objectives = [
    'To promote research and innovation in sustainable technologies and intelligent systems',
    'To encourage interdisciplinary collaboration among engineering, technology, management, healthcare, agriculture, and environmental sciences',
    'To provide a global platform for research scholars and professionals to present high-quality research',
    'To bridge the gap between academia, industry, and society',
    'To highlight the role of AI, IoT, cyber-physical systems, and digital twins in sustainable development',
    'To support young researchers and students through mentorship and exposure to global research trends',
];

export const callForPapers = {
    description: "Authors are invited to submit original, unpublished, and high-quality research papers that are not under review elsewhere. Papers should present novel research contributions, experimental studies, theoretical analysis, or practical applications related to the conference themes.",
    themes: [
        'Artificial Intelligence, Machine Learning & Deep Learning',
        'Data Analytics and Intelligent Information Management',
        'Sustainable Computing and Green Technologies',
        'Intelligent Software Systems and Decision-Support Systems',
        'Big Data Processing and Knowledge Engineering',
        'Industrial Automation and Smart Manufacturing',
        'Internet of Things (IoT) and Smart Sensing Systems',
        'Cyber-Physical Systems and Autonomous Technologies',
        'Digital Twins and Real-Time Monitoring Architectures',
        'AI-Driven Communication and Networking',
        'Wireless Sensor Networks and Edge Intelligence',
        'Network Security, Cybersecurity, and Information Assurance',
        'Sustainable Energy Systems and Smart Grids',
        'Intelligent Systems in Healthcare, Agriculture, and Smart Cities',
        'Engineering Solutions for Sustainability'
    ],
    submissionDetails: [
        'Papers must be written in English',
        'Manuscripts should be original and plagiarism-free',
        'AI-generated content should be minimal and compliant with publisher guidelines',
        'Authors should follow the conference paper template (to be downloaded from the website)',
        'Paper length: 6–8 pages (as per template)',
        'Submission Mode: Online paper submission system',
        'All submissions will undergo a double-blind peer review process'
    ],
    publicationDetails: {
        title: 'Publication Details',
        description: 'Selected high-quality papers will be published in Scopus-indexed conference proceedings / journals (as per publisher approval). Additional accepted papers may be published in peer-reviewed journals with DOI. All papers will be subjected to rigorous peer review, plagiarism, and quality checks. Publication is subject to publisher norms and ethical guidelines.',
        indexing: 'Scopus (for selected proceedings)'
    }
};

export const speakers = [
  {
    name: 'Dr. John Smith',
    title: 'AI & Sustainability Expert',
    bio: 'Renowned researcher in AI applications for environmental sustainability and green computing. Keynote speaker at multiple international conferences.',
    image: getImage('speaker-ben'),
  },
  {
    name: 'Dr. Jane Doe',
    title: 'IoT & Smart Systems Pioneer',
    bio: 'Expert in IoT and Cyber-Physical Systems, with a focus on smart city and healthcare applications. Holds multiple patents in sensor technology.',
    image: getImage('speaker-sophie'),
  },
  {
    name: 'Prof. Alan Turing',
    title: 'Head of Computer Science',
    bio: 'Leading academic in machine learning and data analytics. Published over 100 research papers in high-impact journals.',
    image: getImage('speaker-james'),
  },
  {
    name: 'Dr. Ada Lovelace',
    title: 'Industry Innovator',
    bio: 'Technology leader with 20+ years of experience in industrial automation and smart manufacturing. Implemented large-scale digital twin projects.',
    image: getImage('speaker-rose'),
  },
];

export const schedules = [
    {
      day: '30 Nov',
      date: '2025',
      events: [
        { time: '', speakerName: '', topic: 'Paper Submission Deadline', description: '' },
      ],
    },
    {
        day: '15 Jan',
        date: '2026',
        events: [
          { time: '', speakerName: '', topic: 'Notification of Acceptance', description: '' },
        ],
    },
    {
        day: '10 Feb',
        date: '2026',
        events: [
            { time: '', speakerName: '', topic: 'Camera-Ready Submission', description: '' },
        ],
    },
    {
        day: '06 Mar',
        date: '2026',
        events: [
            { time: '', speakerName: '', topic: 'Conference Day 1', description: '' },
        ],
    },
    {
        day: '07 Mar',
        date: '2026',
        events: [
            { time: '', speakerName: '', topic: 'Conference Day 2', description: '' },
        ],
    },
];

export const tickets = [
    { type: 'Research Scholars / Students', description: 'For full-time students and research scholars.', features: ['Access to all conference sessions', 'Conference kit and materials', 'Certificate of presentation / participation', 'Lunch and refreshments', 'Publication processing (as applicable)'], featured: false },
    { type: 'Faculty / Academicians', description: 'For faculty members and academicians from educational institutions.', features: ['Access to all conference sessions', 'Conference kit and materials', 'Certificate of presentation / participation', 'Lunch and refreshments', 'Publication processing (as applicable)'], featured: true },
    { type: 'Industry Professionals', description: 'For delegates from corporate and industrial organizations.', features: ['Access to all conference sessions', 'Conference kit and materials', 'Certificate of presentation / participation', 'Lunch and refreshments', 'Publication processing (as applicable)'], featured: false },
    { type: 'Attendees', description: 'For participants not presenting a paper.', features: ['Access to all conference sessions', 'Conference kit and materials', 'Certificate of participation', 'Lunch and refreshments'], featured: false },
  ];

export const testimonials = [
    { quote: "A fantastic platform for sharing cutting-edge research in sustainable tech. The keynote sessions were particularly insightful.", author: "A. Sharma, University of Delhi" },
    { quote: "Well-organized and highly relevant. It bridged the gap between academic theory and industry practice perfectly. I'm looking forward to the next one!", author: "R. Patel, Tech Innovators Inc." },
    { quote: "As a young researcher, the exposure to global research trends and the mentorship opportunities were invaluable. Highly recommend.", author: "P. Singh, PhD Scholar" },
    { quote: "The focus on real-world challenges and interdisciplinary collaboration makes this conference unique and impactful.", author: "Dr. Chen, International Delegate" },
];
    
export const contactInfo = [
    { title: 'Email Us', icon: 'Mail' as const, value: 'sustaintechcon@vpceng.ac.in' },
    { title: 'Call Us', icon: 'Smartphone' as const, value: '+91-XXXXX-XXXXX' },
    { title: 'Address', icon: 'Home' as const, value: 'Vasantdada Patil’s College of Engineering and Visual Arts,\nSion, Mumbai, Maharashtra, India' },
];
  
export const socialLinks = [
    { name: 'Facebook', icon: 'Facebook' as const, href: '#' },
    { name: 'Twitter', icon: 'Twitter' as const, href: '#' },
    { name: 'Rss', icon: 'Rss' as const, href: '#' },
    { name: 'Dribbble', icon: 'Dribbble' as const, href: '#' },
];
