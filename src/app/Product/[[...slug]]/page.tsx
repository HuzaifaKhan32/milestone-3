import Image from 'next/image';
import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { TiStarFullOutline } from "react-icons/ti";
import { GoHeart } from "react-icons/go";
import { BsCart } from "react-icons/bs";
import { IoEye } from "react-icons/io5";
import Products from "../../components/Products"
import BrandsName from '@/app/components/BrandsName';
import product1 from "../../../../public/product-cover-5.png"
import product2 from "../../../../public/fixed-height.png"
import product3 from "../../../../public/fixed-height (1).png"
import product4 from "../../../../public/fixed-height (2).png"
import product5 from "../../../../public/fixed-height (3).png"
import product6 from "../../../../public/fixed-height (4).png"
import product7 from "../../../../public/fixed-height (5).png"
import product8 from "../../../../public/fixed-height (6).png"
import product9 from "../../../../public/product1.png"
import product10 from "../../../../public/product2.png"
import product11 from "../../../../public/product3.png"
import product12 from "../../../../public/product4.png"

const productList = {
    "1": {
        image: product1
    },
    "2": {
        image: product2
    },
    "3": {
        image: product3
    },
    "4": {
        image: product4
    },
    "5": {
        image: product5
    },
    "6": {
        image: product6
    },
    "7": {
        image: product7
    },
    "8": {
        image: product8
    },
    "9": {
        image: product9
    },
    "10": {
        image: product10
    },
    "11": {
        image: product11
    },
    "12": {
        image: product12
    }
}

function page({ params }: { params: { slug: string } }) {
    const product = productList[params.slug as keyof typeof productList];
    return (
        <>
            <div className='container max-w-5xl mx-auto bg-[#FFFFFF] min-h-screen overflow-x-hidden max-md:px-10'>
                <div className="product-header w-full flex items-center h-24 py-6">
                    <div className='flex gap-5 text-sm font-bold text-[#252B42]'>
                        <p>Home</p>
                        <IoIosArrowDown className='text-[#BDBDBD]' />
                        <p className='text-[#BDBDBD]'>Shop</p>
                    </div>
                </div>
                <div className="product-content w-full flex justify-between items-start gap-5 max-md:flex-col ">
                    <div className="left min-h-[34rem] max-w-[50%] flex justify-between max-md:justify-evenly items-start flex-col gap-10 max-md:gap-3 overflow-x-hidden max-md:w-full ">
                        <div className='max-h-[28rem] max-md:h-full max-md:w-full'>
                            <Image
                                src={product.image}
                                alt='Product Image'
                                className='main-image' />
                        </div>
                        <div className='example-images flex gap-7'>
                            <Image
                                src={product.image}
                                alt='Product Image'
                                className='max-h-24 max-w-24 max-md:w-full' />
                            <Image
                                src={product.image}
                                alt='Product Image'
                                className='max-h-24 max-w-24 max-md:w-full' />
                        </div>
                    </div>

                    <div className="right flex justify-between flex-col items-start max-h-[28rem] max-w-[50%] max-md:w-full ">
                        <div className="1  flex justify-between flex-col items-end gap-7 py-5 border-b-2 border-[#BDBDBD]">
                            <div className="1 w-full text-xl flex flex-col font-bold">
                                <p>Floating Phone</p>
                                <div className="stars flex gap-1 items-center">
                                    <span>
                                        <TiStarFullOutline className='text-[#FFAD33] text-2xl' />
                                    </span>
                                    <span>
                                        <TiStarFullOutline className='text-[#FFAD33] text-2xl' />
                                    </span>
                                    <span>
                                        <TiStarFullOutline className='text-[#FFAD33] text-2xl' />
                                    </span>
                                    <span>
                                        <TiStarFullOutline className='text-[#FFAD33] text-2xl' />
                                    </span>
                                    <span>
                                        <TiStarFullOutline className='text-[#FFAD33] text-2xl' />
                                    </span>
                                    <span className='text-[#737373] text-sm whitespace-nowrap'>10 Reviews</span>
                                </div>
                            </div>
                            <div className="2 w-full text-2xl flex flex-col font-bold items-start gap-3">
                                <p>$1,139.33</p>
                                <p className='text-[#73737373] text-sm'>Avaiablity : <span className='text-[#23A6F0]'>In stock</span></p>
                            </div>
                            <div className="3 text-sm text-[#858585]">
                                <p>{`Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.`}</p>
                            </div>
                        </div>
                        <div className="2 flex gap-10 flex-col py-5">
                            <div className='flex items-center gap-2 '>
                                <div className='w-7 h-7 rounded-full bg-[#23A6F0]'></div>
                                <div className='w-7 h-7 rounded-full bg-[#197B63]'></div>
                                <div className='w-7 h-7 rounded-full bg-[#E77C40]'></div>
                                <div className='w-7 h-7 rounded-full bg-[#252B42]'></div>
                            </div>
                            <div className='flex justify-between items-center gap-7 text-xl'>
                                <button className='bg-[#23A6F0] text-white py-3 px-5 rounded font-bold text-sm'>Select Options</button>
                                <GoHeart />
                                <BsCart />
                                <IoEye />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Products />
            <BrandsName />
        </>
    )
}

export default page