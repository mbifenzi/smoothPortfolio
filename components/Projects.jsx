import React from 'react'
import { FaReact } from 'react-icons/fa'
import Image from 'next/image'
import Link from 'next/link'

const listOfProjects = [
  {
    name: 'ft-containers',
    description: 'I reimplemented some C++ std containers using dynamic array and red black tree.',
    image: '/assets/projects/containers.jpeg',
    link: '',
    github: '',
    technologies: ["C++", "DATA STRUCTURE", "ALGORITHM"],
  },
  {
    name: 'Cub3D',
    description: 'This is my first raycasting project, I made it with C',
    image: '/assets/projects/containers.jpeg',
    link: '',
    github: '',
    technologies: ["C", "Minilibx"],
  },
  {
    name: 'inception',
    description: 'i Set up a small infrastructure composed of WordPress with LEMP Stack, (Nginx, MariaDB and PHP) using Docker / Docker-Compose.',
    image: '/assets/projects/containers.jpeg',
    link: '',
    github: '',
    technologies: ["Docker", "Docker-Compose"],
  },
  {
    name: 'MiniShell',
    description: 'this is a simple shell implementation, I made it with C',
    image: '/assets/projects/containers.jpeg',
    link: '',
    github: '',
    technologies: ["C", "UNIX"],
  },
  {
    name: 'Push_swap',
    description: 'This is a sorting algorithm project, I made it with C',
    image: '/assets/projects/containers.jpeg',
    link: '',
    github: '',
    technologies: ["C", "Sorting Algorithms"],
  },
  {
    name: 'WEBSERV',
    description: 'A three man project. We wrote our own Http server form scratch using C++.',
    image: '/assets/projects/containers.jpeg',
    link: '',
    github: '',
    technologies: ["C++", "SOCKETS"],
  },
  {
    name: 'ft-transcendence',
    description: 'A 42 project. We wrote a full stack web application using React, Node.js, and PostgreSQL.',
    image: '/assets/projects/containers.jpeg',
    link: '',
    github: '',
    technologies: ["React", "Node.js", "PostgreSQL", "TypeScript", "Socket.io"],
  },
  {
    name: 'Philosophers',
    description: 'Three different implementation of the famous dining philosophers problem using mutex and threads',
    image: '/assets/projects/containers.jpeg',
    link: '',
    github: '',
    technologies: ["C", "Threads", "Mutex"],
  },
]



const Projects = () => {
  return (
    <div className='h-fit md:h-sreen bg-red-100'>
      <div className='flex justify-center items-center'>
        <h1 className='text-2xl'>SOME OF MY PROJECTS</h1>
      </div>
      <div className='container mx-auto flex justify-center items-center'>
        
        <div className='flex flex-wrap sm:flex-row justify-center items-center '>
          {listOfProjects.map((project) => (
              <Link href={"/alo"} className="border-black border-2 bg-red-200 rounded-xl m-5 sm:w-2/5 w-2/3 md:w-1/4 h-96 hover:scale-105 transition duration-300  text-justify">
              <div className=''>
                <Image src={project.image} alt='project' width={500} height={500} className="rounded-t-lg"/>
                <h1 className='font-bold text-center border-black border-b-2'>
                  {project.name}
                </h1>

                <div className=''>
                 <h1 className=''>Skills used :</h1>  
                 <div className='flex flex-wrap space-x-10 justify-center'>
                  {project.technologies.map((tech) => (
                    <div className=''>
                      <p className=' text-gray-500'>
                        {tech}
                      </p>
                    </div>
                  ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects