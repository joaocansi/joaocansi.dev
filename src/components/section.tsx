import { ReactNode } from 'react'

type SectionProps = {
  id: string
  containerClassName?: string
  contentClassName?: string
  children: ReactNode
}

function Section({
  children,
  id,
  containerClassName = '',
  contentClassName,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`flex min-h-screen flex-col items-center gap-3 py-5 ${containerClassName}`}
    >
      <div
        className={`mx-auto flex min-h-screen w-[95%] max-w-screen-2xl flex-col items-center ${contentClassName}`}
      >
        {children}
      </div>
    </section>
  )
}

export default Section
