import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar'
import About from '../components/About'
import Header from '../components/Header'
import Projects from '../components/Projects.jsx'
import Contact from '../components/Contact'


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Projects />
      {/* <Contact /> */}
      <Component {...pageProps} />
    </>
  )
}
