import { Producto } from '@/additional'
import React from 'react'
import Content from './Content'

export const dynamic = 'force-dynamic'

const getData = async (numPart : string) => {

    const data = await fetch(`${process.env.HOST}/api/producto/${numPart}`,{
      cache: 'no-store',
      next:{
        revalidate: 0
      }
    })

   if(!data.ok){
     return {}
   }

    const returnData = await data.json()

    return returnData ? returnData : {}


}

export default async function page({params}: {params: {slug: string}}) {

  const data : Producto = await getData(params.slug)

  return (
    
    <Content data={data} />
    
  )
}
