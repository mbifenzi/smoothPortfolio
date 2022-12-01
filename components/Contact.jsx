import React from "react";
import Link from "next/link";
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
  return <Lottie options={defaultOptions} height={500} width={650} />;
}

const Contact = () => {
  return (
    <div id="contact" className="w-full h-fit sm:h-screen bg-slate-200">
      <div className="container mx-auto flex h-full flex-col justify-around align-start">
        <div className="flex justify-center items-center w-full" data-aos="zoom-in">
          <CoronaVirus />
        </div>
        <div className="flex flex-col md:flex-row">
          <h1  className="text-[150px] sm:text-[200px] font-bold font-[bifHeader] leading-tight " data-aos="fade-right">
            LET&apos;S <br /> CONNECT
          </h1>
          <div className="w-full flex flex-col justify-center items-center">
            <div className="w-full flex gap-x-10 flex-wrap justify-center items-center" data-aos="fade-left">
              <Link href={"https://github.com/mbifenzi"} target="_blank">
                <GithubLogo
                  className="text-white w-16 h-16 text-5xl rounded-full p-2 hover:text-black \
                      bg-black border border-white-5  hover:bg-opacity-30 hover:rotate-[360deg] transition duration-700"/>
              </Link>
              <Link href={"https://twitter.com/MBifenzi"} target="_blank">
                <TwitterLogo
                  className="text-white w-16 h-16 text-5xl rounded-full p-2 hover:text-black \
                      bg-black border border-white-5  hover:bg-opacity-30 hover:rotate-[360deg] transition duration-700"/>
              </Link>
              <Link href={"https://www.linkedin.com/in/mohamed-bifenzi-83ba51221/"} target="_blank">
                <LinkedinLogo
                  className="text-white w-16 h-16 text-5xl rounded-full p-2 hover:text-black \
                      bg-black border border-white-5  hover:bg-opacity-30 hover:rotate-[360deg] transition duration-700" />
              </Link>
              <Link href={"https://www.instagracom/mohamed_bifenzi/"} target="_blank">
                <InstagramLogo
                  className="text-white w-16 h-16 text-5xl rounded-full p-2 hover:text-black \
                      bg-black border border-white-5  hover:bg-opacity-30 hover:rotate-[360deg] transition duration-700"/>
              </Link>
            </div>
            <div className="flex justify-center items-center" data-aos="fade-left">
              <a
                className="border-black border-2 rounded-2xl my-20 p-2 hover:text-white hover:bg-black hover:bg-opacity-30 duration-300"
                href="mailto:bifenziapple@gmail.com"
              >
                Contact me
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
