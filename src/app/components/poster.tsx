import React from 'react'
import shopHero from "../../../public/muflurGirl.png"
import Image from 'next/image'

function Poster() {
    return (
        <>
            <div className="main-container text-black w-full h-[42.5rem] overflow-hidden">

                <div className="flex items-center flex-row-reverse md:gap-4 gap-8 font-[sans-serif] w-full px-20">
                    <div className="hero-content max-w-[65.5rem] mx-auto flex flex-col justify-start items-start py-28 gap-8 sm:gap-6 md:gap-6 px-4 h-screen">

                        <div className="text-xl text-[#BDBDBD]">
                            <p>Summer 2020</p>
                        </div>
                        <div className="font-bold text-[2.5rem] whitespace-normal">
                            <h1>Part of the Neural</h1>
                            <h1>Universe</h1>
                        </div>
                        <div className="text-sm md:text-lg text-[#737373]">
                            <h3>{`We know how large objects act,`}</h3>
                            <h3>{`but think on a small scale`}</h3>
                        </div>
                        <div className=" flex gap-3 items-center">
                            <button className="px-10 py-3 md:h-16 text-white bg-[#2DC071] rounded flex justify-center items-center text-lg md:text-2xl font-bold">Buy Now</button>
                        <button className="px-10 py-3 md:h-16 text-[#2DC071] border-2 border-[#2DC071] rounded flex justify-center items-center text-lg md:text-2xl font-bold">Read More</button>

                        </div>
                    </div>
                    <div className="flex justify-start items-center ">
                        <Image src={shopHero} alt='ShopHero' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Poster;