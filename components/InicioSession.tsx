import React from 'react'

export default function InicioSession() {
  return (
    
    <section className="flex flex-col items-center justify-center w-full h-screen bg-white">
        <div className="flex flex-col items-center justify-center w-1/2 h-1/2 bg-white rounded-2xl">
            <h1 className="text-3xl font-bold text-secondary">Iniciar sesión</h1>
            <form className="flex flex-col items-center justify-center w-full h-1/2">
                <input type="text" placeholder="Correo electrónico" className="w-3/4 h-1/4 p-2 rounded-md border-2 border-secondary focus:outline-none focus:border-primary"/>
                <input type="password" placeholder="Contraseña" className="w-3/4 h-1/4 p-2 rounded-md border-2 border-secondary focus:outline-none focus:border-primary"/>
                <button className="w-3/4 h-1/4 p-2 rounded-md bg-secondary text-white font-bold hover:bg-slate-800">Iniciar sesión</button>
            </form>
        </div>
    </section>

  )
}
