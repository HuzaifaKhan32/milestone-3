import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import BrandsName from '../components/BrandsName';
import { LiaIconsSolid } from "react-icons/lia";
import ShopProduct from '../components/ShopProduct';
import { GrTask } from "react-icons/gr";
import Button from '../components/Button';


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
                    <div className="product-banners w-full max-h-72 pb-12 flex justify-between items-center gap-4">
                        {products.map((bgClass, index) => (
                            <div key={index} className={`${bgClass} max-w-52 min-h-56 text-white flex justify-center items-center gap-3 flex-col`}>
                                <p className='font-bold text-base'>CLOTHS</p>
                                <p>5 items</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="filter max-w-5xl mx-auto flex justify-between items-center text-xs text-[#737373] py-6 font-bold">
                <div>
                    <p>Showing all 12 results</p>
                </div>
                <div className='flex items-center gap-5'>
                    <p>Views:</p>
                    <LiaIconsSolid />
                    <span className='p-3 border-1 border-[#737373]'>
                        <GrTask className='text-base' />
                    </span>
                </div>
                <div className='flex gap-2'>
                    <p className='p-2 border-1 border-[#737373]'>Popularity
                    </p>
                    <button className='text-white px-5 py-2 font-bold bg-[#23A6F0] rounded'>Filter</button>
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