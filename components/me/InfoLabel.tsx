import React from 'react'

export default function InfoLabel({
    label,
    txt
}:

{
    label: string,
    txt: string
}
) {
  return (
    <div className='w-full flex gap-0 items-center border-secondary border-2' >
        <span className='p-1 bg-secondary text-white w-1/4 text-center' >{label}</span>
        <span className='p-1 w-3/4 text-center' >{txt}</span>
    </div>
  )
}
