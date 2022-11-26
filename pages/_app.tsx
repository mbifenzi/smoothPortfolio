import '../styles/globals.css'
import type { AppProps } from 'next/app'
// import types from 'next-typescript'
// import { Head } from 'next/document'
import AOS from 'aos'
import 'aos/dist/aos.css';
import { useEffect } from 'react';


export default function App({ Component, pageProps }: AppProps) {
  <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
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
