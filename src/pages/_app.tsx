import Container from '@/components/container'
import type { AppProps } from 'next/app'

import '@/styles/globals.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Component {...pageProps} />
    </Container>
  )
}
