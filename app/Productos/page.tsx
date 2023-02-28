import { Categorias, NuevosProductos } from '@/additional'
import React from 'react'
import Content from './Content'


const getData = async () => {
  
  try{
    const res = await fetch(`${process.env.HOST}/api/productos`,{
      cache: 'no-store',
      next: {
        revalidate: 0
      }
    })
  
    const categorias = await fetch(`${process.env.HOST}/api/categorias`,{cache: 'no-store',next: {revalidate: 0}})
  
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
  catch(err){
    console.log(err)
    return{
      productos: [],
      categorias: []

    } 
  }

}


export default async function page() {

  

 const {productos,categorias} = await getData()
  

  return (
    <Content productos={productos} categorias={categorias} />
  )
}
