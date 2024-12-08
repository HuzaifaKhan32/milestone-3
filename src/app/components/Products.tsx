import Image from 'next/image'
import React from 'react'
import product from "../../../public/product-cover-5.png"
import product2 from "../../../public/fixed-height.png"
import product3 from "../../../public/fixed-height (1).png"
import product4 from "../../../public/fixed-height (2).png"
import product5 from "../../../public/fixed-height (3).png"
import product6 from "../../../public/fixed-height (4).png"
import product7 from "../../../public/fixed-height (5).png"
import product8 from "../../../public/fixed-height (6).png"

const products = [
    {
        image : product
    },
    {
        image : product2
    },
    {
        image : product3
    },
    {
        image : product4
    },
    {
        image : product5
    },
    {
        image : product6
    },
    {
        image : product7
    },
    {
        image : product8
    }
]

function Products() {
    return (
        <div className='max-w-[66rem] mx-auto py-20'>
            <div className="text flex flex-col gap-3 justify-center items-center">
                <h3 className='text-xl'>{`Featured Products`}</h3>
                <h1 className='text-2xl font-bold'>{`BESTSELLER PRODUCTS`}</h1>
                <p className='text-sm text-[#737373]'>{`Problem trying to solve the conflict between`}</p>
            </div>
            <div className="products flex items-center justify-evenly flex-wrap">
                {products.map((card, index) => (
                    <div className="card w-60 h-[38.5rem] mt-20" key={index}>
                        <div>
                            <Image
                                src={card.image}
                                alt='Products' />
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

                ))}
            </div>
        </div>
    )
}

export default Products