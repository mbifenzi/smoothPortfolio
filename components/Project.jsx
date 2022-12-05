import React, { useEffect, useLayoutEffect, useRef } from "react";
import { motion as m } from "framer-motion";
import Lottie from "react-lottie";
import { gsap } from "gsap";
import { Flip } from "gsap/dist/Flip";

gsap.registerPlugin(Flip);
const listOfProjects = [
  {
    id: 1,
    name: "Ft-Containers",
    description:
      "I reimplemented some C++ std containers using dynamic array and red black tree.",
    image: "/assets/projects/containers.jpeg",
    link: "https://github.com/mbifenzi/ft_containers",
    github: "",
    technologies: ["C++", "DATA STRUCTURE", "ALGORITHM"],
  },
  {
    id: 2,
    name: "Cub3D",
    description: "This is my first raycasting project, I made it with C",
    image: "/assets/projects/cub3d.png",
    link: "https://github.com/mbifenzi/cub3d",
    github: "",
    technologies: ["C", "Minilibx"],
  },
  {
    id: 3,
    name: "Inception",
    description:
      "I Set up a small infrastructure composed of WordPress with LEMP Stack, (Nginx, MariaDB and PHP) using Docker / Docker-Compose.",
    image: "/assets/projects/inception.jpeg",
    link: "https://github.com/mbifenzi/inception",
    github: "",
    technologies: ["Docker", "Docker-Compose"],
  },
  {
    id: 4,
    name: "MiniShell",
    description: "This is a simple shell implementation, I made it with C",
    image: "/assets/projects/minishell.png",
    link: "https://github.com/mbifenzi/minishell",
    github: "",
    technologies: ["C", "UNIX"],
  },
  {
    id: 5,
    name: "Push_swap",
    description: "This is a sorting algorithm project, I made it with C",
    image: "/assets/projects/pushswap.png",
    link: "https://github.com/mbifenzi/push_swap",
    github: "",
    technologies: ["C", "Sorting Algorithms"],
  },
  {
    id: 6,
    name: "WEBSERV",
    description:
      "A three man project. We wrote our own Http server form scratch using C++.",
    image: "/assets/projects/webserv.jpeg",
    link: "https://github.com/mbifenzi/webserv",
    github: "",
    technologies: ["C++", "SOCKETS"],
  },
  {
    id: 7,
    name: "Ft-Transcendence",
    description:
      "A 42 project. We wrote a full stack web application using ReactJS, NestJS, and PostgreSQL.",
    image: "/assets/projects/ft-transcandante.png",
    link: "https://github.com/mbifenzi/ft-transgender",
    github: "",
    technologies: ["ReactJS", "NestJS", "PostgreSQL", "TypeScript", "Socket.io"],
  },
];
const theHref =
  "text-center border-black rounded-lg border-4 bg-slate-300 hover:bg-slate-400 transition duration-300 w-[10em]";
const Project = () => {
  const handleClick = (e) => {
    const Cards = document.querySelectorAll(".card");
    const card = e.currentTarget;
    console.log(card);

    const state = Flip.getState(Cards);
    const isCardActive = card.classList.contains("active");

    Cards.forEach((otherCard, otherIndex) => {
      otherCard.classList.remove("active");
      otherCard.classList.remove("inactive");
      if (!isCardActive && card !== otherCard) {
        otherCard.classList.add("inactive");
      }
    });
    if (!isCardActive) {
      card.classList.add("active");

    }
    Flip.from(state, { duration: 1, ease: "expo.out", absolute: true });
  };

  useEffect(() => {
    // Cards = document.querySelectorAll(".card");
  }, []);

  return (
    <div id="projects" className="bg-red-100 md:h-[90em] h-[110em] w-screen">
      <section data-aos="zoom-in" className="container h-4/5 mx-auto pt-10">
        <div onClick={handleClick} className="card">
          <div className="">
            <img src={listOfProjects[0].image} alt="project" />
            <h1 className="text-2xl font-bold text-center">
              {listOfProjects[0].name}
            </h1>
          </div>
          <div className="flex  flex-col justify-around h-3/4 items-center ">
            <p className="text-center">{listOfProjects[0].description} </p>
            <a
              href={`${listOfProjects[0].link}`}
              target="_blank"
              className={`${theHref}`}
            >
              Show On Github
            </a>
          </div>
        </div>
        <div onClick={handleClick} className="card ">
          <div>
            <img src={listOfProjects[1].image} alt="project" />
            <h1 className="text-2xl font-bold text-center">
              {listOfProjects[1].name}
            </h1>
          </div>
          <div className="flex  flex-col justify-around h-3/4 items-center">
            <p className="text-center">{listOfProjects[1].description} </p>
            <a
              href={`${listOfProjects[1].link}`}
              target="_blank"
              className={`${theHref}`}
            >
              Show On Github
            </a>
          </div>
        </div>
        <div onClick={handleClick} className="card ">
          <div>
            <img src={listOfProjects[2].image} alt="project" />
            <h1 className="text-2xl font-bold text-center">
              {listOfProjects[2].name}
            </h1>
          </div>
          <div className="flex  flex-col justify-around h-3/4 items-center">
            <p className="text-center">{listOfProjects[2].description} </p>
            <a
              href={`${listOfProjects[2].link}`}
              target="_blank"
              className={`${theHref}`}
            >
              Show On Github
            </a>
          </div>
        </div>
        <div onClick={handleClick} className="card ">
          <div>
            <img src={listOfProjects[3].image} alt="project" />
            <h1 className="text-2xl font-bold text-center">
              {listOfProjects[3].name}
            </h1>
          </div>
          <div className="flex  flex-col justify-around h-3/4 items-center">
            <p className="text-center">{listOfProjects[3].description} </p>
            <a
              href={`${listOfProjects[3].link}`}
              target="_blank"
              className={`${theHref}`}
            >
              Show On Github
            </a>
          </div>
        </div>
        <div onClick={handleClick} className="card ">
          <div>
            <img src={listOfProjects[4].image} alt="project" />
            <h1 className="text-2xl font-bold text-center">
              {listOfProjects[4].name}
            </h1>
          </div>
          <div className="flex  flex-col justify-around h-3/4 items-center">
            <p className="text-center">{listOfProjects[4].description} </p>
            <a
              href={`${listOfProjects[4].link}`}
              target="_blank"
              className={`${theHref}`}
            >
              Show On Github
            </a>
          </div>
        </div>
        <div onClick={handleClick} className="card ">
          <div>
            <img src={listOfProjects[5].image} alt="project" />
            <h1 className="text-2xl font-bold text-center">
              {listOfProjects[5].name}
            </h1>
          </div>
          <div className="flex  flex-col justify-around h-3/4 items-center">
            <p className="text-center">{listOfProjects[5].description} </p>
            <a
              href={`${listOfProjects[5].link}`}
              target="_blank"
              className={`${theHref}`}
            >
              Show On Github
            </a>
          </div>
        </div>
        <div onClick={handleClick} className="card ">
          <div>
            <img src={listOfProjects[6].image} alt="project" />
            <h1 className="text-2xl font-bold text-center">
              {listOfProjects[6].name}
            </h1>
          </div>
          <div className="flex  flex-col justify-around h-3/4 items-center">
            <p className="text-center">{listOfProjects[6].description} </p>
            <a
              href={`${listOfProjects[6].link}`}
              target="_blank"
              className={`${theHref}`}
            >
              Show On Github
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Project;
