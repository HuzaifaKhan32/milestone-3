import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import BrandsName from '../components/BrandsName';
import { IoMdCheckmark } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { FaLinkedin } from "react-icons/fa";


function Price() {
    return (
        <div className='container max-w-5xl mx-auto'>
            <div className="headings min-h-96 w-full flex justify-center items-center gap-4 flex-col">
                <h4 className='text-[#737373] font-bold text-base'>PRICING</h4>
                <h1 className='text-[#252B42] font-bold text-6xl max-md:text-5xl max-md:text-center'>Simple Pricing</h1>
                <div className='text-sm font-bold text-[#737373] flex justify-between items-center gap-4'>
                    <p className='text-[#252B42]'>Home</p>
                    <IoIosArrowForward />
                    <p>Pricing</p>
                </div>
            </div>
            <div className="pricing w-full flex justify-center items-center flex-col min-h-24 gap-3">
                <h1 className='text-[#252B42] font-bold text-4xl'>Pricing</h1>
                <div className='text-sm font-bold text-[#737373] text-center'>
                    <p className='text-sm font-bold text-[#737373] text-center'>{`Problems trying to resolve the conflict between`}</p>
                    <p className='text-center'>{`the two major realms of classNameical physics: Newtonian mechanics `}</p>
                </div>
            </div>
            <div className='priceCards flex items-center justify-between max-md:flex-col max-md:gap-5'>
                <section className="bg-white">
                    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">

                        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
                            {/* <!-- Pricing Card --> */}
                            <div className="flex flex-col py-16 px-10 text-center text-[#252B42] bg-white rounded-lg border border-gray-100 shadow gap-9">
                                <h3 className="mb-4 text-2xl font-bold">FREE</h3>
                                <p className="font-bold text-[#737373] sm:text-lg dark:text-gray-400">Organize across all
                                    apps by hand</p>
                                <div className="flex justify-center gap-3">
                                    <span className=" text-4xl font-extrabold text-[#23A6F0]">0</span>
                                    <p className='flex flex-col items-start'>
                                        <span className='text-[#23A6F0] text-4xl font-extrabold'>$</span>
                                        <span className="text-[#8EC2F2]">Per month</span>
                                    </p>
                                </div>
                                {/* <!-- List --> */}
                                <ul role="list" className="mb-8 space-y-4 text-left">
                                    <li className="flex items-center space-x-3">

                                        <IoMdCheckmark className="flex-shrink-0 w-5 h-5 text-white bg-green-500 rounded-full text-3xl" />
                                        <span>Individual configuration</span>
                                    </li>
                                    <li className="flex items-center space-x-3">

                                        <IoMdCheckmark className="flex-shrink-0 w-5 h-5 text-white bg-green-500 rounded-full text-3xl" />
                                        <span>No setup, or hidden fees</span>
                                    </li>
                                    <li className="flex items-center space-x-3">

                                        <IoMdCheckmark className="flex-shrink-0 w-5 h-5 text-white bg-green-500 rounded-full text-3xl" />
                                        <span>Team size: <span className="font-semibold">1 developer</span></span>
                                    </li>
                                    <li className="flex items-center space-x-3">

                                        <IoMdCheckmark className="flex-shrink-0 w-5 h-5 text-white bg-[#BDBDBD] rounded-full text-3xl" />
                                        <span>Premium support: <span className="font-semibold">6 months</span></span>
                                    </li>
                                    <li className="flex items-center space-x-3">

                                        <IoMdCheckmark className="flex-shrink-0 w-5 h-5 text-white bg-[#BDBDBD] rounded-full text-3xl" />
                                        <span>Free updates: <span className="font-semibold">6 months</span></span>
                                    </li>
                                </ul>
                                <a href="#" className=" bg-[#252B42] text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900">Get started</a>
                            </div>
                            {/* <!-- Pricing Card --> */}
                            <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                                <h3 className="mb-4 text-2xl font-semibold">Company</h3>
                                <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">Relevant for multiple users, extended & premium support.</p>
                                <div className="flex justify-center items-baseline my-8">
                                    <span className="mr-2 text-5xl font-extrabold">$99</span>
                                    <span className="text-gray-500 dark:text-gray-400">/month</span>
                                </div>
                                {/* <!-- List --> */}
                                <ul role="list" className="mb-8 space-y-4 text-left">
                                    <li className="flex items-center space-x-3">

                                        <svg className="flex-shrink-0 w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                        <span>Individual configuration</span>
                                    </li>
                                    <li className="flex items-center space-x-3">

                                        <svg className="flex-shrink-0 w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                        <span>No setup, or hidden fees</span>
                                    </li>
                                    <li className="flex items-center space-x-3">

                                        <svg className="flex-shrink-0 w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                        <span>Team size: <span className="font-semibold">10 developers</span></span>
                                    </li>
                                    <li className="flex items-center space-x-3">

                                        <svg className="flex-shrink-0 w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                        <span>Premium support: <span className="font-semibold">24 months</span></span>
                                    </li>
                                    <li className="flex items-center space-x-3">

                                        <svg className="flex-shrink-0 w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                        <span>Free updates: <span className="font-semibold">24 months</span></span>
                                    </li>
                                </ul>
                                <a href="#" className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-[#23A6F0]">Get started</a>
                            </div>
                            {/* <!-- Pricing Card --> */}
                            <div className="flex flex-col py-16 px-10 text-center text-[#252B42] bg-white rounded-lg border border-gray-100 shadow gap-9">
                                <h3 className="mb-4 text-2xl font-bold">FREE</h3>
                                <p className="font-bold text-[#737373] sm:text-lg dark:text-gray-400">Organize across all
                                    apps by hand</p>
                                <div className="flex justify-center gap-3">
                                    <span className=" text-4xl font-extrabold text-[#23A6F0]">0</span>
                                    <p className='flex flex-col items-start'>
                                        <span className='text-[#23A6F0] text-4xl font-extrabold'>$</span>
                                        <span className="text-[#8EC2F2]">Per month</span>
                                    </p>
                                </div>
                                {/* <!-- List --> */}
                                <ul role="list" className="mb-8 space-y-4 text-left">
                                    <li className="flex items-center space-x-3">

                                        <IoMdCheckmark className="flex-shrink-0 w-5 h-5 text-white bg-green-500 rounded-full text-3xl" />
                                        <span>Individual configuration</span>
                                    </li>
                                    <li className="flex items-center space-x-3">

                                        <IoMdCheckmark className="flex-shrink-0 w-5 h-5 text-white bg-green-500 rounded-full text-3xl" />
                                        <span>No setup, or hidden fees</span>
                                    </li>
                                    <li className="flex items-center space-x-3">

                                        <IoMdCheckmark className="flex-shrink-0 w-5 h-5 text-white bg-green-500 rounded-full text-3xl" />
                                        <span>Team size: <span className="font-semibold">1 developer</span></span>
                                    </li>
                                    <li className="flex items-center space-x-3">

                                        <IoMdCheckmark className="flex-shrink-0 w-5 h-5 text-white bg-[#BDBDBD] rounded-full text-3xl" />
                                        <span>Premium support: <span className="font-semibold">6 months</span></span>
                                    </li>
                                    <li className="flex items-center space-x-3">

                                        <IoMdCheckmark className="flex-shrink-0 w-5 h-5 text-white bg-[#BDBDBD] rounded-full text-3xl" />
                                        <span>Free updates: <span className="font-semibold">6 months</span></span>
                                    </li>
                                </ul>
                                <a href="#" className=" bg-[#252B42] text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900">Get started</a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div className='py-20 max-md:py-10'>
                <h1 className='text-center text-xl text-[#252B42] max-md:py-10'>Trusted Ny Over 4000 Big Countries</h1>
                <BrandsName />
            </div>
            <div className="pricing-faqs">
                <div className='flex justify-center items-center flex-col gap-3 py-20'>
                    <h1 className='text-4xl font-bold text-[#252B42]'>Pricing FAQs</h1>
                    <p className='text-[#737373] text-xl w-1/2 text-center'>Problems trying to resolve the conflict between
                        the two major realms of Classical physics</p>
                </div>
                <div className="questions flex justify-between items-start flex-wrap max-md:flex-col">
                    <div className="1 flex gap-5 items-start w-1/2 p-6 max-md:w-full">
                        <div className='flex'>
                            <IoIosArrowForward className='text-[#23A6F0]' />
                        </div>
                        <div>
                            <p className='font-bold text-base text-[#252B42]'>the quick fox jumps over the lazy dog</p>
                            <p className='text-[#737373] text-sm'>Met minim Mollie non desert Alamo est sit cliquey
                                dolor do met sent. RELIT official consequent door ENIM
                                RELIT Mollie. Excitation venial consequent sent
                                nostrum met.</p>

                        </div>
                    </div>
                    <div className="2 flex gap-5 items-start w-1/2 p-6 max-md:w-full">
                        <div>
                            <IoIosArrowForward className='text-[#23A6F0]' />
                        </div>
                        <div>
                            <p className='font-bold text-base text-[#252B42]'>the quick fox jumps over the lazy dog</p>
                            <p className='text-[#737373] text-sm'>Met minim Mollie non desert Alamo est sit cliquey
                                dolor do met sent. RELIT official consequent door ENIM
                                RELIT Mollie. Excitation venial consequent sent
                                nostrum met.
                            </p>

                        </div>
                    </div>
                    <div className="1 flex gap-5 items-start w-1/2 p-6 max-md:w-full">
                        <div className='flex'>
                            <IoIosArrowForward className='text-[#23A6F0]' />
                        </div>
                        <div>
                            <p className='font-bold text-base text-[#252B42]'>the quick fox jumps over the lazy dog</p>
                            <p className='text-[#737373] text-sm'>Met minim Mollie non desert Alamo est sit cliquey
                                dolor do met sent. RELIT official consequent door ENIM
                                RELIT Mollie. Excitation venial consequent sent
                                nostrum met.</p>

                        </div>
                    </div>
                    <div className="2 flex gap-5 items-start w-1/2 p-6 max-md:w-full">
                        <div>
                            <IoIosArrowForward className='text-[#23A6F0]' />
                        </div>
                        <div>
                            <p className='font-bold text-base text-[#252B42]'>the quick fox jumps over the lazy dog</p>
                            <p className='text-[#737373] text-sm'>Met minim Mollie non desert Alamo est sit cliquey
                                dolor do met sent. RELIT official consequent door ENIM
                                RELIT Mollie. Excitation venial consequent sent
                                nostrum met.
                            </p>

                        </div>
                    </div>
                    <div className="1 flex gap-5 items-start w-1/2 p-6 max-md:w-full">
                        <div className='flex'>
                            <IoIosArrowForward className='text-[#23A6F0]' />
                        </div>
                        <div>
                            <p className='font-bold text-base text-[#252B42]'>the quick fox jumps over the lazy dog</p>
                            <p className='text-[#737373] text-sm'>Met minim Mollie non desert Alamo est sit cliquey
                                dolor do met sent. RELIT official consequent door ENIM
                                RELIT Mollie. Excitation venial consequent sent
                                nostrum met.</p>

                        </div>
                    </div>
                    <div className="2 flex gap-5 items-start w-1/2 p-6 max-md:w-full">
                        <div>
                            <IoIosArrowForward className='text-[#23A6F0]' />
                        </div>
                        <div>
                            <p className='font-bold text-base text-[#252B42]'>the quick fox jumps over the lazy dog</p>
                            <p className='text-[#737373] text-sm'>Met minim Mollie non desert Alamo est sit cliquey
                                dolor do met sent. RELIT official consequent door ENIM
                                RELIT Mollie. Excitation venial consequent sent
                                nostrum met.
                            </p>

                        </div>
                    </div>
                </div>
                <h1 className='py-10 text-center text-[#737373] text-xl'>{`Haven’t got your answer? Contact our support`}</h1>
            </div>
            <div className='w-full h-screen flex justify-center items-center flex-col gap-8'>
                <h1 className='text-center text-4xl text-[#252B42] font-bold'>Start your 14 days free trial</h1>
                <p className='font-sm text-[#737373] w-1/2 text-center max-md:w-full'>Met minim Mollie non desert Alamo est sit cliquey dolor 
                do met sent. RELIT official consequent.</p>
                <button className='px-10 py-4 bg-[#23A6F0] text-white rounded'>Try for free</button>
                <div className="flex justify-between items-center gap-8 p-3">
                    <FaTwitter className='text-3xl text-[#23A6F0]'/>
                    <FaFacebook className='text-3xl text-[#395185]'/>
                    <GrInstagram className='text-3xl'/>
                    <FaLinkedin className='text-3xl text-[#0A66C2]'/>
                </div>
            </div>

        </div>
    )
}

export default Price