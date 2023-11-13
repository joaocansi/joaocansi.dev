import clsx from 'clsx'

/* eslint-disable prettier/prettier */
const objects = ['All', 'Node', 'React', 'Docker', 'Terraform']

function Projects() {
  return (
    <section
      id="projects"
      className={clsx('flex min-h-screen flex-col items-center gap-3 py-5')}
    >
      <h2 className={clsx('text-2md font-black uppercase', 'max-sm:text-md')}>Projects</h2>
      <p className={clsx('w-full max-w-[800px] text-center text-base', 'max-sm:text-sm')}>
        These are my projects I made during my journey as a tech guy. Hope you
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
    </section>
  )
}

export default Projects
