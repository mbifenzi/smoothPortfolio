import React from 'react'
import { motion as m } from 'framer-motion'
import animationData from "../assets/lottie/contact.json";
import Lottie from "react-lottie";


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



const Project = () => {
  return (
    <div data-aos="fade-right" className='container bg-red-400 mx-auto h-screen snap-start w-full flex justify-center items-center'>
      <CoronaVirus />
    </div>
  )
}

export default Project