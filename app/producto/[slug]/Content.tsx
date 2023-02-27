'use client'
import { Atributos, Caracteristicas, Producto } from '@/additional'
import React,{useEffect,useState} from 'react'
import {useRouter} from 'next/navigation'
import Imagenes from '@/components/producto/Imagenes'
import Tabla from '@/components/producto/Tabla'

export default function Content({data}: {data: Producto}) {

  const router = useRouter()
  const [index, setIndex] = useState(0)


  const _atributos : Atributos = JSON.parse(data.xmlAttributes)
  const atributos : Caracteristicas[]  = _atributos.ListaAtributos.Atributos.attributecs

  useEffect(() => {
    if(!data){
      router.push('/404')
    }
  }, [data])


  return (
    
    <main className='w-full flex  p-10 text-secondary gap-5'>

      <section className=' w-4/6  flex  flex-col ' >
      {/* imagenes */}
      
      <Imagenes data={data} index={index} setIndex={setIndex} />

      {/* tabla con los valores del arreglo atributos */}

      <Tabla atributos={atributos} />
      
      </section>

      <section className='w-2/6  '>
        <div className='w-2/6 top-1/4  fixed border-secondary border-2 p-10 flex flex-col ' >
          <h1 className='text-4xl font-bold'>{data.Name}</h1>
          <h2 className='text-3xl font-bold mt-10'>${data.precio.toLocaleString()}
          <span className='text-primary' > COP</span>
          </h2>

          {/* boton de comprar */}
          <button className='w-2/4 bg-primary text-white p-2 mt-10 rounded-md self-center' >Comprar</button>
          {/* boton de agregar al carrito */}
          <button className='w-2/4 bg-secondary text-white p-2 mt-10 rounded-md self-center' >Agregar al carrito</button>

        </div>
      </section>



    </main>
  )
}
