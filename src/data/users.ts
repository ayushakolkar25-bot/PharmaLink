export type UserRole =
  | 'student'
  | 'pharmacist'
  | 'researcher'
  | 'industry'
  | 'clinical'
  | 'recruiter'
  | 'educator'

export interface Experience {
  id: string
  title: string
  organization: string
  location: string
  startDate: string
  endDate?: string
  current: boolean
  description: string
}

export interface Education {
  id: string
  institution: string
  degree: string
  field: string
  startDate: string
  endDate?: string
  current: boolean
  description: string
}

export interface Research {
  id: string
  title: string
  organization: string
  role?: string
  startDate: string
  endDate?: string
  current: boolean
  description: string
  link?: string
}

export interface User {
  id: string

  name: string
  initials: string

  role: UserRole

  headline: string
  organization: string
  location: string
  bio: string

  avatar?: string

  skills: string[]
  interests: string[]

  experience: Experience[]
  education: Education[]
  research: Research[]

  connections: number
  followers: number

  verified: boolean
}

export const users: User[] = [
  {
    id: 'user-001',

    name: 'Ayush Akolkar',
    initials: 'AA',

    role: 'student',

    headline: 'Computer Science Student',

    organization: 'NIIT University',

    location: 'Neemrana, Rajasthan',

    bio:
      'Student interested in technology, healthcare, and building meaningful digital products.',

    skills: [
      'React',
      'TypeScript',
      'Web Development',
      'Problem Solving',
    ],

    interests: [
      'Healthcare Technology',
      'Pharmacy',
      'Research',
      'Technology',
    ],

    experience: [
      {
        id: 'experience-001',

        title: 'Student Developer',

        organization: 'TechVruk',

        location: 'India',

        startDate: '2026',

        current: true,

        description:
          'Working on modern web applications and digital products while building practical software development experience.',
      },
    ],

    education: [
      {
        id: 'education-001',

        institution: 'NIIT University',

        degree: 'Bachelor of Technology',

        field: 'Computer Science',

        startDate: '2025',

        current: true,

        description:
          'Studying computer science with interests in software development, healthcare technology, and digital products.',
      },
    ],

    research: [],

    connections: 128,

    followers: 164,

    verified: false,
  },

  {
    id: 'user-002',

    name: 'Dr. Ananya Sharma',

    initials: 'AS',

    role: 'clinical',

    headline: 'Clinical Pharmacist',

    organization: 'CityCare Hospital',

    location: 'Mumbai, Maharashtra',

    bio:
      'Clinical pharmacist focused on medication safety, pharmacovigilance, and patient care.',

    skills: [
      'Clinical Pharmacy',
      'Pharmacovigilance',
      'Medication Safety',
      'Patient Care',
    ],

    interests: [
      'Patient Safety',
      'Clinical Research',
      'Pharmacovigilance',
    ],

    experience: [],

    education: [],

    research: [],

    connections: 842,

    followers: 1240,

    verified: true,
  },

  {
    id: 'user-003',

    name: 'Rahul Mehta',

    initials: 'RM',

    role: 'researcher',

    headline: 'Pharmaceutical Researcher',

    organization: 'Life Sciences Research Institute',

    location: 'Bengaluru, Karnataka',

    bio:
      'Researcher working at the intersection of drug discovery and pharmaceutical sciences.',

    skills: [
      'Drug Discovery',
      'Research',
      'Pharmaceutical Sciences',
      'Scientific Writing',
    ],

    interests: [
      'Drug Discovery',
      'Pharmaceutics',
      'Computational Research',
    ],

    experience: [],

    education: [],

    research: [],

    connections: 623,

    followers: 911,

    verified: true,
  },

  {
    id: 'user-004',

    name: 'Neha Singh',

    initials: 'NS',

    role: 'student',

    headline: 'Pharmacy Student',

    organization:
      'Institute of Pharmaceutical Sciences',

    location: 'Pune, Maharashtra',

    bio:
      'Pharmacy student exploring clinical research, pharmacology, and healthcare innovation.',

    skills: [
      'Pharmacology',
      'Clinical Research',
      'Scientific Writing',
    ],

    interests: [
      'Clinical Research',
      'Pharmacology',
      'Healthcare',
    ],

    experience: [],

    education: [],

    research: [],

    connections: 241,

    followers: 312,

    verified: false,
  },

  {
    id: 'user-005',

    name: 'Dr. Vikram Rao',

    initials: 'VR',

    role: 'educator',

    headline: 'Professor of Pharmacy',

    organization:
      'National Institute of Pharmacy',

    location: 'Hyderabad, Telangana',

    bio:
      'Educator and researcher interested in advancing pharmacy education and practice.',

    skills: [
      'Pharmacy Education',
      'Research',
      'Pharmacology',
      'Mentoring',
    ],

    interests: [
      'Education',
      'Research',
      'Pharmacy Practice',
    ],

    experience: [],

    education: [],

    research: [],

    connections: 1102,

    followers: 2410,

    verified: true,
  },
]