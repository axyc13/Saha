import React from 'react'

export default function Header() {
  return (
    <header className="p-5 text-white bg-black flex items-center gap-15">
      <h1 className = "text-3xl shrink-0" >Saha</h1>
      <nav className = "flex gap-8 flex-1">
        <a>Who We Are</a>
        <a>Our Services</a>
        <a>Contact Us</a>
        <a>Careers</a>
      </nav>
      <p className="shrink-0 p-1">NZ-EN</p>
  </header>
  )
}

