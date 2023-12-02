'use client'
import React from 'react'
interface ManuItemProps{
    onclick: () => void;
    label: string
}

const ManuItem : React.FC<ManuItemProps> = ({
    onclick,
    label
})=> {
  return (
    <div
    onClick={onclick}
    className=' px-4 py-3 hover:bg-neutral-200 transition font-semibold'>{label}</div>
  )
}

export default ManuItem