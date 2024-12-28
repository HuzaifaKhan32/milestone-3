import React from 'react'
import WhishlistProduct from '../components/WhishlistProduct'

function page() {
  return (
    <div>
        <div className='max-w-5xl mx-auto flex justify-between items-center pt-20'>
            <h1 className='text-2xl font-bold text-[#252B42] '>{`Whishlist(4)`}</h1>
            <button className='px-4 py-2 text-base text-[#23A6F0] border-2 border-[#23A6F0] hover:text-white hover:bg-[#23A6F0] transition-all rounded-md'>Move all to bag</button>
        </div>
        <WhishlistProduct />
    </div>
  )
}

export default page