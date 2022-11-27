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
      once: false,
      offset: 50,
      duration: 500,
      easing: 'ease-in-out',
      delay: 100,
      
    }
    );
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, []);
  
  return <Component {...pageProps} />

}
