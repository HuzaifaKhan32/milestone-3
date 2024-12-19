import React from 'react'
import { IoIosArrowForward } from "react-icons/io";

function Price() {
    return (
        <div className='container max-w-5xl mx-auto'>
            <div className="headings min-h-96 w-full flex justify-center items-center gap-4 flex-col">
                <h4 className='text-[#737373] font-bold text-base'>PRICING</h4>
                <h1 className='text-[#252B42] font-bold text-6xl'>Simple Pricing</h1>
                <div className='text-sm font-bold text-[#737373] flex justify-between items-center gap-4'>
                    <p className='text-[#252B42]'>Home</p>
                    <IoIosArrowForward />
                    <p>Pricing</p>
                </div>
            </div>
            <div className="pricing w-full flex justify-center items-center flex-col min-h-24 gap-3">
                <h1 className='text-[#252B42] font-bold text-4xl'>Pricing</h1>
                <div className='text-sm font-bold text-[#737373] text-center'>
                    <p className='text-sm font-bold text-[#737373] text-center'>{`Problems trying to resolve the conflict between`}</p>
                    <p className='text-center'>{`the two major realms of Classical physics: Newtonian mechanics `}</p>
                </div>
            </div>
            <div className='priceCards flex items-center justify-between'>
                <div className="card1 w-80 py-16 px-10 flex justify-center items-center flex-col gap-9 bg-[#252B42] text-white rounded-xl">
                    <div>
                        <h1 className='text-2xl font-bold'>STANDARD</h1>
                    </div>
                    <div>
                        <p className='text-center'>Organize across all</p>
                        <p className='text-center'>apps by hand</p>
                    </div>
                    <div>
                        <p>9.99</p>
                        <p>
                            <span>$</span>
                            <span>Per Month</span>
                        </p>
                    </div>
                </div>
                <div className="card2"></div>
                <div className="card3"></div>
            </div>
        </div>
    )
}

export default Price