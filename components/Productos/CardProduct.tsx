import React from 'react'

export default function CardProduct() {
  return (
    <section>
        <div className='w-40 h-60 bg-white shadow-lg rounded-lg flex flex-col gap-2 p-2'>
            <div className='w-full h-2/3 bg-gray-200 rounded-lg flex justify-center items-center'>
                <img src="https://images.unsplash.com/photo-1616161610003-8b8f2b2b2f1c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" className='w-3/4 h-3/4 object-contain' />
            </div>
            <div className='w-full h-1/3 flex flex-col gap-2'>
                <span className='text-violet-900 font-semibold' >Nombre del producto</span>
                <span className='text-secondary font-semibold' >100.000  <span className='text-violet-900' >COP</span> </span>
               
            </div>
        </div>
    </section>
  )
}
