import { Categorias, NuevosProductos } from '@/additional'
import React from 'react'
import Content from './Content'


const getData = async () => {
  const res = await fetch(`${process.env.HOST}/api/productos`,{
    cache: 'no-store',
  })

  const categorias = await fetch(`${process.env.HOST}/api/categorias`,{cache: 'no-store'})

  const data = await res.json()

  const categoriasData = await categorias.json()

  return {
    productos: data ? data : [],
    categorias: categoriasData ? categoriasData : []
  } as {
    productos: NuevosProductos[],
    categorias: Categorias[]

}
}


export default async function page() {

  

 const {productos,categorias} = await getData()
  

  return (
    <Content productos={productos} categorias={categorias} />
  )
}
