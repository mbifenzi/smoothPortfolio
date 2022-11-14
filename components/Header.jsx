import React from 'react'
import Lottie from "react-lottie";
import animationData from "../assets/lottie/meditating-man.json";

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
        <div className='h-screen w-full bg-orange-100'>
            <div className='hidden w-full sm:h-2/3 h-20 sm:flex  justify-center items-center'>
                <CoronaVirus />
            </div>
            <div className='sm:h-fit h-full flex sm:flex-row flex-col justify-end items-end pb-6'>
                <div className="w-full flex flex-col">
                    <h1 className="md:text-[200px] text-[150px] font-bold font-[bifHeader]  leading-[100px]">CREATIVE</h1>
                    <h1 className="md:text-[200px] text-[150px] font-bold font-[bifHeader]">DEVELOPER</h1>
                </div>
                <div className='flex justify-start items-start' >
                    <h1 className="text-justify p-2 sm:pb-16 pb-0">I AM A DEVELOPER AND UX/UI DESIGNER BASED IN MOROCCO. I HAVE MANY YEARS OF EXPERIENCE IN CONSULTING IN ALL AREAS OF DIGITAL. I LOVE MEDITATION, MINIMALISM IS MY RELIGION</h1>
                </div>
            </div>
        </div>
    )
}

export default Header