import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import BrandsName from '../components/BrandsName';
import ShopProduct from '../components/ShopProduct';




const products: string[] = ["first", "second", "third", "fourth", "fifth"]

function ShopPage() {
    return (
        <>
            <div className='bg-[#FAFAFA]'>
                <div className='max-w-5xl mx-auto h-full'>
                    <div className="product-header w-full flex items-center justify-between h-24 py-6 ">
                        <div className='flex items-center text-base font-bold text-[#252B42]'>
                            <p>Shop</p>
                        </div>
                        <div className='flex items-center gap-5 text-sm font-bold text-[#252B42]'>
                            <p>Home</p>
                            <IoIosArrowForward />
                            <p className='text-[#BDBDBD]'>Shop</p>
                        </div>
                    </div>
                    <div className="product-banners w-full h-auto pb-12 flex justify-between items-center gap-4 max-md:flex-col max-md:flex-wrap">
                        {products.map((bgClass, index) => (
                            <div key={index} className={`${bgClass} max-w-52 min-h-56 text-white flex justify-center items-center gap-3 flex-col`}>
                                <p className='font-bold text-base'>CLOTHS</p>
                                <p>5 items</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            
            <ShopProduct />
            <div className='w-full flex justify-center items-center py-12 text-[#23A6F0]'>
                        <div className='border-2 border-[#E8E8E8] flex rounded'>
                            <div className="text-[#BDBDBD] font-bold border-r-2 border-[#E8E8E8]  p-6">First</div>
                            <div className="1 px-5 py-6">1</div>
                            <div className="2 px-5 py-6 bg-[#23A6F0] text-white">2</div>
                            <div className="3 px-5 py-6 border-r-2 border-[#E8E8E8]">3</div>
                            <div className="next px-6 py-6">Next</div>
                        </div>
            </div>
            <BrandsName />
        </>
    )
}

export default ShopPage;