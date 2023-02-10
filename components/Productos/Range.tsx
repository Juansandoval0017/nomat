import React from 'react'

export default function Range() {
  return (
    <div className='flex flex-col gap-2'>
            <span className='text-violet-900 font-semibold' >Desde:</span>
            <div className='flex items-center w-full border-secondary border-2  '>
              <input type="text" className='w-3/4 p-1 outline-none' />
              <span className='w-1/4 text-center bg-secondary text-white font-semibold p-1' >COP</span>

            </div>
    </div>
  )
}
