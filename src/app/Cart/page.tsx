import Image, { StaticImageData } from 'next/image';
import React from 'react'
import { MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowUp } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import product1 from "../../../public/product1.png"
import product2 from "../../../public/product2.png"

interface CartData {
    image: StaticImageData
    price: string
    desc: string
}

const cartData: CartData[] = [
    {
        image: product1,
        price: "200$",
        desc: "Track Suit"
    },
    {
        image: product2,
        price: "100$",
        desc: "Leather Jacket"
    }
]

function page() {
    return (
        <div className='cart max-w-5xl mx-auto min-h-screen'>
            <div className='flex items-center w-full gap-5 h-24 font-bold max-md:px-5'>
                <p className='text-[#737373]'>Home</p>
                <MdOutlineKeyboardArrowRight className='text-2xl text-[#737373]' />
                <p className='text-[#252B42]'>Cart</p>
            </div>
            <div className='h-auto w-full pb-20 pt-10 max-md:px-5 text-[#252B42]'>
                <div className='flex justify-between items-center w-full'>
                    <span className='w-[25%]'>Product</span>
                    <span className='w-[25%] flex justify-center'>Price</span>
                    <span>Quantity</span>
                    <span className='w-[25%] flex justify-end'>Subtotal</span>
                </div>
                {cartData.map((product, index) => (

                    <div className='flex justify-between items-center py-10' key={index}>
                        <div className='flex items-center gap-2 w-[25%] max-md:flex-col max-md:justify-center max-md:items-start'>
                            <Image src={product.image} alt='Hello' className='h-20 w-14' />
                            <p>{product.desc}</p>
                        </div>
                        <span className='w-[25%] flex justify-center'>{product.price}</span>
                        <div className='px-4 py-2 border-2 border-[#737373] flex justify-center items-center gap-4'>
                            <span>1</span>
                            <span className=''>
                                <MdOutlineKeyboardArrowUp />
                                <MdKeyboardArrowDown />
                            </span>
                        </div>
                        <span className='w-[25%] flex justify-end'>{product.price}</span>
                    </div>
                ))
                }
                <div className='w-full flex justify-between items-center max-md:flex-col max-md:justify-center max-md:gap-5'>
                    <button className='px-3 py-2 border-2 border-[#23A6F0] text-[#23A6F0] rounded-md'>Return To Shop</button>
                    <button className='px-3 py-2 border-2 border-[#23A6F0] text-[#23A6F0] rounded-md'>Update Cart</button>
                </div>
            </div>
            <div className='cart flex justify-between items-start max-md:flex-col max-md:justify-center max-md:items-center max-md:gap-10 max-md:px-5'>
                <div className='flex gap-3'>
                    <input type="text" className='bg-transparent border-2 border-[#252B42] px-4 py-2 rounded-md' placeholder='Coupon Code'/>
                    <button className='px-3 py-2 bg-[#23A6F0] text-white rounded-md hover:border-[#23A6F0] hover:text-[#23A6F0] hover:bg-white border-2 border-transparent transition-all'>Apply Coupon</button>
                </div>
                <div className='flex flex-col justify-between items-start py-5 px-3 rounded-md border-2 border-[#252B42] text-[#252B42] w-96 gap-4 max-md:w-full'>
                    <h3 className='font-bold text-xl'>Cart Total</h3>
                    <div className='w-full flex justify-between border-b-2 border-[#737373]'>
                        <span>Subtotal</span>
                        <span>$300</span>
                    </div>
                    <div className='w-full flex justify-between border-b-2 border-[#737373]'>
                        <span>Shipping</span>
                        <span>Free</span>
                    </div>
                    <div className='w-full flex justify-between'>
                        <span>Total</span>
                        <span>$300</span>
                    </div>
                    <div className=' w-full flex justify-center'>
                        <button className='bg-[#23A6F0] text-white px-4 py-2 rounded-md border-2 border-transparent hover:border-[#23A6F0] hover:text-[#23A6F0] hover:bg-white'>Process to Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
// #23A6F0
export default page