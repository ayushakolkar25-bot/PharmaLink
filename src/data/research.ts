export interface ResearchProject {
  id: string
  title: string
  field: string
  description: string
  authorId: string
  organization: string
  status: 'ongoing' | 'completed' | 'seeking-collaborators'
  tags: string[]
  publishedAt: string
  collaboratorsNeeded: boolean
}

export const researchProjects: ResearchProject[] = [
  {
    id: 'research-001',
    title:
      'Improving Medication Safety Through Clinical Pharmacy Practice',
    field: 'Clinical Pharmacy',
    description:
      'Research exploring practical approaches to improving medication safety and reducing preventable medication-related problems.',
    authorId: 'user-002',
    organization: 'CityCare Hospital',
    status: 'completed',
    tags: [
      'Medication Safety',
      'Clinical Pharmacy',
      'Pharmacovigilance',
    ],
    publishedAt: '2026-08-18',
    collaboratorsNeeded: false,
  },
  {
    id: 'research-002',
    title:
      'Computational Approaches in Early Drug Discovery',
    field: 'Drug Discovery',
    description:
      'Exploring computational methods that can support early-stage pharmaceutical research and drug discovery.',
    authorId: 'user-003',
    organization:
      'Life Sciences Research Institute',
    status: 'ongoing',
    tags: [
      'Drug Discovery',
      'Computational Research',
      'R&D',
    ],
    publishedAt: '2026-08-20',
    collaboratorsNeeded: true,
  },
  {
    id: 'research-003',
    title:
      'Pharmacovigilance Practices in Clinical Settings',
    field: 'Pharmacovigilance',
    description:
      'A study examining approaches to adverse drug reaction reporting and medication safety within clinical environments.',
    authorId: 'user-002',
    organization: 'CityCare Hospital',
    status: 'ongoing',
    tags: [
      'Pharmacovigilance',
      'Adverse Drug Reactions',
      'Patient Safety',
    ],
    publishedAt: '2026-08-12',
    collaboratorsNeeded: true,
  },
  {
    id: 'research-004',
    title:
      'Emerging Trends in Pharmaceutical Biotechnology',
    field: 'Pharmaceutical Biotechnology',
    description:
      'An exploration of emerging biotechnology approaches and their potential applications in pharmaceutical development.',
    authorId: 'user-005',
    organization:
      'National Institute of Pharmacy',
    status: 'seeking-collaborators',
    tags: [
      'Biotechnology',
      'Pharmaceutical Research',
      'Innovation',
    ],
    publishedAt: '2026-08-10',
    collaboratorsNeeded: true,
  },
]