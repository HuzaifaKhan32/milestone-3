import React from 'react'
import aboutHero from "../../../public/technology 1.png"
import Image from 'next/image'
import video from "../../../public/video.png"
import { FaPlay } from "react-icons/fa";
import card1 from "../../../public/card1.jpg"
import card2 from "../../../public/card2.jpg"
import card3 from "../../../public/card3.jpg"
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import BrandsName from '../components/BrandsName';
import AboutImage from "../../../public/aboutImage.png"


const teamData = [
    {
        image: card1
    },
    {
        image: card2
    },
    {
        image: card3
    }
]

function AboutPage() {
    return (
        <>

            <div className='container max-w-5xl mx-auto min-h-screen'>
                <div className='w-full h-full flex justify-between items-center max-md:flex-col max-md:py-20'>
                    <div className='w-1/2 h-full flex items-start flex-col gap-10 max-md:flex-col max-md:items-center max-md:justify-center max-md:w-full '>
                        <h3 className='font-bold text-base text-[#252B42]'>About Company</h3>
                        <h1 className='text-6xl font-bold text-[#252B42]'>About Us</h1>
                        <p className='text-xl text-[#737373] max-md:text-center'>
                            <p>We know how large objects will act,</p>
                            <p>but things on a small scale</p>
                        </p>
                        <button className='bg-[#23A6F0] text-white px-10 py-4 font-bold rounded'>Get Qoute Now</button>
                    </div>
                    <div className='relative w-1/2 h-full flex items-end justify-end max-md:w-full  max-md:px-10 max-md:justify-center max-md:items-center'>
                        <Image
                            src={aboutHero}
                            alt='Hero-Image'
                            quality={100}
                            priority
                            className='z-50' />
                        <div className="big-ellipse absolute max-md:h-80 max-md:w-80 h-[30rem] w-[30rem] bg-[#FFE9EA] rounded-full max-md:right-[20%] max-md:top-[10%]"></div>
                        <div className="medium-ellipse absolute max-md:h-12 max-md:w-12 h-20 w-20 bg-[#FFE9EA] rounded-full max-md:left-[15%] max-md:top-[10%]"></div>
                        <div className="small-ellipse absolute h-8 w-8 bg-[#FFE9EA] rounded-full max-md:right-[12%] max-md:top-[43%] max-md:w-5 max-md:h-5"></div>
                        <div className="xsmall1-ellipse absolute h-4 w-4 bg-[#977DF4] rounded-full max-md:right-[12%] max-md:top-[20%] max-md:w-3 max-md:h-3"></div>
                        <div className="xsmall2-ellipse absolute h-4 w-4 max-md:w-3 max-md:h-3 bg-[#977DF4] rounded-full max-md:left-[15%] max-md:bottom-[40%]"></div>
                    </div>
                </div>
                <div className='flex justify-between items-center py-6 px-8 max-md:flex-col max-md:py-20'>
                    <div className="left w-1/2 h-full flex flex-col gap-6 items-start max-md:w-full max-md:items-center max-md:justify-center max-md:gap-5">
                        <p className='text-[#E74040] text-sm max-md:font-bold'>Problem trying</p>
                        <p className='font-bold text-2xl text-[#252B42]'>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.</p>
                    </div>
                    <div className="right w-1/2 h-full flex items-center justify-center gap-6 flex-col max-md:w-full">
                        <p></p>
                        <p className='text-[#737373] text-sm'>Problems trying to resolve the conflict between the two major realms of classNameical physics: Newtonian mechanics </p>
                    </div>
                </div>
                <div className='min-h-64 flex justify-between items-center py-20 text-[#252B42] font-bold text-6xl px-14 max-md:w-full max-md:flex-col max-md:items-center max-md:justify-center max-md:py-14 max-md:px-8 max-md:gap-10'>
                    <div className='flex flex-col gap-2 max-md:justify-center max-md:items-center'>
                        <p>15K</p>
                        <p className='text-[#737373] font-bold text-base'>Happy Customers</p>
                    </div>
                    <div className='flex flex-col gap-2 max-md:justify-center max-md:items-center'>
                        <p>150K</p>
                        <p className='text-[#737373] font-bold text-base'>Monthly Visitors</p>
                    </div>
                    <div className='flex flex-col gap-2 max-md:justify-center max-md:items-center'>
                        <p>15</p>
                        <p className='text-[#737373] font-bold text-base'>Countries Worlwide</p>
                    </div>
                    <div className='flex flex-col gap-2 max-md:justify-center max-md:items-center'>
                        <p>100+</p>
                        <p className='text-[#737373] font-bold text-base'>Top Partners</p>
                    </div>
                </div>
                <div className="video flex justify-center items-center py-10 relative max-md:px-10">
                    <Image
                        src={video}
                        alt='Video'
                        className='rounded-3xl max-h-[34rem]' />
                    <button className='play-button bg-[#23A6F0] px-9 py-9 rounded-full absolute top-[50%] left-[50%] '>
                        <FaPlay className='text-white' />
                    </button>
                </div>
                <div className='max-md:px-10'>
                    <div className='py-20 flex justify-center items-center flex-col gap-3'>
                        <h1 className='font-bold text-4xl text-[#252B42]'>Meet Our Team</h1>
                        <p className='w-[33rem] text-center max-md:w-full'>Problems trying to resolve the conflict between
                            the two major realms of classNameical physics: Newtonian mechanics </p>
                    </div>
                    <div className='flex flex-wrap justify-between items-center max-md:justify-center max-md:gap-10'>
                        {teamData.map((img, index) => (
                            <div className='card flex justify-between items-center flex-col gap-6 pb-5' key={index}>
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
                <div className='pt-20 max-md:py-10'>
                    <div className='py-20 flex justify-center items-center flex-col gap-3 max-md:py-14 max-md:px-10'>
                        <h1 className='font-bold text-4xl text-[#252B42] text-center'>Big Companies Are Here</h1>
                        <p className='w-[33rem] text-center max-md:w-full'>Problems trying to resolve the conflict between
                            the two major realms of classNameical physics: Newtonian mechanics </p>
                    </div>
                    <BrandsName />
                </div>
            </div>
            <div className="flex justify-between items-center min-w-screen md:gap-4 gap-8 bg-[#2A7CC7] text-white max-md:px-10 max-md:items-center max-md:justify-center">
                <div className="max-md:order-1 max-md:text-center py-28 pl-48 pr-36 flex flex-col justify-between items-start gap-3 max-md:pl-0 max-md:pr-0 max-md:items-center max-md:justify-center">
                    <h3 className="text-base md:leading-10 font-bold">WORK WITH US</h3>
                    <h1 className='font-bold text-4xl'>{`Now Let’s grow Yours`}</h1>
                    <p className="mt-4 text-sm w-[27.5rem]">The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th </p>
                    <button type="button" className="px-5 py-2.5 mt-8 rounded text-sm outline-none tracking-wide text-white hover:bg-blue-700 border-2">Button</button>
                </div>
                <div className="max-md:hidden">
                    <Image
                        src={AboutImage}
                        alt='About Image'
                        quality={100}
                        priority />
                </div>
            </div>
        </>
    )
}

export default AboutPage

