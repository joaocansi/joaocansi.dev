import api from '@/shared/api'
import { getTechnologies } from '@/shared/models/project'
import Project from './project'
import Section from './section'
import Selectable from './selectable'

async function Projects() {
  const projects = await api.getProjects()
  const technologies: string[] = getTechnologies(projects)

  return (
    <Section id="projects">
      <h2 className="text-2md font-black uppercase max-sm:text-md">Projects</h2>
      <p className="w-full max-w-[800px] text-center text-base max-sm:text-sm">
        These are the projects I made during my journey as a tech guy. Hope you
        like it!
      </p>
      <div className="mt-5 flex flex-wrap justify-center gap-5 text-sm max-sm:mt-2 max-sm:text-xs">
        {technologies.map((item, index) => (
          <Selectable key={`technologies-${index}`} active={false}>
            {item}
          </Selectable>
        ))}
      </div>
      <div className="mt-5 flex max-w-2xl flex-wrap gap-10">
        {projects.map((project, index) => (
          <Project key={`project-${index}`} {...project} />
        ))}
      </div>
    </Section>
  )
}

export default Projects
