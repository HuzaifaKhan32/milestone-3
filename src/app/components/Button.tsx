import React from 'react'

function Button(props : {name : string}) {
  return (
    <div className='text-bold text-whte bg-[#23A6F0]'>
        {props.name}
    </div>
  )
}

export default Button