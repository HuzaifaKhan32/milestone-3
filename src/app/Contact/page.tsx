import Image from 'next/image'
import React from 'react'
import contactImage from "../../../public/contactImage.png"
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { GrInstagram } from 'react-icons/gr'
import { PiArrowBendRightDownBold } from "react-icons/pi";
import { FiPhone } from "react-icons/fi";
import { BsEnvelope } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";


function ContactPage() {
    return (
        <div className='container max-w-5xl mx-auto min-h-screen'>
            <div className='w-full h-full flex justify-between items-center max-md:flex-col max-md:py-20 max-md:gap-9'>
                <div className='w-1/2 h-full flex items-start flex-col gap-10 max-md:flex-col max-md:items-center max-md:justify-center max-md:w-full '>
                    <h3 className='font-bold text-base text-[#252B42]'>Contact us</h3>
                    <h1 className='text-6xl font-bold text-[#252B42] max-md:text-center max-md:text-4xl'>Get in touch today!</h1>
                    <p className='text-xl text-[#737373] max-md:text-center'>
                        <p>We know how large objects will act,</p>
                        <p>but things on a small scale</p>
                    </p>
                    <button className='bg-[#23A6F0] text-white px-10 py-4 font-bold rounded'>Get Qoute Now</button>
                    <div className='flex flex-col gap-5 text-2xl font-bold text-[#252B42]'>
                        <h3>Phone ; +451 215 215 </h3>
                        <h3>Fax : +451 215 215</h3>
                    </div>
                    <div className="flex justify-between items-center gap-8 p-3">
                        <FaTwitter className='text-3xl text-[#252B42]' />
                        <FaFacebook className='text-3xl text-[#252B42]' />
                        <GrInstagram className='text-3xl text-[#252B42]' />
                        <FaLinkedin className='text-3xl text-[#252B42]' />
                    </div>
                </div>
                <div className='relative w-1/2 h-full flex items-end justify-end max-md:w-full  max-md:px-10 max-md:justify-center max-md:items-center'>
                    <Image
                        src={contactImage}
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
            <div className='w-full min-h-screen py-28 flex flex-col justify-between items-center gap-20'>
                <div className='text-center flex justify-center items-center flex-col'>
                    <p>VISIT OUR OFFICE</p>
                    <h1 className='font-bold text-4xl text-[#252B42] w-1/2 max-md:w-full'>We help small businesses
                        with big ideas</h1>
                </div>
                <div className='w-full flex justify-between items-center flex-wrap max-md:justify-center  max-md:items-center '> 
                    <div className='text-[#252B42] flex flex-col items-center gap-4 py-12 px-10 font-bold'>
                        <FiPhone className='text-[#23A6F0] text-7xl'/>
                        <div>
                        <p>georgia.young@example.com</p>
                        <p>georgia.young@ple.com</p>
                        </div>
                        <p>Get Support</p>
                        <button className='text-[#23A6F0] border-2 border-[#23A6F0] px-9 py-4 rounded-3xl'>Submit Request</button>
                    </div>
                    <div className='text-white flex flex-col items-center gap-4 py-20 px-10 font-bold bg-[#252B42]'>
                        <CiLocationOn className='text-[#23A6F0] text-7xl'/>
                        <div>
                        <p>georgia.young@example.com</p>
                        <p>georgia.young@ple.com</p>
                        </div>
                        <p>Get Support</p>
                        <button className='text-[#23A6F0] border-2 border-[#23A6F0] px-9 py-4 rounded-3xl'>Submit Request</button>
                    </div>
                    <div className='text-[#252B42] flex flex-col items-center gap-4 py-12 px-10 font-bold'>
                        <BsEnvelope className='text-[#23A6F0] text-7xl'/>
                        <div>
                        <p>georgia.young@example.com</p>
                        <p>georgia.young@ple.com</p>
                        </div>
                        <p>Get Support</p>
                        <button className='text-[#23A6F0] border-2 border-[#23A6F0] px-9 py-4 rounded-3xl'>Submit Request</button>
                    </div>
                </div>
            </div>
            <div className='py-20 w-full min-h-96 flex justify-center items-center gap-4 flex-col'>
                <PiArrowBendRightDownBold className='text-[#23A6F0] text-6xl'/>
                <h3 className='font-bold text-base text-[#252B42]'>{`WE Can't WAIT TO MEET YOU`}</h3>
                <h1 className='text-[#252B42] text-6xl font-bold'>{`Let's Talk`}</h1>
                <button className='bg-[#23A6F0] text-white px-10 py-4 font-bold'>Try it for free</button>
            </div>
        </div>
    )
}

export default ContactPage