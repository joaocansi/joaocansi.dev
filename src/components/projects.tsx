const Projects = () => {
  return (
    <section id="projects" className="flex items-center flex-col min-h-screen py-10 gap-3">
      <h2 className="font-black text-lg uppercase">Projects</h2>
      <p className="w-full max-w-[800px] text-center text-base">
        These are my projects I made during my journey 
        as a tech guy. Hope you like it!
      </p>
      <div className="mt-5 flex gap-5 text-sm">
        <span className="py-2 px-5 bg-neutral-300 rounded-2xl cursor-pointer hover:bg-stone-400 transition">All</span>
        <span className="py-2 px-5 bg-neutral-300 rounded-2xl cursor-pointer hover:bg-stone-400 transition">Node</span>
        <span className="py-2 px-5 bg-neutral-300 rounded-2xl cursor-pointer hover:bg-stone-400 transition">React</span>
        <span className="py-2 px-5 bg-neutral-300 rounded-2xl cursor-pointer hover:bg-stone-400 transition">Docker</span>
        <span className="py-2 px-5 bg-neutral-300 rounded-2xl cursor-pointer hover:bg-stone-400 transition">Terraform</span>
      </div>
    </section>
  )
}

export default Projects;