import { ImageConstants } from './image.constant'
import { projectNames } from './projects'

interface Member {
  name: string
  role: string
  projectsInvolved: string[]
  image: string
}

const members: Member[] = [
  {
    name: 'Sushil Gyawali',
    role: 'Mobile App Developer',
    projectsInvolved: [projectNames.UNIPLAN],
    image: ImageConstants.MEMBERS.sushilGyawali,
  },
  {
    name: 'Grishmin Karki',
    role: 'Frontend Developer',
    projectsInvolved: [projectNames.A_TO_Z_ECOMMERCE],
    image: ImageConstants.MEMBERS.grishminKarki,
  },
  {
    name: 'Simon Chaudhary',
    role: 'Backend Developer',
    projectsInvolved: [projectNames.INVESTIAA],
    image: ImageConstants.MEMBERS.simonChaudhary,
  },
  {
    name: 'Nirmal Neupane',
    role: 'Fullstack Developer',
    projectsInvolved: [projectNames.INVESTIAA, projectNames.A_TO_Z_ECOMMERCE],
    image: ImageConstants.MEMBERS.nirmalNeupane,
  },
  {
    name: 'Sony Sharma',
    role: 'Marketing and QA',
    projectsInvolved: [],
    image: ImageConstants.MEMBERS.sonySharma,
  },
  {
    name: 'Tej Bahadur Gharti Kshetri',
    role: 'Frontend Developer',
    projectsInvolved: [projectNames.A_TO_Z_ECOMMERCE],
    image: ImageConstants.MEMBERS.tejGharti,
  },
]

members.sort((a, b) => b.projectsInvolved.length - a.projectsInvolved.length)

export { members }
