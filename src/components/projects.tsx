const objects = ['All', 'Node', 'React', 'Docker', 'Terraform']

function Projects() {
  return (
    <section
      id="projects"
      className="flex min-h-screen flex-col items-center gap-3 py-10"
    >
      <h2 className="text-lg font-black uppercase">Projects</h2>
      <p className="w-full max-w-[800px] text-center text-base">
        These are my projects I made during my journey as a tech guy. Hope you
        like it!
      </p>
      <div className="mt-5 flex gap-5 text-sm">
        {objects.map((item, index) => (
          <span
            key={`projects-types-${index}`}
            className="cursor-pointer rounded-2xl bg-neutral-300 px-5 py-2 transition hover:bg-stone-400"
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  )
}

export default Projects
