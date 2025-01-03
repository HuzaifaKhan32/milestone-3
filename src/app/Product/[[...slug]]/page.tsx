import Image from 'next/image';
import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { TiStarFullOutline } from "react-icons/ti";
import { GoHeart } from "react-icons/go";
import { BsCart } from "react-icons/bs";
import { IoEye } from "react-icons/io5";
import Products from "../../components/Products"
import BrandsName from '@/app/components/BrandsName';
import { client } from '@/sanity/lib/client'
import imageUrlBuilder from '@sanity/image-url'

// Get a pre-configured url-builder from your sanity client
const builder = imageUrlBuilder(client)

// Then we like to make a simple function like this that gives the
// builder an image and returns the builder for you to specify additional
// parameters:
function urlFor(source: any) {
  return builder.image(source)
}



interface IProduct {
    title: string
    slug: string
    price: string
    desc: string
    image: string
}


async function page({ params }: { params: { slug: string } }) {

    const getProductData = async () => {
        const res = await client.fetch(`*[_type == "Product" && slug == "${params.slug[0]}"]`);
        return res
    }

    const data: IProduct[] = await getProductData();

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
                <div className="product-content w-full flex items-start gap-24 max-md:flex-col ">
                    <div className="left min-h-[34rem] max-w-[50%] flex justify-between max-md:justify-evenly items-start flex-col gap-10 max-md:gap-3 overflow-x-hidden max-md:w-full ">
                        <div className='max-h-[28rem] max-md:h-full max-md:w-full'>
                            <Image
                                src={urlFor(data[0].image).url()}
                                alt='Product Image'
                                width={200}
                                height={200}
                                objectFit='cover'
                                className='main-image w-full h-full' />
                        </div>
                        <div className='example-images flex gap-7'>
                            <Image
                                src={urlFor(data[0].image).url()}
                                alt='Product Image'
                                width={200}
                                height={200}
                                objectFit='cover'
                                className='max-h-24 max-w-24 max-md:w-full' />
                            <Image
                                src={urlFor(data[0].image).url()}
                                alt='Product Image'
                                width={200}
                                height={200}
                                objectFit='cover'
                                className='max-h-24 max-w-24 max-md:w-full' />
                        </div>
                    </div>

                    <div className="right flex justify-between flex-col items-start max-h-[28rem] max-w-[50%] max-md:w-full ">
                        <div className="1  flex justify-between flex-col items-start gap-7 py-5 border-b-2 border-[#BDBDBD]">
                            <div className="1 w-full text-xl flex flex-col font-bold">
                                <p>{data[0].title}</p>
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
                                <p>{data[0].price}</p>
                                <p className='text-[#73737373] text-sm'>Avaiablity : <span className='text-[#23A6F0]'>In stock</span></p>
                            </div>
                            <div className="text-sm text-[#858585]">
                                <p className='text-left'>{data[0].desc}</p>
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