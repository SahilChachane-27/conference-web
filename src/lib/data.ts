
import type { ImagePlaceholder } from './placeholder-images';
import { PlaceHolderImages } from './placeholder-images';
import type { ChartConfig } from '@/components/ui/chart';

const getImage = (id: string) => PlaceHolderImages.find(img => img.id === id) as ImagePlaceholder;

export const navLinks = [
  { href: "/", label: "Home" },
  {
    label: "About",
    isDropdown: true,
    href: "/about",
    subLinks: [
      { href: "/about/conference", label: "About Conference" },
      { href: "/about/researcher-connect", label: "About Researcher Connect" },
      { href: "/about/college", label: "About College" },
    ],
  },
  { href: "/call-for-papers", label: "Call for Papers" },
  { href: "/committee", label: "Committee" },
  { href: "/speakers", label: "Speakers" },
  { href: "/important-dates", label: "Important Dates" },
  { href: "/timeline", label: "Timeline" },
  { href: "/publication-details", label: "Publication" },
  { href: "/registration", label: "Registration" },
  { href: "/venue", label: "Venue" },
];


export const heroData = {
  title: 'SustainTechCon 2026',
  subtitle: '1st International Conference on Sustainable Technologies and Intelligent Systems',
  date: '6–7 March 2026',
  location: 'Vasantadada Patil Pratishthan’s College of Engineering and Visual Arts',
  countdownTarget: '2026-03-06T09:00:00',
  images: [getImage('hero-1'), getImage('hero-2')],
};

export const preamble = {
    title: 'Preamble',
    content: "SustainTechCon 2026 is the 1st International Conference on Sustainable Technologies and Intelligent Systems, designed to bring together researchers, academicians, industry experts, innovators, and policymakers from across the globe. The conference focuses on the convergence of sustainability, intelligent systems, artificial intelligence, IoT, smart engineering, and emerging technologies to address real-world challenges. In the era of rapid technological advancement and environmental concerns, SustainTechCon 2026 aims to provide a premier platform for knowledge exchange, innovation, and interdisciplinary collaboration. The conference emphasizes cutting-edge research, practical implementations, and sustainable engineering solutions aligned with global development goals."
}

export const objectives = [
    {
        icon: 'Rocket' as const,
        title: 'Promote Innovation',
        description: 'To promote research and innovation in sustainable technologies and intelligent systems.',
    },
    {
        icon: 'Users' as const,
        title: 'Foster Collaboration',
        description: 'To encourage interdisciplinary collaboration among engineering, technology, management, healthcare, agriculture, and environmental sciences.',
    },
    {
        icon: 'Globe' as const,
        title: 'Global Platform',
        description: 'To provide a global platform for research scholars and professionals to present high-quality research.',
    },
    {
        icon: 'Bridge' as const,
        title: 'Bridge Gaps',
        description: 'To bridge the gap between academia, industry, and society.',
    },
    {
        icon: 'Cpu' as const,
        title: 'Highlight Technology',
        description: 'To highlight the role of AI, IoT, cyber-physical systems, and digital twins in sustainable development.',
    },
    {
        icon: 'GraduationCap' as const,
        title: 'Support Researchers',
        description: 'To support young researchers and students through mentorship and exposure to global research trends.',
    },
];

