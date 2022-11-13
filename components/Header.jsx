import React from 'react'

const Header = () => {
    return (
        <main className='h-screen w-full'>
            <div className="my-96">
                <h1 className="text-[200px] font-bold font-[bifHeader]  leading-[100px]">CREATIVE</h1>
                <h1 className="text-[200px] font-bold font-[bifHeader]">DEVELOPER</h1>
                <div className="w-full absolute right-0">
                    <h1 className="ext-right text-xs md:text-xl sm:text-lg font-bold  gap-5">I AM A DEVELOPER AND UX/UI DESIGNER</h1>
                    <h1 className="text-xs md:text-xl sm:text-l text-justify font-bold "> BASED IN MOROCCO. I HAVE MANY YEARS OF EXPERIENCE IN CONSULTING IN ALL AREAS OF DIGITAL.</h1>
                </div>
            </div>
        </main>
    )
}

export default Header