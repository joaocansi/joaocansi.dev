/* eslint-disable tailwindcss/no-custom-classname */
import { ReactNode } from 'react'

type SectionProps = {
  id: string
  title: string
  description: string
  children: ReactNode
  color?: string
  background?: string
}

function Section({
  children,
  title,
  description,
  id,
  background = 'transparent',
  color = 'black',
}: SectionProps) {
  return (
    <section id={id} className={`bg-${background}`}>
      <div className="bg-trans mx-auto flex min-h-screen w-[90%] max-w-screen-2xl flex-col items-center pb-10 pt-8">
        <div className={`text-${color} mb-5 flex flex-col items-center`}>
          <h2
            className={`text-${color} text-2md font-black uppercase max-sm:text-md`}
          >
            {title}
          </h2>
          <p
            className={`text-${color} w-full max-w-[800px] text-center text-base max-sm:text-sm`}
          >
            {description}
          </p>
        </div>
        {children}
      </div>
    </section>
  )
}

export default Section
