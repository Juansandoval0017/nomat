'use client'
import { Atributos, Caracteristicas, Producto } from '@/additional'
import React,{useEffect,useState,useContext} from 'react'
import {useRouter} from 'next/navigation'
import Imagenes from '@/components/producto/Imagenes'
import Tabla from '@/components/producto/Tabla'
import CartContext from '@/context/CartContext'
import Panel from '@/components/producto/Panel'

export default function Content({data}: {data: Producto}) {

  const router = useRouter()
  const [index, setIndex] = useState(0)
  
  const {open} = useContext(CartContext)

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

      {!open && <Panel data={data} />}



    </main>
  )
}
