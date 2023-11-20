import IProject, { getTechnologies } from '@/shared/models/project'
import Project from './project'
import Section from '../section'
import Selectable from '../selectable'

type ProjectsProps = {
  data: IProject[]
}

function Projects({ data }: ProjectsProps) {
  const technologies: string[] = getTechnologies(data)

  return (
    <Section
      id="projects"
      title="Projects"
      description="These are the projects I made during my journey as a tech guy. Hope you like it!"
    >
      <div className="mt-5 flex flex-wrap justify-center gap-5 text-sm max-sm:mt-2 max-sm:text-xs">
        {technologies.map((item, index) => (
          <Selectable key={`technologies-${index}`} active={false}>
            {item}
          </Selectable>
        ))}
      </div>
      <div className="mt-16 flex flex-wrap justify-center gap-8">
        {data.map((project, index) => (
          <Project key={`project-${index}`} {...project} />
        ))}
      </div>
    </Section>
  )
}

export default Projects
