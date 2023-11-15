import { ReactNode } from 'react'

type SectionProps = {
  id: string
  children: ReactNode
}

function Section({ children, id }: SectionProps) {
  return (
    <section
      id={id}
      className="flex min-h-screen flex-col items-center gap-3 py-5"
    >
      {children}
    </section>
  )
}

export default Section
