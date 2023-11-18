import { type ReactNode } from 'react'
import Header from './header'

interface ContainerProps {
  children: ReactNode
}

function Container({ children }: ContainerProps) {
  return (
    <main>
      <Header />
      {children}
    </main>
  )
}

export default Container
