import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import About from '../components/About'
import Header from '../components/Header'
import Projects from '../components/Projects.jsx'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <div>
      <Header />
      <About />
      <Projects />
      <Contact />
    </div>
  )
}
