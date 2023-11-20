import IProject, { getTechnologies } from '@/shared/models/project'
import { useEffect, useState } from 'react'
import { getListSimilarity } from '@/shared/helpers'
import Project from './project'
import Section from '../section'
import Selectable from '../selectable'

type ProjectsProps = {
  data: IProject[]
}

function Projects({ data }: ProjectsProps) {
  const technologies: string[] = getTechnologies(data)

  const [projects, setProjects] = useState<IProject[]>(data)
  const [isAllSelected, setIsAllSelected] = useState(true)
  const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>([])

  useEffect(() => {
    if (isAllSelected) setProjects(data)
    else
      setProjects(
        data.filter(
          (item) =>
            getListSimilarity(selectedTechnologies, item.technologies).length >
            0
        )
      )
  }, [isAllSelected, selectedTechnologies])

  const handleTechnologySelection = (technology: string) => {
    if (selectedTechnologies.includes(technology))
      setSelectedTechnologies((prev) => {
        if (prev.length === 1) setIsAllSelected(true)
        return prev.filter((item) => item !== technology)
      })
    else {
      setSelectedTechnologies((prev) => [...prev, technology])
      setIsAllSelected(false)
    }
  }

  const handleAllSelection = () => {
    if (!isAllSelected) {
      setSelectedTechnologies([])
      setIsAllSelected(true)
    } else setIsAllSelected(false)
  }

  const isTechnologyActive = (technology: string) =>
    !isAllSelected && selectedTechnologies.includes(technology)

  return (
    <Section
      id="projects"
      title="Projects"
      description="These are the projects I made during my journey as a tech guy. Hope you like it!"
    >
      <div className="mt-5 flex flex-wrap justify-center gap-5 text-sm max-sm:mt-2 max-sm:text-xs">
        <Selectable
          active={isAllSelected}
          key="technologies-0"
          onClick={handleAllSelection}
        >
          All
        </Selectable>
        {technologies.map((item, index) => (
          <Selectable
            key={`technologies-${index}`}
            active={isTechnologyActive(item)}
            onClick={() => handleTechnologySelection(item)}
          >
            {item}
          </Selectable>
        ))}
      </div>
      <div className="mt-16 flex flex-wrap justify-center gap-8">
        {projects.map((project, index) => (
          <Project key={`project-${index}`} {...project} />
        ))}
      </div>
    </Section>
  )
}

export default Projects
