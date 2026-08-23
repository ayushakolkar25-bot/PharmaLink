export type PostType =
  | 'post'
  | 'research'
  | 'opportunity'
  | 'discussion'

export interface Post {
  id: string
  authorId: string
  type: PostType
  content: string
  createdAt: string
  tags: string[]
  reactions: number
  comments: number
  shares: number
  saved: boolean
  media?: {
    type: 'image' | 'document'
    url: string
    title?: string
  }
  opportunity?: {
    title: string
    organization: string
    location: string
    employmentType?: string
  }
  research?: {
    title: string
    field: string
    journal?: string
  }
}

export const posts: Post[] = [
  {
    id: 'post-001',
    authorId: 'user-002',
    type: 'research',
    content:
      'Excited to share our latest work on improving medication safety in clinical pharmacy practice. Looking forward to connecting with professionals interested in pharmacovigilance and patient safety.',
    createdAt: '2h',
    tags: [
      'Pharmacovigilance',
      'ClinicalPharmacy',
      'PatientSafety',
    ],
    reactions: 24,
    comments: 8,
    shares: 3,
    saved: false,
    research: {
      title:
        'Improving Medication Safety Through Clinical Pharmacy Practice',
      field: 'Clinical Pharmacy',
      journal: 'Journal of Pharmacy Practice',
    },
  },
  {
    id: 'post-002',
    authorId: 'user-003',
    type: 'opportunity',
    content:
      'Looking for collaborators interested in drug discovery and computational approaches to pharmaceutical research.',
    createdAt: '4h',
    tags: [
      'DrugDiscovery',
      'ResearchCollaboration',
    ],
    reactions: 17,
    comments: 5,
    shares: 4,
    saved: false,
    opportunity: {
      title: 'Research Collaboration',
      organization:
        'Life Sciences Research Institute',
      location: 'Remote',
      employmentType: 'Collaboration',
    },
  },
  {
    id: 'post-003',
    authorId: 'user-005',
    type: 'discussion',
    content:
      'What skills do you think pharmacy students should develop before entering the pharmaceutical industry? Would love to hear perspectives from students and professionals.',
    createdAt: '6h',
    tags: [
      'PharmacyCareers',
      'PharmacyStudents',
      'CareerDevelopment',
    ],
    reactions: 41,
    comments: 19,
    shares: 7,
    saved: false,
  },
  {
    id: 'post-004',
    authorId: 'user-004',
    type: 'post',
    content:
      'Just completed a workshop on clinical research methodology. The biggest takeaway: asking the right research question can completely change how you approach a project.',
    createdAt: '8h',
    tags: [
      'ClinicalResearch',
      'PharmacyStudents',
      'Learning',
    ],
    reactions: 31,
    comments: 6,
    shares: 2,
    saved: false,
  },
  {
    id: 'post-005',
    authorId: 'user-003',
    type: 'research',
    content:
      'Interesting developments in computational approaches to early-stage drug discovery. Sharing a few observations from recent work and looking forward to hearing what others in the field are exploring.',
    createdAt: '1d',
    tags: [
      'DrugDiscovery',
      'PharmaceuticalResearch',
      'RAndD',
    ],
    reactions: 52,
    comments: 13,
    shares: 11,
    saved: true,
    research: {
      title:
        'Computational Approaches in Early Drug Discovery',
      field: 'Drug Discovery',
    },
  },
]