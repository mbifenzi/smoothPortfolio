import React from 'react'
// import { motion as m } from 'framer-motion'
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
    <>
      <div className='w-full text-center items-center'>
        <div className='h-screen'>
          <p data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000" className='text-4xl'>twista</p>
        </div>
        <div className='h-screen'>
          <p data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000" className='text-4xl'>twisto</p>
        </div>
      </div>
    </>
  )
}

export default Project