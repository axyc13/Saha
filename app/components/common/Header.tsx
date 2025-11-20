import React from 'react'
import Image from 'next/image'
import ArrowDropDown from '@/public/arrowDropDown.png'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="p-5 text-white bg-black flex items-center gap-15">
      <Link href="/">
        <h1 className = "text-3xl shrink-0" >Saha</h1>
      </Link>
      <nav className = "flex gap-6 flex-1 items-center">
        <a>
          <div className ="flex items-center">
            Who We Are
            <Image src={ArrowDropDown} alt="Arrow"/>
          </div>
        </a>
        <a>          
          <div className ="flex items-center">
            Our Services
            <Image src={ArrowDropDown} alt="Arrow"/>
          </div>
        </a>
        <Link href="/contactus" className="pl-2">Contact Us</Link>
        <Link href="/careers" className="pl-4">Careers</Link>
      </nav>
      <p className="shrink-0 p-1">NZ-EN</p>
  </header>
  )
}

