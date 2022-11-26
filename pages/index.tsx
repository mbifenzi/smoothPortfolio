// import styles from '../styles/Home.module.css'

import About from '../components/About'
import Header from '../components/Header'
import Projects from '../components/Projects.jsx'
import Contact from '../components/Contact'
import Head from 'next/head'


export default function Home() {
  return (
    <div>
      <Head>
        <title>MBifenzi</title>
      </Head>
      <Header />
      <About />
      <Projects />
      <Contact />
    </div>
  )
}
