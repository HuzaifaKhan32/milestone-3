import React from 'react'
import shopHero from "../../../public/shop-hero-2-png-picture-1.png"
import Image from 'next/image'

function ShopHero() {
    return (
        <>
            <div className="main-container bg-[#23856D] text-white w-full h-screen overflow-hidden">

                <div className="grid md:grid-cols-2 items-center md:gap-4 gap-8 font-[sans-serif] max-w-6xl max-md:max-w-md mx-auto ">
                    <div className="hero-content max-w-[65.5rem] mx-auto flex flex-col justify-start items-start text-white py-28 gap-8 sm:gap-6 md:gap-10 px-4 h-screen">

                        <div className="text-xl">
                            <p>Summer 2020</p>
                        </div>
                        <div className="font-bold text-6xl md:text-6xl">
                            <h1>Vita Classic</h1>
                            <h1>Product</h1>
                        </div>
                        <div className="text-sm md:text-lg">
                            <h3>{`We know how large objects act,`}</h3>
                            <h3>{`but think on a small scale`}</h3>
                        </div>
                        <div className=" flex gap-3 items-center">
                            <p className='text-2xl font-bold'>$16.48</p>
                            <button className="px-10 py-3 md:h-16 bg-[#2DC071] rounded flex justify-center items-center text-lg md:text-2xl font-bold">Add To Cart</button>

                        </div>
                    </div>
                    <div className="flex justify-end items-end h-[40rem] w-[26rem] ">
                        <Image src={shopHero} alt='ShopHero'/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ShopHero