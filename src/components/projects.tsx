/* eslint-disable tailwindcss/migration-from-tailwind-2 */
import api from '@/shared/api'
import clsx from 'clsx'

/* eslint-disable prettier/prettier */
const objects = ['All', 'Node', 'React', 'Docker', 'Terraform']

async function Projects() {
  const projects = await api.getProjects();

  return (
    <section
      id="projects"
      className={clsx('flex min-h-screen flex-col items-center gap-3 py-5')}
    >
      <h2 className={clsx('text-2md font-black uppercase', 'max-sm:text-md')}>Projects</h2>
      <p className={clsx('w-full max-w-[800px] text-center text-base', 'max-sm:text-sm')}>
        These are the projects I made during my journey as a tech guy. Hope you
        like it!
      </p>
      <div className={clsx('mt-5 flex flex-wrap justify-center gap-5 text-sm', 'max-sm:mt-2 max-sm:text-xs')}>
        {objects.map((item, index) => (
          <span
            key={`projects-types-${index}`}
            className={clsx('cursor-pointer rounded-2xl bg-neutral-300 px-5 py-2 transition hover:bg-stone-400')}
          >
            {item}
          </span>
        ))}
      </div>
      <div className={clsx('mt-5 flex max-w-2xl flex-wrap gap-10')}>
        {projects.map((item, index) => (
          <div className={clsx('relative h-[278px] w-[444px] overflow-hidden rounded-3xl')} key={`project-${index}`}>
            <img className={clsx('h-full w-full object-cover')} src={`https:${item.image.fields.file?.url}`} alt="project" />
            <div className={clsx('absolute left-0 top-0 h-full w-full bg-black opacity-50')} />
            <div className={clsx('absolute bottom-0 left-0 bg-black bg-opacity-50 p-4 text-white opacity-0 transition-opacity delay-200 hover:opacity-100')}>
              <h5 className={clsx('text-[32px] font-bold uppercase')}>{item.title}</h5>
              <p className={clsx('text-xs')}>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
