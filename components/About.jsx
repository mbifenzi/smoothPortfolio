import React from 'react'

const About = () => {
  return (
    <div className='w-full h-screen flex flex-col md:flex-row justify-center items-center pt-36 md:pt-0'>
      <div className=" p-6 md:w-1/2 w-full" id='about'>
        <div className='w-fit'>
          <h1 className="text-8xl font-bold font-[bifHeader] text-left-10 text-justify">HELLO I AM BIFENZI</h1>
          <h5 className='text-right font-[bifParagraph]'>mohamed bifenzi</h5>
        </div>
        <h1 className=" md:text-xl sm:text-lg text-justify font-medium ">I AM A FRONT-END DEVELOPER AND UX/UI DESIGNERAND A STUDENT AT @1337 LOCATED IN MOROCCO, I THOROUGHLY ENJOY CREATING NEW THINGS AND I AM ALWAYS LOOKING FOR NEW CHALLENGES, SEEING IDEAS AND CONCEPTS COME TO LIFE IS ONE OF MY FAVORITE PARTS OF THE DEVELOPMENT PROCESS.</h1>
      </div>
      <div className="w-full md:w-1/2 h-full flex justify-center items-center">
        <img src="https://www.nicepng.com/png/detail/302-3029535_male-head-3d-head-model-png.png" alt="developer" className='w-full' />
      </div>
    </div>
  )
}

export default About

