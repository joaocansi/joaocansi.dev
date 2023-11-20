import { type ReactNode } from 'react'
import { Poppins } from 'next/font/google'
import Header from './header'

interface ContainerProps {
  children: ReactNode
}

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
})

function Container({ children }: ContainerProps) {
  return (
    <div className={poppins.className}>
      <Header />
      <main>{children}</main>
    </div>
  )
}

export default Container
