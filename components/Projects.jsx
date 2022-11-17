import React from "react";

import "swiper/css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const listOfProjects = [
  {
    name: "ft-containers",
    description:
      "I reimplemented some C++ std containers using dynamic array and red black tree.",
    image: "/assets/projects/containers.jpeg",
    link: "",
    github: "",
    technologies: ["C++", "DATA STRUCTURE", "ALGORITHM"],
  },
  {
    name: "Cub3D",
    description: "This is my first raycasting project, I made it with C",
    image: "/assets/projects/cub3d.png",
    link: "",
    github: "",
    technologies: ["C", "Minilibx"],
  },
  {
    name: "inception",
    description:
      "i Set up a small infrastructure composed of WordPress with LEMP Stack, (Nginx, MariaDB and PHP) using Docker / Docker-Compose.",
    image: "/assets/projects/inception.jpeg",
    link: "",
    github: "",
    technologies: ["Docker", "Docker-Compose"],
  },
  {
    name: "MiniShell",
    description: "this is a simple shell implementation, I made it with C",
    image: "/assets/projects/minishell.png",
    link: "",
    github: "",
    technologies: ["C", "UNIX"],
  },
  {
    name: "Push_swap",
    description: "This is a sorting algorithm project, I made it with C",
    image: "/assets/projects/pushswap.png",
    link: "",
    github: "",
    technologies: ["C", "Sorting Algorithms"],
  },
  {
    name: "WEBSERV",
    description:
      "A three man project. We wrote our own Http server form scratch using C++.",
    image: "/assets/projects/webserv.jpeg",
    link: "",
    github: "",
    technologies: ["C++", "SOCKETS"],
  },
  {
    name: "ft-transcendence",
    description:
      "A 42 project. We wrote a full stack web application using React, Node.js, and PostgreSQL.",
    image: "/assets/projects/ft-transcandante.png",
    link: "",
    github: "",
    technologies: ["React", "Node.js", "PostgreSQL", "TypeScript", "Socket.io"],
  },
  {
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
    <div className="h-screen bg-red-100 flex justify-center items-center">
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper h-screen w-full"
      >
        {listOfProjects.map((project) => (
          <SwiperSlide className="flex justify-center items-center">
            <div className="w-2/3 h-fit flex flex-col justify-center items-center hover:scale-105 transition duration-500
             bg-black bg-opacity-10 hover:bg-opacity-20 shadow-2xl rounded-b-2xl">
              <img src={project.image} alt="item" className="w-full" />
              <div className="w-full">
                <div className="w-full border-2 border-black">
                  <h3 className="text-center font-bold text-xl">{project.name}</h3>
                </div>
                <p>{project.description}</p>
                <h4 className="font-bold">SKILLS USED :</h4>
                <div className="flex flex-wrap space-x-10 justify-center  ">
                  {project.technologies.map((technology) => (
                    <span className="">{technology}</span>
                  ))}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Projects;
