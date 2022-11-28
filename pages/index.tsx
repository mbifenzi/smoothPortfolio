// import styles from '../styles/Home.module.css'

import About from '../components/About'
import Header from '../components/Header'
import Projects from '../components/Projects.jsx'
import Contact from '../components/Contact'
import Head from 'next/head'


export default function Home() {
  return (
    <div className='snap-y snap-mandatory overflow-scroll w-screen'>
      <Head>
        <title>MBifenzi</title>
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
      </Head>
      <div>
      <Header />
      <About />
      <Projects />
      <Contact />
      </div>
    </div>
  )
}
