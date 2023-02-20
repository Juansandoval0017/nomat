import { Categorias } from '@/additional'
import React from 'react'

export default function CategoryCard({data}: {
    data: Categorias
}) {
  return (
    <div className='flex flex-col items-center justify-center gap-2 border-2 p-4 shadow-xl rounded-md cursor-pointer h-56 w-3/4'>
        <div className='w-32 h-32  flex justify-center items-center overflow-hidden' >
            <img src={ `/categorias/${data.slugcategory}.png` } alt={data.Categoria} className='w-full h-full object-contain' />
        </div>
        <div className='w-full h-1/2 flex flex-col justify-center items-center' >
            <h3 className='text-xl font-bold' >{data.Categoria} </h3>
            
        </div>
    </div>
  )
}
