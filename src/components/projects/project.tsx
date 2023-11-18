import Project from '@/shared/models/project'

function Project({ description, image, title }: Project) {
  return (
    <div
      className="group relative flex h-[278px] w-full max-w-[444px] cursor-pointer overflow-hidden rounded-3xl"
      key={`project-${title}`}
    >
      <img
        className="h-full w-full object-cover"
        src={`https:${image.fields.file?.url}`}
        alt="project"
      />
      <div className="absolute left-0 top-0 h-full w-full bg-black opacity-50" />
      <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 p-4 text-white opacity-0 transition-opacity delay-100 group-hover:opacity-100">
        <h5 className="text-[32px] font-bold uppercase">{title}</h5>
        <p className="text-xs">{description}</p>
      </div>
    </div>
  )
}

export default Project
