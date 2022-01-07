import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { DiceContextProvider } from '../context/DiceContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DiceContextProvider>
      <Component {...pageProps} />
    </DiceContextProvider>
  )
}

export default MyApp
