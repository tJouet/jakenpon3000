import type { AppProps } from 'next/app'
import { Coiny } from '@next/font/google'
import '../styles/globals.scss'

const coinyFont = Coiny({
  weight: "400",
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={coinyFont.className}>
      <Component {...pageProps} />
    </main>
  )
}
