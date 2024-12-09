import React from 'react'
import { CiSearch } from "react-icons/ci";
import { BsCart } from "react-icons/bs";
import { BiMenuAltRight } from "react-icons/bi";

function MobileNavbar() {
  return (
    <div className='mobile-nav w-full min-h-[33rem] hidden bg-white'>
        <div className="header flex justify-between items-center h-full px-3 py-2">
            <div className="logo">
                <h1 className='text-[#252B42] text-2xl font-bold'>Bandage</h1>
            </div>
            <div className="items flex items-center gap-3">
                <CiSearch />
                <BsCart />
                <BiMenuAltRight />
            </div>
        </div>
    </div>
  )
}

export default MobileNavbar