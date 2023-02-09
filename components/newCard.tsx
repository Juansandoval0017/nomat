import React from 'react'

export default function CategoryCard({data}: {
    data: {
        nombre: string,
        imagen: string,
        precio: number
    }
}) {
  return (
    <div className='flex flex-col items-start justify-start gap-2 border-2 p-4 shadow-xl rounded-md' >
        <div className='w-32 h-32  flex justify-center items-center' >
            <img src={data.imagen} alt={data.nombre} className='w-full h-full object-contain' />
        </div>
        <div className='w-full h-1/2 flex flex-col justify-center items-center gap-2' >
            <h3 className='text-xl font-bold text-secondary'>{data.nombre}</h3>
            <h3 className='text-xl font-bold'>
                <span className='text-secondary' >${data.precio.toLocaleString()} <span className='text-primary' >COP</span></span>
            </h3>
            
        </div>
    </div>
  )
}
