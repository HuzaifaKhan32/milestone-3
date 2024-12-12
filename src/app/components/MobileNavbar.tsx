"use client";
import React from 'react'
import { CiSearch } from "react-icons/ci";
import { BsCart } from "react-icons/bs";
import { BiMenuAltRight } from "react-icons/bi";
import { useState } from 'react';



function MobileNavbar() {
  const [visiblity, setVisiblity] = useState<boolean>(false);

  const handleVisiblity = () => {
    setVisiblity(!visiblity);
  }

  return (
    <div className='relative mobile-nav w-full h-auto hidden z-40'>
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
          <li>Product</li>
          <li>Pricing</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  )
}

export default MobileNavbar