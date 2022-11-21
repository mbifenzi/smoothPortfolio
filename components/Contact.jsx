import React from "react";
import Image from "next/image";
import { motion as m } from "framer-motion";
import Lottie from "react-lottie";
import { DiGithubAlt as GithubLogo } from "react-icons/di";
import { FaTwitter as TwitterLogo } from "react-icons/fa";
import { FaLinkedinIn as LinkedinLogo } from "react-icons/fa";
import { FaInstagram as InstagramLogo } from "react-icons/fa";
import animationData from "../assets/lottie/contact.json";

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

const Contact = () => {
  return (
    <div id="contact" className="snap-start w-full h-fit sm:h-screen bg-slate-200">
      <div className="container mx-auto flex h-full flex-col justify-around align-start">
        <m.div initial={{y:+200}} whileInView={{y:0}} viewport={{once:true}} transition={{ duration: 1.2 }} className="flex justify-center items-center">
          <Image src="/assets/lottie/contact-us.gif" width={400} height={400} />
        </m.div>
        <div className="flex flex-col md:flex-row">
          <m.h1 initial={{x:-200}} whileInView={{x:0}} viewport={{once:true}} transition={{ duration: 1.2 }} className="  text-[150px] sm:text-[200px] font-bold font-[bifHeader] leading-tight ">
            LET&apos;S <br /> CONNECT
          </m.h1>
          <div className="w-full flex flex-col justify-center items-center">
            <m.div initial={{x:+200}} whileInView={{x:0}} viewport={{once:true}} transition={{ duration: 1.2 }} className="w-full flex gap-x-10 flex-wrap justify-center items-center">
              <GithubLogo
                className="text-white w-16 h-16 text-5xl rounded-full p-2 hover:text-black \
                      bg-black border border-white-5  hover:bg-opacity-30 hover:rotate-[360deg] transition duration-700"/>
              <TwitterLogo
                className="text-white w-16 h-16 text-5xl rounded-full p-2 hover:text-black \
                      bg-black border border-white-5  hover:bg-opacity-30 hover:rotate-[360deg] transition duration-700"/>
              <LinkedinLogo
                className="text-white w-16 h-16 text-5xl rounded-full p-2 hover:text-black \
                      bg-black border border-white-5  hover:bg-opacity-30 hover:rotate-[360deg] transition duration-700" />
              <InstagramLogo
                className="text-white w-16 h-16 text-5xl rounded-full p-2 hover:text-black \
                      bg-black border border-white-5  hover:bg-opacity-30 hover:rotate-[360deg] transition duration-700"
              />
            </m.div>
            <m.div initial={{x:200}} whileInView={{x:0}} viewport={{once:true}} transition={{ duration: 1.4 }} className="flex justify-center items-center">
              <a
                className="border-black border-2 rounded-2xl my-20 p-2 hover:text-white hover:bg-black hover:bg-opacity-30 duration-300"
                href="mailto:bifenziapple@gmail.com"
              >
                Contact me
              </a>
            </m.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
