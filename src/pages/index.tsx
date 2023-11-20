import Contact from '@/components/contact'
import Home from '@/components/home'
import Projects from '@/components/projects'
import api from '@/shared/api'
import Project from '@/shared/models/project'
import { GetServerSideProps } from 'next'

type IndexProps = {
  projects: Project[]
}

export default function Index({ projects }: IndexProps) {
  return (
    <div>
      <Home />
      <Projects data={projects} />
      {/* <Posts /> */}
      <Contact />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const projects = await api.getProjects()
  return {
    props: {
      projects,
    },
  }
}