export const callForPapers = {
    description: "Authors are invited to submit original, unpublished, and high-quality research papers that are not under review elsewhere. Papers should present novel research contributions, experimental studies, theoretical analysis, or practical applications related to the conference themes.",
    tracks: [
        {
            title: "Track 1: Computer Science, AI & Intelligent Systems",
            topics: [
                "AI and machine learning for sustainability",
                "IoT and cyber-physical systems",
                "Big data analytics for environmental monitoring",
                "Blockchain for sustainable systems",
                "Intelligent control systems",
                "Green computing and sustainable software"
            ],
            sdgs: "SDG 9, SDG 11, SDG 12",
            explanation: "Enabling intelligent decision-making and digital sustainability across sectors through AI, IoT, and data-driven systems."
        },
        {
            title: "Track 2: Sustainable Engineering & Smart Infrastructure",
            topics: [
                "Green civil and structural engineering",
                "Sustainable transportation and mobility",
                "Smart cities and resilient infrastructure",
                "Energy-efficient building materials",
                "Intelligent construction technologies",
                "Lifecycle analysis and carbon-neutral engineering"
            ],
            sdgs: "SDG 9, SDG 11, SDG 13",
            explanation: "Supporting sustainable infrastructure, resilient urban systems, and low-carbon engineering to reduce environmental impact."
        },
        {
            title: "Track 3: Electrical, Electronics & Renewable Energy",
            topics: [
                "Renewable energy tech and hybrid systems",
                "Smart grids and power system optimization",
                "Energy storage and battery management",
                "Power electronics for sustainable applications",
                "Electric vehicles and charging infrastructure",
                "Low-power and energy-efficient electronics"
            ],
            sdgs: "SDG 7, SDG 9, SDG 13",
            explanation: "Focusing on clean energy, smart grids, and efficiency to promote decarbonization and universal energy access."
        },
        {
            title: "Track 4: Mechanical Engineering & Robotics",
            topics: [
                "Sustainable and smart manufacturing",
                "Robotics for environmental applications",
                "Energy-efficient thermal and fluid systems",
                "Industry 4.0 and digital manufacturing",
                "Additive manufacturing and lightweight design",
                "Predictive maintenance and intelligent systems"
            ],
            sdgs: "SDG 8, SDG 9, SDG 12",
            explanation: "Promoting sustainable manufacturing and automation to enhance productivity while reducing waste and emissions."
        },
        {
            title: "Track 5: Water Technologies & Resource Management",
            topics: [
                "Advanced water purification and desalination",
                "Wastewater treatment, reuse, and recycling",
                "Smart irrigation and agricultural water systems",
                "AI-driven water demand forecasting",
                "Hydrological modeling and resource optimization",
                "Climate-resilient water solutions"
            ],
            sdgs: "SDG 6, SDG 12, SDG 13",
            explanation: "Addressing water scarcity and climate resilience through sustainable water use, treatment, and intelligent management."
        },
        {
            title: "Track 6: Agriculture, Entomology & Food Systems",
            topics: [
                "Agricultural entomology and integrated pest management",
                "Precision agriculture and smart farming",
                "AI and IoT for crop monitoring",
                "Bio-pesticides and eco-friendly pest control",
                "Climate-resilient farming practices",
                "Digital tools for food security"
            ],
            sdgs: "SDG 2, SDG 12, SDG 15",
            explanation: "Supporting sustainable agriculture, pest management, and food security through intelligent and ecological farming."
        },
        {
            title: "Track 7: Polymer Science & Materials Engineering",
            topics: [
                "Sustainable and biodegradable polymers",
                "Advanced composites and functional materials",
                "Materials for water treatment and remediation",
                "Smart materials and responsive systems",
                "Recycling tech and circular material economy",
                "Nanomaterials for sustainable engineering"
            ],
            sdgs: "SDG 9, SDG 12, SDG 14",
            explanation: "Promoting sustainable materials, recycling, and pollution reduction through advanced material innovation."
        },
        {
            title: "Track 8: Public Health & Sanitation Engineering",
            topics: [
                "Water quality assessment and monitoring",
                "Sustainable WASH (Water, Sanitation, Hygiene) systems",
                "Low-cost sanitation engineering",
                "Smart sensors for hygiene and health monitoring",
                "Public health analytics and disease control",
                "Policy for water hygiene sustainability"
            ],
            sdgs: "SDG 3, SDG 6, SDG 11",
            explanation: "Covering WASH technologies and sanitation systems that improve public health and living conditions."
        },
        {
            title: "Track 9: Sustainable Microfinance & FinTech",
            topics: [
                "Tech-enabled microfinance and financial inclusion",
                "FinTech solutions for sustainable development",
                "AI-based credit risk assessment",
                "Sustainable business models",
                "Policy for inclusive economic growth",
                "Digital platforms for community empowerment"
            ],
            sdgs: "SDG 1, SDG 8, SDG 10",
            explanation: "Addressing financial inclusion and equitable growth through technology-driven microfinance and digital financial services."
        },
        {
            title: "Track 10: Visual Arts, Media & Design for Sustainability",
            topics: [
                "Visual communication for sustainability awareness",
                "Digital art, AI, and generative media",
                "Sustainable design methodologies",
                "Interactive and immersive media",
                "Media ethics and social impact",
                "Cultural heritage and creative sustainability"
            ],
            sdgs: "SDG 4, SDG 11, SDG 12",
            explanation: "Using visual media and design to promote sustainability awareness, education, and cultural preservation."
        }
    ],
    submissionDetails: [
        "Full papers must be submitted in PDF format through the official conference portal.",
        "Papers should be formatted according to the provided template.",
        "A double-blind peer review process will be followed.",
        "At least one author must register for the conference for the paper to be published."
    ],
    publicationDetails: {
        title: 'Publication Details',
        description: 'Selected high-quality papers will be published in Scopus-Indexed Conference Proceedings / Scopus Journals (as per publisher approval at additional APC Charges ). Additional accepted papers may be published in peer-reviewed journals with DOI. All papers will be subjected to rigorous peer review, plagiarism, and quality checks. Publication is subject to publisher norms and ethical guidelines.',
        indexing: 'Scopus (for selected proceedings)'
    }
};

