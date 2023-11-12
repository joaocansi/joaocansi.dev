import { type ReactNode } from 'react'
import Header from './header'

interface ContainerProps {
  children: ReactNode
}

function Container({ children }: ContainerProps) {
  return (
    <main className="mx-auto min-h-screen w-[95%] max-w-screen-2xl">
      <Header />
      {children}
    </main>
  )
}

export default Container
