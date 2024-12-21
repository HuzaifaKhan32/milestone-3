"use client"
import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import card1 from "../../../public/card1.jpg"
import card2 from "../../../public/card2.jpg"
import card3 from "../../../public/card3.jpg"
import card4 from "../../../public/card4.jpg"
import card5 from "../../../public/card5.jpg"
import card6 from "../../../public/card6.jpg"
import card7 from "../../../public/card7.jpg"
import card8 from "../../../public/card8.jpg"
import card9 from "../../../public/card9.jpg"

import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import Image from 'next/image'
import { GrInstagram } from 'react-icons/gr'


const teamData = [
    {
        image: card1
    },
    {
        image: card2
    },
    {
        image: card3
    },
    {
        image: card4
    },
    {
        image: card5
    },
    {
        image: card6
    },
    {
        image: card7
    },
    {
        image: card8
    },
    {
        image: card9
    },
]



function TeamPage() {
    return (
        <div className='container max-w-5xl mx-auto'>
            <div className="headings min-h-96 w-full flex justify-center items-center gap-5 flex-col">
                <h4 className='text-[#737373] font-bold text-base'>WHAT WE DO</h4>
                <h1 className='text-[#252B42] font-bold text-6xl max-md:text-5xl max-md:text-center'>Innovation tailored for you</h1>
                <div className='text-sm font-bold text-[#737373] flex justify-between items-center gap-4'>
                    <p className='text-[#252B42]'>Home</p>
                    <IoIosArrowForward />
                    <p>Team</p>
                </div>
            </div>

            <div className='w-full py-20 flex flex-col gap-5'>
                <h1 className='text-[#252B42] font-bold text-4xl text-center pb-20'>Meet Our Team</h1>
                <div className='flex flex-wrap justify-between items-center max-md:justify-center max-md:gap-10'>
                    {teamData.map((img, index) => (
                        <div className='card flex justify-between items-center flex-col gap-6 pb-5 mb-28 max-md:mb-0' key={index}>
                            <Image
                                src={img.image}
                                alt='card1'
                                priority
                                quality={100} />
                            <div className='text-[#252B42] font-bold text-base'>
                                Username
                            </div>
                            <div className='text-[#737373] font-bold'>
                                Profession
                            </div>
                            <div className='flex gap-5'>
                                <FaFacebook className='text-[#23A6F0]' />
                                <FaInstagram className='text-[#23A6F0]' />
                                <FaTwitter className='text-[#23A6F0]' />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='w-full flex justify-center items-center flex-col gap-8'>
                <h1 className='text-center text-4xl text-[#252B42] font-bold'>Start your 14 days free trial</h1>
                <p className='font-sm text-[#737373] w-1/2 text-center max-md:w-full'>Met minim Mollie non desert Alamo est sit cliquey dolor
                    do met sent. RELIT official consequent.</p>
                <button className='px-10 py-4 bg-[#23A6F0] text-white rounded'>Try for free</button>
                <div className="flex justify-between items-center gap-8 p-3">
                    <FaTwitter className='text-3xl text-[#23A6F0]' />
                    <FaFacebook className='text-3xl text-[#395185]' />
                    <GrInstagram className='text-3xl' />
                    <FaLinkedin className='text-3xl text-[#0A66C2]' />
                </div>
            </div>
        </div>
    )
}

export default TeamPage