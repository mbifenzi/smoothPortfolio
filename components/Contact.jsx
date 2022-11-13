import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubAlt, faTwitter, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons'

export const Icona = ({ icon, url, alt }) => {
    return (
    <a href={url} target="_blank" rel="noreferrer">
    {/* <FontAwesomeIcon icon={faGithubAlt} size="3x" alt={alt} /> */}
    <FontAwesomeIcon icon={icon}  size="3x" alt={alt}
      className=
      "text-white w-fit text-5xl rounded-full p-2 hover:text-black \
      bg-black border border-white-5 hover:bg-slate-300 hover:bg-opacity-50 \
      hover:rotate-[360deg] transition duration-700" 
      />
  </a>
);
}

const Contact = () => {
  return (
    <main>
      <div className="my-96  p-6" id='contact'>
        <h1 className="text-6xl font-bold ">Let's Talk</h1>
      </div>
      <h1 className='text-center text-2xl font-bold p-16'> Find me on :</h1>
      <div className="w-full flex gap-x-10 justify-center items-center">
        
        <Icona
          icon={faGithubAlt}
          url="https://github.com/mbifenzi"
          alt="Github"
        />
        <Icona
          icon={faTwitter}
          url="https://twitter.com/mbifenzi"
          alt="Twitter"
        />
        <Icona
          icon={faLinkedinIn}
          url="https://www.linkedin.com/in/mohamed-bifenzi-83ba51221/"
          alt="Linkedin"
        />

        <Icona
          icon= {faInstagram}
          url="https://www.instagram.com/mohamed_bifenzi/"
          alt="Instagram"
        />
      </div>
    </main>
  )
}

export default Contact