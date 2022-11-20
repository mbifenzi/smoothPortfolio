import React from "react";
import Lottie from "react-lottie";
import animationData from "../assets/lottie/meditating-man.json";
import { motion as m } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

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
    <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="snap-start h-screen box-border w-full bg-orange-100 flex flex-col items-center">
      <div className="container mx-auto h-screen flex flex-col justify-between align-start">
        <m.div animate={{x:0}} initial={{x:-200}} transition={{ duration:1.2 }} className=" w-full flex justify-start h-fit pt-5 ">
          <ul className="flex gap-4 justify-center items-center ">
            <Link href={"/"}>
              <li className="">
                <Image
                  src="/assets/logos/mb.png"
                  alt="logo"
                  width={60}
                  height={50}/>
              </li>
            </Link>
            <Link href={"#about"} className="scroll-container">
              <li>About</li>
            </Link>
            <Link href={"#projects"}>
              <li>Projects</li>
            </Link>
            <Link href={"#contact"}>
              <li>Contact</li>
            </Link>
          </ul>
        </m.div>
        <div className="hidden h-fit w-full sm:flex justify-center items-center">
          <CoronaVirus />
        </div>
        <div className=" flex sm:flex-row flex-col justify-end sm:items-end sm:justify-end item-center pt-12 sm:pt-0">
          <div className="">
            <m.h1
              animate={{ y: 0 }}
              initial={{ y: "100%" }}
              transition={{ duration:1.2 }}
              className=" md:text-[200px] text-[150px] font-bold font-[bifHeader]  overflow-hidden "
            >
              CREATIVE
              <br />
              DEVELOPER
            </m.h1>
          </div>
          <div className="flex justify-start items-start pb-6 px-2 overflow-hidden">
            <m.h1
              animate={{ y: 0 }}
              initial={{ y: "100%" }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-justify  sm:pb-10 pb-0">
              I AM A DEVELOPER AND UX/UI DESIGNER BASED IN MOROCCO. I HAVE MANY
              YEARS OF EXPERIENCE IN CONSULTING IN ALL AREAS OF DIGITAL. I LOVE
              MEDITATION, MINIMALISM IS MY RELIGION.
            </m.h1>
          </div>
        </div>
      </div>
    </m.div>
  );
};

export default Header;
