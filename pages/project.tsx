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
      <div
        className='w-full h-screen text-center items-center'
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center">
        {/* <CoronaVirus /> */}
        test
      </div>
      <div className='w-full h-screen text-center'
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center" >
        test2
      </div>
      </>
  )
}

export default Project