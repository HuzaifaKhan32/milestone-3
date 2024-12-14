import React from 'react'
import { FiPhone } from "react-icons/fi";
import { BsEnvelope } from "react-icons/bs";
import { GrInstagram } from "react-icons/gr";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import Link from 'next/link';
import { IoIosArrowDown } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { GoHeart } from "react-icons/go";
import { BsCart } from "react-icons/bs";

function Header() {
  return (
    <>
        <div className='information text-white w-full h-14 bg-[#252B42] flex items-center justify-between px-6 py-2'>
        <div className="1 flex gap-10">
            <div className="flex gap-1 items-center">
                <FiPhone className='text-base'/>
                <p className='font-bold text-sm'>(225) 555-0118</p>
            </div>
            <div className="flex gap-1 items-center">
                <BsEnvelope className='text-base'/>
                <p className='font-bold text-sm'>michelle.rivera@example.com</p>
            </div>
        </div>
            <div className="2">
                <p className='text-sm font-bold'>Follow Us  and get a chance to win 80% off</p>
            </div>
            <div className="3 flex gap-3">
                <p className='text-sm font-bold'>Follow Us :</p>
                <div className="icons flex gap-3 items-center">
                <GrInstagram className='text-base'/>
                <FaYoutube className='text-xl'/>
                <FaFacebook className='text-base'/>
                <FaTwitter className='text-base'/>
                </div>
            </div>
        </div>
        <div className='header px-6 w-full h-16 flex justify-between items-center'>
            <div className="left">
                <h1 className='text-[#252B42] text-2xl font-bold'>Bandage</h1>
            </div>
            <div className="right w-[68rem] flex justify-between items-center">
                <div className="links font-bold text-sm text-[#737373] flex items-center justify-between gap-5">
                    <Link href={"/"}>Home</Link>
                    <Link href={"/Shops"} className='flex items-center gap-2'>
                    <span>Shop</span> 
                    <span> <IoIosArrowDown /> </span>
                    </Link>
                    <Link href={"/About"}>About</Link>
                    <Link href={"/"}>Blog</Link>
                    <Link href={"/"}>Contact</Link>
                    <Link href={"/"}>Page</Link>
                </div>
                <div className="login text-[#23A6F0] text-sm font-bold flex items-center gap-5">
                    <div className='flex gap-1 items-center'>
                        <CiUser />
                        <p>Login / Register</p>
                    </div>
                    <div className='text-base'> 
                        <CiSearch />        
                    </div>
                    <div className='flex gap-1 text-base items-center'>
                        <GoHeart /> 1
                    </div>
                    <div className='flex gap-1 text-base items-center'>
                        <BsCart /> 1
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Header