import React from 'react'

export default function FormInput({texto,type}:{texto:string,type?:string}) {

    
  return (
    
    <section className='w-full flex-col gap-2 flex' >

        <span className='text-secondary font-bold' >{texto}</span>
        <input type={type || "text" } placeholder={texto} className="w-full h-1/4 p-2 rounded-md border-2 border-secondary focus:outline-none focus:border-primary"/>

    </section>

  )
}
