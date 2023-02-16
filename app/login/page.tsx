'use client'
import React from 'react'
import InputForm from '@/components/common/FormInput'
import Link from 'next/link'
export default function page() {

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  
    //colocar el correo en localstorage
    const { email } = e.currentTarget
    localStorage.setItem('email', email.value)
    //redireccionar a la pagina de inicio
    window.location.href = '/'
    
  }
  return (
    <section className="flex flex-col items-center justify-center w-full mt-20 mb-20 bg-white">
        <div className="flex flex-col gap-5 items-center justify-center w-1/3 bg-white rounded-2xl ">
            <h1 className="text-3xl font-bold text-secondary">Iniciar Sesión</h1>
            <form className="flex flex-col items-center justify-center w-full  gap-8" onSubmit={handleSubmit} >
              <InputForm texto="Correo electrónico" type="text" name="email" />
              <InputForm texto="Contraseña" type="password" name="password" />
                <Link href="/register" className='text-secondary underline' >Crear una cuenta</Link>
                <Link href="/#" className='text-secondary underline' >Recuerdame la contraseña</Link>
                <button className="w-1/2  p-2 rounded-md bg-secondary text-white font-bold hover:bg-slate-800" type='submit' >Iniciar sesión</button>
            </form>
        </div>
    </section>
  )
}
