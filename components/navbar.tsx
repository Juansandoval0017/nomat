'use client'
import Image from "next/image"
 const Navbar = () => {


    return (
        <nav className="w-full flex justify-around items-center p-5  bg-secondary">
            
            <span className="w-14 h-14 overflow-hidden rounded-full">
                <Image src="/LOGO-SECUNDARIO.png" alt="logo" width={200} height={200} />
            </span>


            <div className="w-1/4 flex justify-between text-white text-lg">
                <span className="text-primary" >
                    Inicio
                </span>
                <span>
                    Productos
                </span>
                <span>
                    Rastreo
                </span>
            </div>


            <span className="underline text-primary text-lg ">
                Mi cuenta
            </span>

        </nav>
    )


}

export default Navbar