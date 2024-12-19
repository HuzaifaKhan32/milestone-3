"use client";
import React from 'react'
import { CiSearch } from "react-icons/ci";
import { BsCart } from "react-icons/bs";
import { BiMenuAltRight } from "react-icons/bi";
import { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import Link from "next/link"


function MobileNavbar() {
    const [visiblity, setVisiblity] = useState<boolean>(false);

    const handleVisiblity = () => {
        setVisiblity(!visiblity);
    }

    return (
        <div className='relative mobile-nav w-full h-auto hidden z-40 '>
            <div className="flex justify-between items-center min-h-16 px-4 py-2 bg-white">
                <div className="logo">
                    <h1 className='text-[#252B42] text-2xl font-bold'>Bandage</h1>
                </div>
                <div className="items flex items-center gap-5 text-2xl">
                    <CiSearch />
                    <BsCart />
                    <BiMenuAltRight onClick={() => handleVisiblity()} />
                </div>
            </div>
            <div className={`${visiblity ? "block" : "hidden"} toggle-menu min-h-48 absolute w-full z-[99] bg-white`}>
                <ul className='flex justify-center items-center flex-col gap-5 py-4 px-6 text-3xl text-[#737373] font-bold'>
                    <li>Home</li>
                    <li>Team</li>
                    <li>Feature</li>
                    <li>Blog</li>
                    <li><button className='font-semibold text-[15px] border-none outline-none'><Link href={"/"}
                        className='text-[#23A6F0] hover:underline'>Login</Link></button>
                    </li>
                    <li><button
                        className='px-6 py-4 text-sm rounded-sm font-bold text-white border-2 border-[#23A6F0] bg-[#23A6F0] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#23A6F0] flex items-center justify-center gap-4 '>Become a member
                        <FaArrowRight />
                    </button></li>
                </ul>
            </div>
        </div>
    )
}

export default MobileNavbar