import React from "react";

import "swiper/css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Link from "next/link";

const listOfProjects = [
  {
    id: 1,
    name: "ft-containers",
    description:
      "I reimplemented some C++ std containers using dynamic array and red black tree.",
    image: "/assets/projects/containers.jpeg",
    link: "",
    github: "",
    technologies: ["C++", "DATA STRUCTURE", "ALGORITHM"],
  },
  {
    id: 2,
    name: "Cub3D",
    description: "This is my first raycasting project, I made it with C",
    image: "/assets/projects/cub3d.png",
    link: "",
    github: "",
    technologies: ["C", "Minilibx"],
  },
  {
    id: 3,
    name: "inception",
    description:
      "i Set up a small infrastructure composed of WordPress with LEMP Stack, (Nginx, MariaDB and PHP) using Docker / Docker-Compose.",
    image: "/assets/projects/inception.jpeg",
    link: "",
    github: "",
    technologies: ["Docker", "Docker-Compose"],
  },
  {
    id: 4,
    name: "MiniShell",
    description: "this is a simple shell implementation, I made it with C",
    image: "/assets/projects/minishell.png",
    link: "",
    github: "",
    technologies: ["C", "UNIX"],
  },
  {
    id: 5,
    name: "Push_swap",
    description: "This is a sorting algorithm project, I made it with C",
    image: "/assets/projects/pushswap.png",
    link: "",
    github: "",
    technologies: ["C", "Sorting Algorithms"],
  },
  {
    id: 6,
    name: "WEBSERV",
    description:
      "A three man project. We wrote our own Http server form scratch using C++.",
    image: "/assets/projects/webserv.jpeg",
    link: "",
    github: "",
    technologies: ["C++", "SOCKETS"],
  },
  {
    id: 7,
    name: "ft-transcendence",
    description:
      "A 42 project. We wrote a full stack web application using React, Node.js, and PostgreSQL.",
    image: "/assets/projects/ft-transcandante.png",
    link: "",
    github: "",
    technologies: ["React", "Node.js", "PostgreSQL", "TypeScript", "Socket.io"],
  },
  {
    id: 8,
    name: "Philosophers",
    description:
      "Three different implementation of the famous dining philosophers problem using mutex and threads",
    image: "/assets/projects/philo.webp",
    link: "",
    github: "",
    technologies: ["C", "Threads", "Mutex"],
  },
];

const Projects = () => {
  return (
    <div className="h-screen bg-red-100 flex justify-center items-center" id="projects">
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper h-screen w-full container mx-auto scroll-smooth" data-aos="zoom-out">
        {listOfProjects.map((project) => (
          <SwiperSlide key={project.id} className="">
            <div key={project.id} className="w-full h-full flex flex-col justify-center items-center ">
            <Link className="flex justify-center items-center flex-col w-2/3 h-fit hover:scale-105 transition duration-500
             bg-black bg-opacity-10 hover:bg-opacity-20 shadow-2xl rounded-b-2xl" href="project">
              <Image src={project.image} alt="item" width={500} height={500} className="w-full" />
              <div key={project.id} className="w-full">
                <div className="w-full border-b-2 border-black">
                  <h3 className="text-center font-bold text-xl">{project.name}</h3>
                </div>
                <p>{project.description}</p>
                <h4 className="font-bold">SKILLS USED :</h4>
                <div className="flex flex-wrap space-x-10 justify-center  ">
                  {project.technologies.map((technology) => (
                    <span  className="">{technology}</span>
                  ))}
                </div>
              </div>
          </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Projects;