export const speakers = [
  {
    name: 'Dr. John Smith',
    title: 'Keynote Speaker',
    affiliation: 'MIT, USA',
    bio: 'Expert in AI and Sustainable Systems, Dr. Smith will open the conference with a talk on the future of green technology.',
    image: getImage('speaker-ben'),
  },
  {
    name: 'Dr. Jane Doe',
    title: 'Expert in Smart Grids',
    affiliation: 'Stanford University, USA',
    bio: 'Dr. Doe is a pioneer in renewable energy integration and will discuss the challenges of building resilient power grids.',
    image: getImage('speaker-sophie'),
  },
  {
    name: 'Prof. Alan Turing',
    title: 'AI Ethics Researcher',
    affiliation: 'Cambridge University, UK',
    bio: 'A leading voice in AI ethics, Prof. Turing will explore the moral implications of intelligent systems in society.',
    image: getImage('speaker-james'),
  },
  {
    name: 'Dr. Ada Lovelace',
    title: 'FinTech Innovator',
    affiliation: 'Imperial College London, UK',
    bio: 'Dr. Lovelace will present her latest research on how technology is transforming microfinance and economic inclusion.',
    image: getImage('speaker-rose'),
  },
];

export const schedules = [
    {
      topic: 'Paper Submission Deadline',
      date: '31 Jan 2026',
      description: 'Final day for authors to submit their full-length research papers for review.'
    },
    {
      topic: 'Notification of Acceptance',
      date: '10 Feb 2026',
      description: 'Authors will be notified about the acceptance or rejection of their papers.'
    },
    {
      topic: 'Registration Deadline',
      date: '20 Feb 2026',
      description: 'Last day for all attendees and presenting authors to register for the conference.'
    },
    {
      topic: 'Conference Day 1',
      date: '06 Mar 2026',
      description: 'The first day of the conference, featuring keynote speeches, technical sessions, and workshops.'
    },
    {
      topic: 'Conference Day 2',
      date: '07 Mar 2026',
      description: 'The second day of the conference, including panel discussions, paper presentations, and networking events.'
    },
];

export const tickets = [
  { 
      type: 'Student UG/PG (India)', 
      earlyBird: { usd: '$100', inr: '₹8,000' },
      lateBird: { usd: '$120', inr: '₹10,000' },
      features: ['Access to all conference sessions', 'Conference kit and materials', 'Certificate of presentation / participation', 'Lunch and refreshments', 'Publication processing (as applicable)'], 
      featured: false 
  },
  { 
      type: 'PhD / Research Scholar (India)', 
      earlyBird: { usd: '$125', inr: '₹10,000' },
      lateBird: { usd: '$150', inr: '₹12,000' },
      features: ['Access to all conference sessions', 'Conference kit and materials', 'Certificate of presentation / participation', 'Lunch and refreshments', 'Publication processing (as applicable)'], 
      featured: false 
  },
  { 
      type: 'Academia / Professional (India)', 
      earlyBird: { usd: '$150', inr: '₹12,000' },
      lateBird: { usd: '$175', inr: '₹14,000' },
      features: ['Access to all conference sessions', 'Conference kit and materials', 'Certificate of presentation / participation', 'Lunch and refreshments', 'Publication processing (as applicable)'], 
      featured: true 
  },
  { 
      type: 'International Author', 
      earlyBird: { usd: '$200', inr: '₹16,000' },
      lateBird: { usd: '$225', inr: '₹18,000' },
      features: ['Access to all conference sessions', 'Conference kit and materials', 'Certificate of presentation / participation', 'Lunch and refreshments', 'Publication processing (as applicable)'], 
      featured: false 
  },
  { 
      type: 'Attendee (India)', 
      earlyBird: { usd: '$50', inr: '₹4,000' },
      lateBird: { usd: '$60', inr: '₹5,000' },
      features: ['Access to all conference sessions', 'Conference kit and materials', 'Certificate of participation', 'Lunch and refreshments'], 
      featured: false 
  },
];


export const testimonials = [
    { quote: "A fantastic platform for sharing cutting-edge research in sustainable tech. The keynote sessions were particularly insightful.", author: "A. Sharma, University of Delhi" },
    { quote: "Well-organized and highly relevant. It bridged the gap between academic theory and industry practice perfectly. I'm looking forward to the next one!", author: "R. Patel, Tech Innovators Inc." },
    { quote: "As a young researcher, the exposure to global research trends and the mentorship opportunities were invaluable. Highly recommend.", author: "P. Singh, PhD Scholar" },
    { quote: "The focus on real-world challenges and interdisciplinary collaboration makes this conference unique and impactful.", author: "Dr. Chen, International Delegate" },
];
    
export const contactInfo = [
    { title: 'Email Us', icon: 'Mail' as const, value: 'sustaintechcon@pvppcoe.ac.in' },
    { title: 'Call Us', icon: 'Smartphone' as const, value: '+91-8485863406' },
    { title: 'Address', icon: 'Home' as const, value: 'Vasantadada Patil Patil Pratishthan’s College of Engineering and Visual Arts' },
];
  
export const socialLinks = [
    { name: 'Facebook', icon: 'Facebook' as const, href: 'https://www.facebook.com/profile.php?id=61583580994300' },
    { name: 'Instagram', icon: 'Instagram' as const, href: 'https://www.instagram.com/researcher_connect?igsh=MTRhbjZ4dHczcHBrbw==' },
    { name: 'Youtube', icon: 'Youtube' as const, href: 'https://www.youtube.com/@Researcherconnect' },
];

