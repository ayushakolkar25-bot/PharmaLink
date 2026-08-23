export interface Community {
  id: string
  name: string
  description: string
  category:
    | 'clinical'
    | 'research'
    | 'industry'
    | 'students'
    | 'education'
    | 'careers'
  members: number
  discussions: number
  tags: string[]
  featured: boolean
}

export const communities: Community[] = [
  {
    id: 'community-001',
    name: 'Clinical Pharmacy',
    description:
      'A professional community for discussions around clinical pharmacy practice, patient care, and medication management.',
    category: 'clinical',
    members: 8420,
    discussions: 1260,
    tags: [
      'Clinical Pharmacy',
      'Patient Care',
      'Medication Safety',
    ],
    featured: true,
  },
  {
    id: 'community-002',
    name: 'Pharmacy Research Network',
    description:
      'Connect with researchers and professionals discussing pharmaceutical research, publications, and collaboration.',
    category: 'research',
    members: 6340,
    discussions: 920,
    tags: [
      'Research',
      'Publications',
      'Collaboration',
    ],
    featured: true,
  },
  {
    id: 'community-003',
    name: 'Pharmacy Students',
    description:
      'A space for pharmacy students to share experiences, ask questions, find opportunities, and learn together.',
    category: 'students',
    members: 12400,
    discussions: 2180,
    tags: [
      'Students',
      'Education',
      'Careers',
    ],
    featured: true,
  },
  {
    id: 'community-004',
    name: 'Pharmaceutical Industry',
    description:
      'Discussions about pharmaceutical companies, manufacturing, quality, R&D, and industry careers.',
    category: 'industry',
    members: 7180,
    discussions: 1040,
    tags: [
      'Industry',
      'Pharma',
      'R&D',
      'Manufacturing',
    ],
    featured: true,
  },
  {
    id: 'community-005',
    name: 'Pharmacy Careers',
    description:
      'Career discussions, job opportunities, internships, mentorship, and professional development.',
    category: 'careers',
    members: 9850,
    discussions: 1740,
    tags: [
      'Jobs',
      'Internships',
      'Career Development',
    ],
    featured: true,
  },
  {
    id: 'community-006',
    name: 'Pharmacy Education',
    description:
      'A community for educators and learners interested in pharmacy education and teaching.',
    category: 'education',
    members: 4320,
    discussions: 680,
    tags: [
      'Education',
      'Teaching',
      'Learning',
    ],
    featured: false,
  },
]