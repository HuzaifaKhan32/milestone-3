import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { client } from '@/sanity/lib/client'

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
    const res = await client.fetch(`*[_type=="product"][0...8]{
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


async function Products() {

    const data: IProduct[] = await getProductData();
    return (
        <div className='max-w-[66rem] mx-auto py-20'>

            <div className="text flex flex-col gap-3 justify-center items-center">
                <h3 className='text-xl'>{`Featured Products`}</h3>
                <h1 className='text-2xl font-bold'>{`BESTSELLER PRODUCTS`}</h1>
                <p className='text-sm text-[#737373]'>{`Problem trying to solve the conflict between`}</p>
            </div>
            <div className="products flex items-center justify-evenly flex-wrap">
                {data.map((card: IProduct, index) => (
                    <Link href={`/Product/${card.slug}`} key={index}>
                        <div className="card w-60 h-[40rem] mt-20">
                            <div className="bg-[#E8E8E8] max-w-full h-[24rem] flex justify-center items-center">
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

                            <div className='content flex justify-center items-center p-6 gap-3 flex-col'>
                                <div className='text-base font-bold text-[#252B42] text-center'>{`${card.title}`}</div>
                                <div className='text-sm text-[#737373] text-center'>{`${card.description.slice(0, 100)}`}</div>
                                <div className='text-base font-bold flex gap-3'>
                                <span className='text-[#BDBDBD]'>{`${card.price}`}</span>
                                <span className='text-[#197B63]'>{`${card.dicountPercentage / 100 * card.price}`}</span>
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
    )
}

export default Products