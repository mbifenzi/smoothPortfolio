import React, { useEffect, useLayoutEffect, useRef } from "react";
import { motion as m } from "framer-motion";
import Lottie from "react-lottie";
import { gsap } from "gsap/dist/gsap";
import { Flip } from "gsap/dist/Flip";

gsap.registerPlugin(Flip);
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

// const activClass = "card grid grid-cols-1 grid-rows-1 gap-4 order-none h-auto";
// const inactiveClass = "card col-span-2 row-span-2 order-1 h-100% ";
const Project = () => {

  const CardsRef = useRef(null);
  
  const handleClick = (e) => {
    const card = e.currentTarget;
    
    console.log("clicked");
    
    const state = Flip.getState(CardsRef.current);
    const isCardActive = card.classList.contains("active");

    CardsRef.current.forEach((otherCard, otherIndex) => {
      otherCard.classList.remove("active");
      otherCard.classList.remove("inactive");
      if (!isCardActive && card !== otherCard) {
        card.classList.add("inactive");
      }
    });
    if (!isCardActive) {
      card.classList.add("active");
    }
    Flip.from(state, { duration: 1, ease: "expo.out", absolute: true });
  };

  useEffect(() => {
    CardsRef.current = document.querySelectorAll(".card");
  }, []);

  return (
    <div className={`bg-red-100 h-[102rem] md:h-screen w-screen flex justify-center items-center `}>
      <section id="project" className="container mx-auto">
        <div onClick={handleClick} className="card inactive">
          <div className="">
            <img src={listOfProjects[0].image} alt="project" />
            <h1 className="text-2xl font-bold text-center">
              {listOfProjects[0].name}
            </h1>
          </div>
          <p className="text-center">{listOfProjects[0].description}</p>
        </div>
        <div onClick={handleClick} className="card inactive">
          <div>
            <img src={listOfProjects[1].image} alt="project" />
            <h1 className="text-2xl font-bold text-center">
              {listOfProjects[1].name}
            </h1>
          </div>
          <p className="text-center">{listOfProjects[1].description}</p>
        </div>
        <div onClick={handleClick} className="card inactive">
          <div>
            <img src={listOfProjects[2].image} alt="project" />
            <h1 className="text-2xl font-bold text-center">
              {listOfProjects[2].name}
            </h1>
          </div>
          <p className="text-center">{listOfProjects[2].description}</p>
        </div>
        <div onClick={handleClick} className="card inactive">
          <div>
            <img src={listOfProjects[3].image} alt="project" />
            <h1 className="text-2xl font-bold text-center">
              {listOfProjects[3].name}
            </h1>
          </div>
          <p className="text-center">{listOfProjects[3].description}</p>
        </div>
        <div onClick={handleClick} className="card inactive">
          <div>
            <img src={listOfProjects[4].image} alt="project" />
            <h1 className="text-2xl font-bold text-center">
              {listOfProjects[4].name}
            </h1>
          </div>
          <p className="text-center">{listOfProjects[4].description}</p>
        </div>
        <div onClick={handleClick} className="card inactive">
          <div>
            <img src={listOfProjects[5].image} alt="project" />
            <h1 className="text-2xl font-bold text-center">
              {listOfProjects[5].name}
            </h1>
          </div>
          <p className="text-center">{listOfProjects[5].description}</p>
        </div>
        <div onClick={handleClick} className="card inactive">
          <div>
            <img src={listOfProjects[6].image} alt="project" />
            <h1 className="text-2xl font-bold text-center">
              {listOfProjects[6].name}
            </h1>
          </div>
          <p className="text-center">{listOfProjects[6].description}</p>
        </div>
        <div onClick={handleClick} className="card inactive">
          <a href="#project">
            <div>
              <img src={listOfProjects[7].image} alt="project" />
              <h1 className="text-2xl font-bold text-center">
                {listOfProjects[7].name}
              </h1>
            </div>
            <p className="text-center">{listOfProjects[7].description}</p>
          </a>
        </div>

      </section>
    </div>
  );
};
export default Project;
