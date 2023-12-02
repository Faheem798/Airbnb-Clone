'use client'
import React from 'react'
import Image from 'next/image'
const Avatar = () => {
  return (
    <div>
        <Image 
            alt = 'Avatar'
            className = ' rounded-full'
            height= '30'
            width= '30'
            src ='/image/placeholder.jpg'


        />
    </div>
  )
}

export default Avatar