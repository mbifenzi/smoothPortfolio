import React from 'react'
import Lottie from "react-lottie";
import animationData from "../assets/lottie/face.json";
import { motion as m } from 'framer-motion';

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
    <m.div initial={{opacity: 0}} animate={{opacity: 1}}>
      <div className='w-full h-screen flex flex-col sm:flex-row justify-center items-center pt-36 sm:pt-0 bg-pink-100'>
        <div className=" p-6 sm:w-1/2 w-full" id='about'>
          <div className='w-fit'>
            <h1 className="text-8xl font-bold font-[bifHeader] text-left-10 text-justify">HELLO I AM BIFENZI</h1>
            <h5 className='text-right font-[bifParagraph]'>mohamed bifenzi</h5>
          </div>
          <h1 className=" md:text-xl sm:text-lg text-justify font-medium ">I AM A FRONT-END DEVELOPER AND UX/UI DESIGNER AND A STUDENT AT @1337 LOCATED IN MOROCCO, I THOROUGHLY ENJOY CREATING NEW THINGS AND I AM ALWAYS LOOKING FOR NEW CHALLENGES, SEEING IDEAS AND CONCEPTS COME TO LIFE IS ONE OF MY FAVORITE PARTS OF THE DEVELOPMENT PROCESS.</h1>
        </div>
        <div className="w-full sm:w-1/2 h-full flex justify-center items-center">
          <CoronaVirus />
        </div>
      </div>
    </m.div>
  )
}

export default About

