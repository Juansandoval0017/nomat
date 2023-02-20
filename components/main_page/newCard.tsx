import { NuevosProductos } from '@/additional'
import React from 'react'

export default function CategoryCard({data}: {
    data: NuevosProductos
}) {
  return (
    <div className='flex flex-col items-start justify-start gap-2 border-2 p-4 shadow-xl rounded-md w-3/4 h-64 overflow-hidden' >
        <div className='w-32 h-32  flex justify-center items-center' >
            <img src={data.image} alt={data.name} className='w-full h-full object-contain' />
        </div>
        <div className='w-full h-1/2 flex flex-col justify-center items-center gap-2' >
            <h3 className='text-xl font-bold text-secondary w-full truncate tooltip inline-block'
            title={data.name}
            >{data.name}</h3>
            <h3 className='text-lg font-bold'>
                <span className='text-secondary' >${data.precio.toLocaleString()} <span className='text-primary' >COP</span></span>
            </h3>
            
        </div>
        
    </div>
  )
}
