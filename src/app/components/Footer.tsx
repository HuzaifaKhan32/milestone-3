import React from 'react'
import Link from 'next/link'

function Footer() {
  return (
    <footer className="font-sans tracking-wide pt-12 pb-4 px-10 text-black">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 max-w-[65.5rem] mx-auto">
        <div>
          <h4 className=" font-semibold text-lg mb-6">Quick Links</h4>
          <ul className="space-y-5">
            <li>
              <Link href={"/"} className="text-[#73737373] font-bold transition-all">Our Story</Link>
            </li>
            <li>
              <Link href={"/"} className="text-[#73737373] font-bold  transition-all">Newsroom</Link>
            </li>
            <li>
              <Link href={"/"} className="text-[#73737373] font-bold transition-all">Careers</Link>
            </li>
            <li>
              <Link href={"/"} className="text-[#73737373] font-bold transition-all">Blog</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className=" font-semibold text-lg mb-6">Services</h4>
          <ul className="space-y-5">
            <li>
              <Link href={"/"} className="text-[#73737373] font-bold  text-[15px] transition-all">Web Development</Link>
            </li>
            <li>
              <Link href={"/"} className="text-[#73737373] font-bold  text-[15px] transition-all">Testing Automation</Link>
            </li>
            <li>
              <Link href={"/"} className="text-[#73737373] font-bold  text-[15px] transition-all">AWS Development Services</Link>
            </li>
            <li>
              <Link href={"/"} className="text-[#73737373] font-bold  text-[15px] transition-all">Mobile App Development</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className=" font-semibold text-lg mb-6">Platforms</h4>
          <ul className="space-y-5">
            <li>
              <Link href={"/"} className="text-[#73737373] font-bold  text-[15px] transition-all">Hubspot</Link>
            </li>
            <li>
              <Link href={"/"} className="text-[#73737373] font-bold  text-[15px] transition-all">Marketo Integration Services</Link>
            </li>
            <li>
              <Link href={"/"} className="text-[#73737373] font-bold  text-[15px] transition-all">Marketing Glossary</Link>
            </li>
            <li>
              <Link href={"/"} className="text-[#73737373] font-bold  text-[15px] transition-all">UIPath</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className=" font-semibold text-lg mb-6">Company</h4>
          <ul className="space-y-5">
            <li>
              <Link href={"/"} className="text-[#73737373] font-bold  text-[15px] transition-all">Accessibility</Link>
            </li>
            <li>
              <Link href={"/"} className="text-[#73737373] font-bold  text-[15px] transition-all">About</Link>
            </li>
            <li>
              <Link href={"/"} className="text-[#73737373] font-bold  text-[15px] transition-all">Contact</Link>
            </li>
            <li>
              <Link href={"/"} className="text-[#73737373] font-bold  text-[15px] transition-all">Learn more</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className=" font-semibold text-lg mb-6">Get In Touch</h4>
          <ul className="space-y-5">
            <li className='flex'>
              <input type="text" placeholder='Your Email' className='h-14 w-52 rounded bg-[#E6E6E6] px-3' />
              <button className='px-7 bg-[#23A6F0] h-14 flex justify-center items-center text-sm text-white rounded' >Subscribe</button>
            </li>
          </ul>
        </div>
      </div>
        <div className="border-t text-left text-[#73737373] pt-4 mt-8 max-w-[65.5rem] mx-auto">
          <p className=" text-base font-bold">
            Made With Love By Finland All Right Reserved
          </p>
        </div>

    </footer>
  )
}

export default Footer