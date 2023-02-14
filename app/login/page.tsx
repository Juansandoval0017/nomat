import React from 'react'
import InputForm from '@/components/FormInput'
import Link from 'next/link'
export default function page() {
  return (
    <section className="flex flex-col items-center justify-center w-full mt-20 mb-20 bg-white">
        <div className="flex flex-col gap-5 items-center justify-center w-1/3 bg-white rounded-2xl ">
            <h1 className="text-3xl font-bold text-secondary">Iniciar Sesión</h1>
            <form className="flex flex-col items-center justify-center w-full  gap-8 ">
              <InputForm texto="Correo electrónico" type="text" />
              <InputForm texto="Contraseña" type="password" />
                <Link href="/register" className='text-secondary underline' >Crear una cuenta</Link>
                <Link href="/#" className='text-secondary underline' >Recuerdame la contraseña</Link>
                <button className="w-1/2  p-2 rounded-md bg-secondary text-white font-bold hover:bg-slate-800">Iniciar sesión</button>
            </form>
        </div>
    </section>
  )
}