export const committeeData = {
    chiefPatrons: {
        title: 'Chief Patron',
        members: [
            { name: 'Shri. Nandkumar M. Katkar', role: 'President, VPP' },
            { name: 'Shri. Ravindra Ghorpade', role: 'Vice- President, VPP' },
            { name: 'Adv. Shri Appasaheb Desai', role: 'General Secretary, VPP' }
        ]
    },
    patrons: {
        title: 'Patrons',
        members: [
            { name: 'Adv. Shri. Amit A. Desai', role: 'Treasurer VPP' },
            { name: 'Mr. Suresh G. Desai', role: 'Trustee, VPP' },
            { name: 'Mr. shivraj D. Shinde', role: 'Industrialist' },
            { name: 'Mrs. Urmila A. Desai', role: 'Trustee, VPP' },
            { name: 'Mr. Anandrao K. Shinde', role: 'Trustee, VPP' },
            { name: 'Mr. Prakash B. Chavan', role: 'Trustee, VPP' },
            { name: 'Dr. Ashok Chavan', role: 'Campus Director, VPP' }
        ]
    },
    generalChief: {
        title: 'General Chief',
        members: [
            { name: 'Dr. Alam N. Shaikh', role: 'Principal, VPPCOE & VA' }
        ]
    },
    convener: {
        title: 'Convener',
        members: [
            { name: 'Dr. Rais A. Mulla', role: 'HoD, Computer Engineering' }
        ]
    },
    coConvener: {
        title: 'Co- Convener',
        members: [
            { name: 'Dr. Rais A. Mulla', role: 'HoD, Computer Engineering' }
        ]
    },
    advisoryCommittee: {
        title: 'Advisory Committee member',
        members: [
            { name: 'Dr. Chandra Prakash', role: 'SVNIT Surat' },
            { name: 'Dr. Alok Kumar', role: 'SVNIT Surat' },
            { name: 'Dr. Anirban Bhattacharjee', role: 'SVNIT Surat' },
            { name: 'Dr. Vilas Nandivekar', role: 'Registrar, SNDT University, Mumbai' },
            { name: 'Dr. Vilas Karjini', role: 'Professor, Warana University, Kolhapur' },
            { name: 'Dr. P.K. Desai', role: 'President ISTE, New Delhi' },
            { name: 'Dr. Uddav Bhosale', role: 'Vice Chancellor, S, G. University Kolhapur' },
            { name: 'Dr. A.K. Gupta', role: 'Vice Chancellor, D.Y. Patil University, Talsande, Kolhapur' },
            { name: 'Mr. Ravishankar Desai', role: 'Ex.Vice Chancellor & Head IM Reliance Industries Ltd.' },
            { name: 'Dr. Jayendra Kumar', role: 'Professor, Grade- 1, VIT- AP University' }
        ]
    },
    correspondenceContact: {
        title: 'Correspondence Contact',
        members: [
            { name: 'Dr. Rais A. Mulla', role: '(8485863406)' },
            { name: 'Dr. Mahendra E. Pawar', role: '(9890838047)' },
            { name: 'Dr. Gayatri Bachhav', role: '(8087294699)' },
            { name: 'Prof. Manisha Patil', role: '(9664214038)' }
        ]
    }
};

export const publishingPartners = [
    { name: 'Skype', image: getImage('sponsor-skype') },
    { name: 'Envato', image: getImage('sponsor-envato') },
    { name: 'Dribbble', image: getImage('sponsor-dribbble') },
    { name: 'Mailchimp', image: getImage('sponsor-mailchimp') },
    { name: 'Android', image: getImage('sponsor-android') },
    { name: 'jQuery', image: getImage('sponsor-jquery') },
    { name: 'Sass', image: getImage('sponsor-sass') },
    { name: 'Pinterest', image: getImage('sponsor-pinterest') },
];


export const rolesData = [
    { name: 'Property Manager', value: 41 },
    { name: 'Regional Supervisor', value: 22 },
    { name: 'Executive', value: 15 },
    { name: 'Operations', value: 6 },
    { name: 'Marketing', value: 4 },
    { name: 'Other', value: 12 },
];
  
export const experienceData = [
    { name: 'Over 21 years', value: 28 },
    { name: '11-20 years', value: 36 },
    { name: '6-10 years', value: 24 },
    { name: '5 years or less', value: 12 },
];
  
export const businessTypesData = [
    { name: 'Conventional Housing', value: 55 },
    { name: 'Affordable Housing', value: 15 },
    { name: 'Asset Management', value: 10 },
    { name: 'Leasing Company', value: 6 },
    { name: 'Other', value: 14 },
];

export const COLORS = ['#29ABE2', '#FFB347', '#4CAF50', '#F44336', '#9C27B0', '#FF9800'];
    

    













    