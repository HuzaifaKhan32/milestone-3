import React from 'react'

function page() {
    return (
        <div className='container max-w-5xl mx-auto min-h-[40rem]'>
            <div className='w-full h-full flex justify-between items-start max-md:flex-col'>
                <div className='w-1/2 h-full'>
                    <h3 className='font-bold text-base text-[#252B42]'>About Company</h3>
                    <h1 className='text-6xl font-bold text-[#252B42]'>About Us</h1>
                    <p className='text-xl text-[#737373]'>
                        <p>We know how large objects will act,</p>
                        <p>but things on a small scale</p>
                    </p>
                    <button className='bg-[#23A6F0] text-white px-10 py-4 font-bold rounded'>Get Qoute Now</button>
                </div>
                <div className='w-1/2 h-full'>

                </div>
            </div>

        </div>
    )
}

export default page