import Image from 'next/image'
import React from 'react'
import men from "../../../public/men.png"
import women from "../../../public/women.png"
import accessories from "../../../public/accessories.png"
import kids from "../../../public/kids.png"

function Editors() {
    return (
        <div className='max-w-[66rem] mx-auto py-20 flex flex-col gap-12'>
            <div className="text flex flex-col gap-3 justify-center items-center">
                <h1 className='text-2xl font-bold'>{`EDITOR'S PICK`}</h1>
                <p className='text-sm text-[#737373]'>{`Problem trying to solve the conflict between`}</p>
            </div>
            <div className="images flex justify-between items-center w-full flex-wrap">
                <div className="1 relative">
                    <Image
                        src={men}
                        alt='men'
                        quality={100}
                        priority />
                    <div className="absolute bg-white w-40 h-12 text-base font-bold z-10 top-[85%] left-6 rounded flex justify-center items-center">
                        <p>MEN</p>
                    </div>
                </div>
                <div className="2 relative">
                    <Image
                        src={women}
                        alt='women'
                        quality={100}
                        priority
                    />
                    <div className="absolute bg-white w-40 h-12 text-base font-bold z-10 top-[85%] left-6 rounded flex justify-center items-center">
                        <p>WOMEN</p>
                    </div>
                </div>
                <div className="3 flex flex-col flex-wrap gap-5">
                    <div className='relative'>
                        <Image
                            src={accessories}
                            alt='accessories'
                            quality={100}
                            priority
                        />
                        <div className="absolute bg-white px-6 py-3 text-base font-bold z-10 top-[70%] left-6 rounded flex justify-center items-center">
                            <p>ACCESSORIES</p>
                        </div>
                    </div>
                    <div className='relative'>
                        <Image
                            src={kids}
                            alt='kids'
                            quality={100}
                            priority
                        />
                        <div className="absolute bg-white px-6 py-3 text-base font-bold z-10 top-[70%] left-6 rounded flex justify-center items-center">
                            <p>KIDS</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Editors