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
  return <Lottie options={defaultOptions} height={500} width={650} />;
}



const Project = () => {
  return (
    <div className='container bg-red-400 mx-auto h-screen snap-start w-fit flex justify-center items-center'>
      <CoronaVirus />
    </div>
  )
}

export default Project