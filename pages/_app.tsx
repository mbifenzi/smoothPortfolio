import '../styles/globals.css'
import type { AppProps } from 'next/app'
// import types from 'next-typescript'
// import { Head } from 'next/document'
import AOS from 'aos'
import { useEffect } from 'react';


export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);
  return (
    <div className='snap-y snap-mandatory overflow-scroll w-screen h-screen'>
        <Component {...pageProps} />
    </div>
  )
}
