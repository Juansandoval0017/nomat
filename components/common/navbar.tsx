'use client'
import Image from "next/image"
import { useState } from "react"
import NavLink from "../main_page/navLink"
import Link from 'next/link'

 const Navbar = () => {

    const [active, setActive] = useState(1)

    const email = localStorage.getItem('email')

    return (
        <nav className="w-full flex justify-around items-center p-5  bg-secondary">
            
            <span className="w-14 h-14 overflow-hidden rounded-full">
                <Image src="/LOGO-SECUNDARIO.png" alt="logo" width={200} height={200} />
            </span>


            <div className="w-1/4 flex justify-between text-white text-lg">

                <NavLink active={active} setActive={setActive} id={1} path="/" text="Inicio" />
                <NavLink active={active} setActive={setActive} id={2} path="/Productos" text="Productos" />
                <NavLink active={active} setActive={setActive} id={3} path="/Rastreo" text="Rastreo" />
                
                
            </div>

            {
                email ? 
                <span className="underline text-primary text-lg ">
                    Mi cuenta
                </span> :
                <div className="flex justify-around w-1/4">
                    <button 
                    className=" text-secondary text-lg bg-white pl-2 pr-2 pt-1 pb-1 rounded-md
                    hover:bg-slate-200">
                        <Link href="/login" >
                            Iniciar sesión
                        </Link>
                    </button>
                    <button className="text- text-lg bg-primary pl-2 pr-2 pt-1 pb-1 rounded-md
                    hover:bg-green-600">
                        <Link href="/register" >
                        Registrarse
                        </Link>
                    </button>
                </div>
            }
            

        </nav>
    )


}

export default Navbar