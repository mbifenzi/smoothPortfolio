import React from 'react'
import Lottie from "react-lottie";
import animationData from "../assets/lottie/yoga.json";

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
        <div className='h-screen w-full flex md:flex-row flex-col justify-end items-end pb-32'>
            {/* <div className='w-full md:w-1/2 h-full flex justify-center items-center'>
                <CoronaVirus />
            </div> */}
            <div>
                <div className="w-full flex flex-col">
                    <h1 className="md:text-[200px] text-[150px] font-bold font-[bifHeader]  leading-[100px]">CREATIVE</h1>
                    <h1 className="md:text-[200px] text-[150px] font-bold font-[bifHeader]">DEVELOPER</h1>
                </div>
                <div className='flex justify-start items-start' >
                    <h1 className="text-justify p-2 md:pb-16 pb-0">I AM A DEVELOPER AND UX/UI DESIGNER BASED IN MOROCCO. I HAVE MANY YEARS OF EXPERIENCE IN CONSULTING IN ALL AREAS OF DIGITAL.</h1>
                </div>
            </div>
        </div>
    )
}

export default Header