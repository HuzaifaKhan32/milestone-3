import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { client } from '@/sanity/lib/client'
import { LiaIconsSolid } from 'react-icons/lia'
import { GrTask } from 'react-icons/gr'


interface IProduct {
    title: string,
    price: number,
    productImage: string,
    description: string,
    _id: string,
    isNew: boolean,
    dicountPercentage: number,
    slug: string
}



const getProductData = async () => {
    const res = await client.fetch(`*[_type=="product"]{
   title,
   price,
   productImage,
   description,
   _id,
   isNew,
   dicountPercentage,
   "slug": slug.current  
 }`);
    return res
}


async function ShopProduct() {
    const data: IProduct[] = await getProductData();

    return (
        <>

            <div className='max-w-[66rem] mx-auto py-20'>
                <div className="filter max-w-5xl mx-auto flex justify-between items-center text-xs text-[#737373] py-6 font-bold">
                    <div>
                        <p>Showing all {data.length} results</p>
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

                <div className="products flex items-center justify-evenly flex-wrap">
                    {data.map((card: IProduct) => (
                        <Link href={`/Product/${card.slug}`} key={card._id}>
                            <div className="card w-60 h-[38.5rem] mt-20">
                                <div className='bg-[#E8E8E8]'>
                                    <div className="max-w-full h-[24rem] flex justify-center items-center">
                                        <Image
                                            src={card.productImage}
                                            alt="Products"
                                            quality={100}
                                            priority
                                            width={240}
                                            height={300}
                                            className="h-full w-full object-fit"
                                        />
                                    </div>
                                </div>
                                <div className='content flex justify-center items-center py-6 px-2 gap-3 flex-col max-h-[14rem]'>
                                    <div className='text-base font-bold text-[#252B42]'>{card.title}</div>
                                    <div className='text-sm text-[#737373] text-center'>{card.description.slice(0, 100)}</div>
                                    <div className='text-base font-bold flex gap-3'>
                                        <span className='text-[#BDBDBD] line-through text-sm'>${card.price}</span>
                                        <span className='text-[#197B63]'>${card.price - (((card.dicountPercentage || 0) / 100) * card.price)}</span>
                                    </div>
                                    <div className='flex items-center gap-2 '>
                                        <div className='w-4 h-4 rounded-full bg-[#23A6F0]'></div>
                                        <div className='w-4 h-4 rounded-full bg-[#197B63]'></div>
                                        <div className='w-4 h-4 rounded-full bg-[#E77C40]'></div>
                                        <div className='w-4 h-4 rounded-full bg-[#252B42]'></div>
                                    </div>
                                </div>
                            </div>
                        </Link>

                    ))}
                </div>

            </div>
        </>
    )
}

export default ShopProduct