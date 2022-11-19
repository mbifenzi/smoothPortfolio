import React from 'react'
import Lottie from "react-lottie";
import animationData from "../assets/lottie/face.json";
import { motion as m } from 'framer-motion';
import Image from 'next/image'


import {FaGit, FaReact} from 'react-icons/fa'
import {FaNodeJs} from 'react-icons/fa'
import {FaDocker} from 'react-icons/fa'
import {FaJs} from 'react-icons/fa'
import {SiNestjs} from 'react-icons/si'
import {TbBrandNextjs} from 'react-icons/tb'





function CoronaVirus() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return <Lottie options={defaultOptions} height={400} width={400} />;
}

const About = () => {
  return (
    <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className= "w-full h-fit sm:h-screen flex flex-col justify-center items-center bg-pink-100 snap-start">
      <div id='about' className='container mx-auto'>
        <div className='  flex flex-col sm:flex-row justify-center items-center pt-36 sm:pt-0'>
          <div className=" p-6 sm:w-1/2 w-full" >
            <div className='w-fit pb-10'>
              <h1 className="text-8xl font-bold font-[bifHeader] text-left-10 text-justify">HELLO I AM BIFENZI</h1>
              <h5 className='text-right font-[bifParagraph]'>mohamed bifenzi</h5>
            </div>
            <h1 className=" md:text-xl sm:text-lg text-left font-normal">I AM A FRONT-END DEVELOPER AND UX/UI DESIGNER AND A STUDENT AT @1337 LOCATED IN MOROCCO, I THOROUGHLY ENJOY CREATING NEW THINGS AND I AM ALWAYS LOOKING FOR NEW CHALLENGES, SEEING IDEAS AND CONCEPTS COME TO LIFE IS ONE OF MY FAVORITE PARTS OF THE DEVELOPMENT PROCESS.</h1>
          </div>
          <div className="w-full sm:w-1/2 h-full flex justify-center items-center">
            <CoronaVirus />
          </div>
        </div>
        <div className='py-10'>
          <h1 className='font-bold text-center'>
            TOOLS AND TECHNOLOGIES I USE:
          </h1>
          <div className='flex flex-wrap justify-center gap-6 py-10'>
            <FaDocker size={"5em"}  className="border-black-100 bg-black bg-opacity-10 hover:bg-opacity-25 transition duration-300 rounded-2xl shadow-2xl -full p-3"/>
            <FaJs size={"5em"} className="border-black-100 bg-black bg-opacity-10 hover:bg-opacity-25 transition duration-300 shadow-2xl rounded-2xl p-3"/>
            <FaNodeJs size={"5em"} className="border-black-100 bg-black bg-opacity-10 hover:bg-opacity-25 transition duration-300 shadow-2xl rounded-2xl p-3"/>
            <SiNestjs size={"5em"} className="border-black-100 bg-black bg-opacity-10 hover:bg-opacity-25 transition duration-300 shadow-2xl rounded-2xl p-3"/>
            <FaReact size={"5em"} className="border-black-100 bg-black bg-opacity-10 hover:bg-opacity-25 transition duration-300 shadow-2xl rounded-2xl p-3"/>
            <TbBrandNextjs size={"5em"} className="border-black-100 bg-black bg-opacity-10 hover:bg-opacity-25 transition duration-300 shadow-2xl rounded-2xl p-3"/>
            <FaGit size={"5em"} className="border-black-100 bg-black bg-opacity-10 hover:bg-opacity-25 transition duration-300 shadow-2xl rounded-2xl p-3"/>
          </div>
        </div>
      </div>
    </m.div>
  )
}

export default About

