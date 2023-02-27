import { Caracteristicas } from '@/additional'
import React from 'react'

export default function Tabla({atributos}: {atributos: Caracteristicas[]}) {
  return (
    <article className='w-full flex justify-center items-center flex-col border border-slate-200 mt-5' >
        <table className='w-3/4 '>
         
          <tbody >
            {
              atributos.map((atributo, i) => {
                return (
                  <tr key={i} className="odd:bg-slate-200" >
                    <td className='border border-secondary text-center p-2'>{atributo.AttributeName}</td>
                    <td className='border border-secondary text-center p-2 '>{atributo.AttributeValue}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </article>
  )
}
