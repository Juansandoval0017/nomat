import React from 'react'

export default function Dot({active}:{active:boolean}) {
  return (
    <div className={active?'w-2 h-2 bg-secondary rounded-full':'w-2 h-2 bg-slate-400 rounded-full'}></div>
      
  )
}
