import '../styles/globals.css'
import type { AppProps } from 'next/app'
// import { Head } from 'next/document'

export default function App({ Component, pageProps }: AppProps) {

  return (
    <div className='snap-y snap-mandatory overflow-scroll w-screen h-screen' >
        <Component {...pageProps} />
    </div>
  )
}
