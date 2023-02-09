import React from 'react'

export default function Dot({active,onClick}:{active:boolean,
onClick?:()=>void}) {
  return (
    <div onClick={onClick}  className={active?'w-2 h-2 bg-secondary rounded-full cursor-pointer ':'w-2 h-2 cursor-pointer bg-slate-400 rounded-full'}></div>
      
  )
}
