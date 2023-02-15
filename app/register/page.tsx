import React from 'react'
import InputForm from '@/components/FormInput'
import Link from 'next/link'
export default function page() {
  
    return (
        <section className="flex flex-col items-center justify-center w-full mt-20 mb-20 bg-white">
            <div className="flex flex-col gap-5 items-center justify-center w-1/3 bg-white rounded-2xl ">
                <h1 className="text-3xl font-bold text-secondary">Registrarse</h1>
                <form className="flex flex-col items-center justify-center w-full  gap-8 ">
                    <InputForm  type="text" texto="Nombre Completo" name="name" />
                    <InputForm  type="text" texto="Correo Electronico" name="email" />
                    <InputForm  type="text" texto="Contraseña" name="password" />
                    <InputForm  type="text" texto="Confirmar Contraseña" name="confirmPassword" />
                    <InputForm type="text" texto="Celular" name="phone" />


                    <Link href="/login" className='text-primary underline' >Ya tengo una cuenta</Link>
                    <button className="w-1/2  p-2 rounded-md bg-secondary text-white font-bold hover:bg-slate-800">Registrarse</button>
                </form>
            </div>
        </section>
    )
    
}
