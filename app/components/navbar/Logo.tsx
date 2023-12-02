'use client'
import { useRouter } from 'next/navigation'
import React from 'react'
import Image from 'next/image';
const Logo = () => {
    const router = useRouter()
  return (
    <Image
    alt = 'Logo'
    className = 'hidden md:block cursor-pointer'
    height= '100'
    width= '100'
    src ='/image/logo.png'
    />
    )

}

export default Logo