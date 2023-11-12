import { type ReactNode } from 'react'
import Header from './header'

interface ContainerProps {
  children: ReactNode
}

function Container({ children }: ContainerProps) {
  return (
    <main className="container mx-auto min-h-screen">
      <Header />
      {children}
    </main>
  )
}

export default Container
