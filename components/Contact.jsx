import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion as m } from "framer-motion";
import { DiGithubAlt as GithubLogo } from "react-icons/di";
import { FaTwitter as TwitterLogo } from "react-icons/fa";
import { FaLinkedinIn as LinkedinLogo } from "react-icons/fa";
import { FaInstagram as InstagramLogo } from "react-icons/fa";

export const Icona = ({ icon, url, alt }) => {
  return (
    // <a href={url} target="_blank" rel="noreferrer">
    //   {/* <FontAwesomeIcon icon={faGithubAlt} size="3x" alt={alt} /> */}
    //   <FontAwesomeIcon
    //     icon={icon}
    //     size="3x"
    //     alt={alt}
    //     className="text-white w-fit text-5xl rounded-full p-2 hover:text-black \
    //   bg-black border border-white-5 hover:bg-slate-300 hover:bg-opacity-50 \
    //   hover:rotate-[360deg] transition duration-700"
    //   />
    // </a>
    <icon />
  );
};

const Contact = () => {
  return (
    <div className="w-full h-screen bg-slate-200 flex flex-row">
      <div className=" h-full flex flex-col justify-end">
        <m.h1
          animate={{ y: 0 }}
          initial={{ y: "100%" }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className=" md:text-[300px] text-[150px] font-bold font-[bifHeader]  leading-[200px]"
        >
          LET'S
        </m.h1>
        <m.h1
          animate={{ y: 0 }}
          initial={{ y: "100%" }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="md:text-[300px] text-[150px] font-bold font-[bifHeader]"
        >
          CONNECT
        </m.h1>
      </div>
      {/* <div className=""></div> */}
      <div className="w-full flex flex-col justify-center items-center">
        <div className="w-full flex gap-x-10 justify-center items-center">
          <GithubLogo className="text-white w-16 h-16 text-5xl rounded-full p-2 hover:text-black \
                      bg-black border border-white-5  hover:bg-opacity-30 hover:rotate-[360deg] transition duration-700"/>
          <TwitterLogo className="text-white w-16 h-16 text-5xl rounded-full p-2 hover:text-black \
                      bg-black border border-white-5  hover:bg-opacity-30 hover:rotate-[360deg] transition duration-700" />
          <LinkedinLogo className="text-white w-16 h-16 text-5xl rounded-full p-2 hover:text-black \
                      bg-black border border-white-5  hover:bg-opacity-30 hover:rotate-[360deg] transition duration-700" />
          <InstagramLogo className="text-white w-16 h-16 text-5xl rounded-full p-2 hover:text-black \
                      bg-black border border-white-5  hover:bg-opacity-30 hover:rotate-[360deg] transition duration-700" />
        </div>
        <div className="flex justify-center items-center" >
          <a className="border-black border-2 rounded-2xl my-20 p-2 hover:text-white hover:bg-black hover:bg-opacity-30 duration-300" href="mailto:bifenziapple@gmail.com">Contact me</a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
