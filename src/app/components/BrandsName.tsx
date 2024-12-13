import React from 'react'
import Image, { StaticImageData } from 'next/image'
import brand1 from "../../../public/col-md-3.png"
import brand2 from "../../../public/col-md-3 (1).png"
import brand3 from "../../../public/col-md-3 (2).png"
import brand4 from "../../../public/col-md-3 (3).png"
import brand5 from "../../../public/col-md-3 (4).png"
import brand6 from "../../../public/col-md-3 (5).png"

interface BrandData {
    image: StaticImageData
}

const brandData: BrandData[] = [
    {
        image: brand1
    },
    {
        image: brand2
    },
    {
        image: brand3
    },
    {
        image: brand4
    },
    {
        image: brand5
    },
    {
        image: brand6
    }
]

function BrandsName() {
    return (
        <div className='max-w-5xl mx-auto min-h-44 flex justify-between items-center max-md:flex-col gap-10'>
            {brandData.map((img, index) => (
                <div key={index} className='max-w-28 flex items-center'>
                    <Image
                        src={img.image}
                        alt={`${img.image}`}
                         />
                </div>
            ))}
        </div>
    )
}

export default BrandsName