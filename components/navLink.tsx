'use client'
import React from 'react'
import Link from 'next/link'

export default function navLink({active, setActive,id,path, text} :

    {
        active: number,
        setActive: any,
        id: number,
        path: string,
        text: string
    }
    
    
    ) {
  return (
    <Link href={path}>
                <span className={ active === id ? "text-primary font-semibold" : "text-white" } 
                
                onClick={()=> { setActive(id) } }>
                    {text}
                </span>
    </Link>
  )
}
