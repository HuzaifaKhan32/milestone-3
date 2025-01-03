import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { client } from '@/sanity/lib/client'
import imageUrlBuilder from '@sanity/image-url'

interface Source {
    asset : {
        _ref: string
        _type: string 
    },
    _type: string
}

interface IProduct {
    title: string
    desc: string
    image: Source
    slug: string
    price: string
}

const builder = imageUrlBuilder(client)

function urlFor(source: Source) {
    return builder.image(source)
}

const getProductData = async () => {
    const res = await client.fetch(`*[_type == "Product"]{
        title,
        desc,
        slug,
        price,
        image
        }`);
    return res
}


async function ShopProduct() {
    const data: IProduct[] = await getProductData();
    return (
        <div className='max-w-[66rem] mx-auto py-20'>

            <div className="products flex items-center justify-evenly flex-wrap">
                {data.map((card: IProduct, index) => (
                    <Link href={`/Product/${card.slug}`} key={index}>
                        <div className="card w-60 h-[38.5rem] mt-20">
                            <div className='bg-[#E8E8E8]'>
                                <Image
                                    src={urlFor(card.image).url()}
                                    alt='Products'
                                    quality={100}
                                    priority
                                    objectFit='cover'
                                    width={200}
                                    height={200}
                                    className='w-full h-full'
                                />
                            </div>
                            <div className='content flex justify-center items-center p-6 gap-3 flex-col'>
                                <div className='text-base font-bold text-[#252B42]'>{card.title}</div>
                                <div className='text-sm text-[#737373]'>{card.desc}</div>
                                <div className='text-base font-bold flex gap-3'>
                                    <span className='text-[#BDBDBD]'>$16.58</span>
                                    <span className='text-[#197B63]'>{card.price}</span>
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

export default ShopProduct