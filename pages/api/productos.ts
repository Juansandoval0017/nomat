// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import key from '@/key.json'
import axios from 'axios'
import { NewToken } from '@/utils/NewToken'
import { Catalogo } from '@/additional'


export default async  function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  
  const actualDateStamp = new Date().getTime()
  const KeyDateStamp = new Date(key.expires).getTime()
  const  token =  actualDateStamp > KeyDateStamp ? await NewToken() : key.token

  const productos = await axios.post('/api/Webapi/VerCatalogo'
                                      ,{},{
                                        baseURL: process.env.API_URL,
                                        headers: {
                                            Authorization : `Bearer ${token}`,
                                            'Content-Type': 'application/json',
                                            'X-DISPONIBILIDAD': '1',
                                            'X-DESCUENTO': '0',
                                            'X-PRODUCTONUEVO': '1',
                                            'X-NUMBERPAGE': '1',
                                        }
                                      })

   const catalogo: Catalogo = productos.data
  

  console.log("Realizando peticion a la api y separando productos...")
  const listaProductos = catalogo.listaproductos.map((producto) => {
    return {
      name: producto.Name,
      precio: producto.precio,
      slug: producto.slug,
      image: producto.Imagenes[0],
      partNum: producto.PartNum,
    }
  })






  res.status(200).json(listaProductos)
}