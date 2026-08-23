export type JobType =
  | 'full-time'
  | 'part-time'
  | 'internship'
  | 'contract'
  | 'collaboration'

export interface Job {
  id: string
  title: string
  organization: string
  location: string
  type: JobType
  workMode: 'on-site' | 'hybrid' | 'remote'
  department: string
  experience: string
  postedAt: string
  description: string
  skills: string[]
  featured: boolean
}

export const jobs: Job[] = [
  {
    id: 'job-001',
    title: 'Clinical Pharmacist',
    organization: 'CityCare Hospital',
    location: 'Mumbai, Maharashtra',
    type: 'full-time',
    workMode: 'hybrid',
    department: 'Clinical Pharmacy',
    experience: '1–3 years',
    postedAt: '2d',
    description:
      'Join a multidisciplinary healthcare team focused on medication safety and patient-centred pharmacy practice.',
    skills: [
      'Clinical Pharmacy',
      'Medication Safety',
      'Patient Care',
    ],
    featured: true,
  },
  {
    id: 'job-002',
    title: 'Research Associate',
    organization: 'Life Sciences Research Institute',
    location: 'Bengaluru, Karnataka',
    type: 'full-time',
    workMode: 'on-site',
    department: 'Drug Discovery',
    experience: '0–2 years',
    postedAt: '3d',
    description:
      'Work with a multidisciplinary research team on pharmaceutical research and early-stage drug discovery.',
    skills: [
      'Research',
      'Drug Discovery',
      'Scientific Writing',
    ],
    featured: true,
  },
  {
    id: 'job-003',
    title: 'Pharmacy Intern',
    organization: 'MedCore Healthcare',
    location: 'Pune, Maharashtra',
    type: 'internship',
    workMode: 'hybrid',
    department: 'Pharmacy Operations',
    experience: 'Students',
    postedAt: '1d',
    description:
      'Gain practical exposure to pharmacy operations, patient services, and healthcare workflows.',
    skills: [
      'Pharmacy Practice',
      'Communication',
      'Healthcare',
    ],
    featured: true,
  },
  {
    id: 'job-004',
    title: 'Regulatory Affairs Associate',
    organization: 'NovaPharm',
    location: 'Hyderabad, Telangana',
    type: 'full-time',
    workMode: 'on-site',
    department: 'Regulatory Affairs',
    experience: '1–3 years',
    postedAt: '5d',
    description:
      'Support regulatory submissions, documentation, and compliance activities across pharmaceutical products.',
    skills: [
      'Regulatory Affairs',
      'Documentation',
      'Compliance',
    ],
    featured: false,
  },
  {
    id: 'job-005',
    title: 'Clinical Research Intern',
    organization: 'CureResearch',
    location: 'Remote',
    type: 'internship',
    workMode: 'remote',
    department: 'Clinical Research',
    experience: 'Students',
    postedAt: '6h',
    description:
      'Support clinical research activities, literature review, documentation, and research coordination.',
    skills: [
      'Clinical Research',
      'Literature Review',
      'Research',
    ],
    featured: true,
  },
]