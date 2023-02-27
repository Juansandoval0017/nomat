'use client'
import React,{useState,useEffect} from 'react'
import Filtros from '@/components/Productos/Filtros';
import ListasProductos from '@/components/Productos/ListasProductos';
import axios from 'axios';
import { Categorias, NuevosProductos } from '@/additional';



export default function page({productos,categorias}: {productos:NuevosProductos[],categorias:Categorias[]}) {

  const [Productos, setProductos] = useState<NuevosProductos[]>(productos)
  const [filter, setFilter] = useState({
    precio: 'asc',
    nombre: 'asc',
    marca: 'asc',
    categoria: 'asc',
    sub_categoria: 'asc',
    min_price: 0,
    max_price: 0,
    num_page: 1,
  })
  const [loading, setLoading] = useState(false)

  const fetchMoreData = async () => {
    
    
    //setProductos([...Productos, ...newProductos])
  }
  

  return (
    <div className='w-full   flex justify-center items-center text-secondary mb-20'>
      
      <section className='w-10/12 flex gap-10 mt-10 h-full justify-center items-start'>

        <Filtros categorias={categorias} />

        <ListasProductos fetchMoreData={fetchMoreData} productos={productos}  />


      </section>

     




    </div>
  )
}
