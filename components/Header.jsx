import React from "react";
import Lottie from "react-lottie";
import animationData from "../assets/lottie/meditating-man.json";
import { motion as m } from "framer-motion";
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

const Header = () => {
  return (
    <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="h-fit w-full bg-orange-100">
        <div className="hidden w-full sm:h-2/3 h-20 sm:flex  justify-center items-center">
          <CoronaVirus />
        </div>
        <div className=" sm:h-fit h-full flex sm:flex-row flex-col justify-end items-end pb-6">
          <div className="w-full flex flex-col ">
            <m.h1
              animate={{ y: 0 }}
              initial={{ y: "100%" }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className=" md:text-[300px] text-[150px] font-bold font-[bifHeader]  leading-[200px]"
            >
              CREATIVE
            </m.h1>
            <m.h1
              animate={{ y: 0 }}
              initial={{ y: "100%" }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="md:text-[300px] text-[150px] font-bold font-[bifHeader]"
            >
              DEVELOPER
            </m.h1>
          </div>
          <div className="flex justify-start items-start overflow-hidden">
            <m.h1
              animate={{ y: 0 }}
              initial={{ y: "100%" }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-justify p-2 sm:pb-24 pb-0"
            >
              I AM A DEVELOPER AND UX/UI DESIGNER BASED IN MOROCCO. I HAVE MANY
              YEARS OF EXPERIENCE IN CONSULTING IN ALL AREAS OF DIGITAL. I LOVE
              MEDITATION, MINIMALISM IS MY RELIGION.
            </m.h1>
          </div>
          <div>
          </div>
        </div>
      </div>
    </m.div>
  );
};

export default Header;
