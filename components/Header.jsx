import React from "react";
import Lottie from "react-lottie";
import animationData from "../assets/lottie/meditating-man.json";
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
    <div className="h-screen box-border w-full bg-orange-100 flex flex-col items-center">
      <div className="container mx-auto h-screen flex flex-col justify-between align-start">
        <div className=" w-full flex justify-start h-fit pt-5 ">
          <ul data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="1000"
            className="flex gap-4 justify-center items-center ">
            <Link href={"/"}>
              <li className="">
                <Image
                  src="/assets/logos/mb.png"
                  alt="logo"
                  width={60}
                  height={50} />
              </li>
            </Link>
            <Link href={"#about"}>
              <li>About</li>
            </Link>
            <Link href={"#projects"}>
              <li>Projects</li>
            </Link>
            <Link href={"#contact"}>
              <li>Contact</li>
            </Link>
          </ul>
        </div>
        <div data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1000"
          className="hidden h-fit w-full sm:flex justify-center items-center">
          <CoronaVirus />
        </div>
        <div className=" flex sm:flex-row flex-col justify-end sm:items-end sm:justify-end item-center pt-12 sm:pt-0">
          <div className="">
            <h1 data-aos="fade-up-right"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
              className=" md:text-[200px] text-[150px] font-bold font-[bifHeader] leading-tight">
              CREATIVE
              <br />
              DEVELOPER
            </h1>
          </div>
          <div className="flex justify-start items-start  px-2 ">
            <h1 data-aos="fade-up-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
              className="text-justify  sm:pb-10 pb-0">
              I AM A DEVELOPER AND UX/UI DESIGNER BASED IN MOROCCO. I HAVE MANY
              YEARS OF EXPERIENCE IN CONSULTING IN ALL AREAS OF DIGITAL. I LOVE
              MEDITATION, MINIMALISM IS MY RELIGION.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
