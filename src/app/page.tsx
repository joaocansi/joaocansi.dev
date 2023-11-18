import Contact from '@/components/contact'
import Home from '@/components/home'
import Projects from '@/components/projects'

export default async function Index() {
  return (
    <>
      <Home />
      <Projects />
      {/* <Posts /> */}
      <Contact />
    </>
  )
}
