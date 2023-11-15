import { Asset } from 'contentful'

type Project = {
  title: string
  image: Asset
  github: string
  website: string
  description: string
  technologies: string[]
}

export function getTechnologies(projects: Project[]) {
  const technologies: string[] = []
  projects.forEach((project) => {
    project.technologies.forEach((technology) => {
      if (technologies.includes(technology)) return
      technologies.push(technology)
    })
  })
  return technologies
}
export default Project
