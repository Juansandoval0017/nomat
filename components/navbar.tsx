'use client'
import Image from "next/image"
import { useState } from "react"
import NavLink from "./navLink"
 const Navbar = () => {

    const [active, setActive] = useState(1)

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


            <span className="underline text-primary text-lg ">
                Mi cuenta
            </span>

        </nav>
    )


}

export default Navbar