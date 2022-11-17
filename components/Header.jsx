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
    <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className=" h-screen w-full bg-orange-100 flex flex-col">
        <div className="flex justify-start pt-5">
          <ul className="flex gap-4 justify-center items-center ">
            <Link href={"/"}>
              <li className="">
                <Image
                  src="/assets/logos/mb.png"
                  alt="logo"
                  width={60}
                  height={50}
                />
              </li>
            </Link>
            <Link href={"#about"}>
              {" "}
              <li>About</li>{" "}
            </Link>
            <Link href={"#projects"}>
              {" "}
              <li>Projects</li>{" "}
            </Link>
            <Link href={"#contact"}>
              {" "}
              <li>Contact</li>{" "}
            </Link>
          </ul>
        </div>
        <div className="hidden w-full sm:flex justify-center items-center">
          <CoronaVirus />
        </div>
        <div className="h-full flex sm:flex-row flex-col justify-end sm:items-end sm:justify-end items-start">
          <div className="">
            <m.h1
              animate={{ y: 0 }}
              initial={{ y: "100%" }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className=" md:text-[200px] text-[150px] font-bold font-[bifHeader] leading-tight overflow-hidden "
            >
              CREATIVE
              <br />
              DEVELOPER
            </m.h1>
          </div>
          <div className="flex justify-start items-start overflow-hidden">
            <m.h1
              animate={{ y: 0 }}
              initial={{ y: "100%" }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-justify p-2 sm:pb-10 pb-0">
              I AM A DEVELOPER AND UX/UI DESIGNER BASED IN MOROCCO. I HAVE MANY
              YEARS OF EXPERIENCE IN CONSULTING IN ALL AREAS OF DIGITAL. I LOVE
              MEDITATION, MINIMALISM IS MY RELIGION.
            </m.h1>
          </div>
          <div></div>
        </div>
      </div>
    </m.div>
  );
};

export default Header;
