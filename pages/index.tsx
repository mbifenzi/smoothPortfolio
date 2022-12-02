import About from '../components/About'
import Header from '../components/Header'
import Projects from '../components/Projects.jsx'
import Contact from '../components/Contact'



export default function Home() {
  return (
    <div className='scroll-smooth' style={{scrollBehavior:'smooth'}}>
      <Header />
      <About />
      <Projects />
      <Contact />
    </div>
  )
}
