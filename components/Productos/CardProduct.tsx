import { NuevosProductos } from '@/additional'
import React from 'react'
import Link from 'next/link'
export default function CardProduct({data}: {data:NuevosProductos}) {
  return (
      <section>
        <Link href={`/producto/${data.partNum}`} className='w-64 h-72 bg-white shadow-lg rounded-lg flex flex-col gap-2 p-5'>
            <div className='w-full h-2/3 bg-secondary rounded-lg flex justify-center items-center'>
                <img src={data.image} alt="" className='w-3/4 h-3/4 object-contain rounded' />
            </div>
            <div className='w-full h-1/3 flex flex-col gap-2 justify-between'>
                <span className='text-violet-900 font-semibold w-full text-clip tooltip inline-block   overflow-hidden' title={data.name} >{data.name}</span>
                <span className='text-secondary font-semibold' >{data.precio.toLocaleString()}<span className='text-violet-900' > COP</span> </span>
               
            </div>
        </Link>
      </section>
  )
}
