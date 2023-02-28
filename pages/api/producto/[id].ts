import type { NextApiRequest, NextApiResponse } from 'next'
import key from '@/key.json'
import axios from 'axios'
import { NewToken } from '@/utils/NewToken'
import { Catalogo,Producto } from '@/additional'
import { Console } from 'console'


type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  //get the last part of the url
  const id = req.url?.split("/").pop()

  console.log(id)

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
        'X-NUMBERPAGE': '1',
        'X-PARTNUM': id,
    }
  })


  const catalogo: Catalogo = productos.data

  const producto: Producto = catalogo.listaproductos[0]



  res.status(200).json(producto)
}