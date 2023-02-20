// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import key from '@/key.json'
import axios from 'axios'
import { NewToken } from '@/utils/NewToken'
type Data = {
  name: string
}

export default async  function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  
  const actualDateStamp = new Date().getTime()
  const KeyDateStamp = new Date(key.expires).getTime()
  const  token =  actualDateStamp > KeyDateStamp ? await NewToken() : key.token
  console.log("Realizando peticion a la api...")
  const categorias = await axios.post('/api/Webapi/Ver_Categoria'
                                      ,{},{
                                        baseURL: process.env.API_URL,
                                        headers: {
                                            Authorization : `Bearer ${token}`,
                                            'Content-Type': 'application/json'
                                        }
                                      })

   
              


  res.status(200).json(categorias.data)
}
