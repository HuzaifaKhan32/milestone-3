import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import product from "../../../public/product-cover-5.png"
import product2 from "../../../public/fixed-height.png"
import product3 from "../../../public/fixed-height (1).png"
import product4 from "../../../public/fixed-height (2).png"



const products = [
    {
        id: 1,
        image: product
    },
    {
        id: 2,
        image: product2
    },
    {
        id: 3,
        image: product3
    },
    {
        id: 4,
        image: product4
    }
]




function WhishlistProduct() {
  return (
    <div className='max-w-[66rem] mx-auto py-10'>
        <div className="products flex items-center justify-evenly flex-wrap">
                {products.map((card, index) => (
                    <Link href={`/Product/${card.id}`} key={index}>
                        <div className="card w-60 h-[38.5rem]">
                            <div className='bg-[#E8E8E8]'>
                                <Image
                                    src={card.image}
                                    alt='Products'
                                    quality={100}
                                    priority
                                     />
                            </div>
                            <div className='content flex justify-center items-center p-6 gap-3 flex-col'>
                                <div className='text-base font-bold text-[#252B42]'>Graphic Designer</div>
                                <div className='text-sm text-[#737373]'>English Department</div>
                                <div className='text-base font-bold flex gap-3'>
                                    <span className='text-[#BDBDBD]'>$16.58</span>
                                    <span className='text-[#197B63]'>$6.48</span>
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

export default WhishlistProduct