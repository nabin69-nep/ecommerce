"use client"
import React from 'react'
import Link from "next/link";
import { BsCart4 } from "react-icons/bs";
import { IoIosMenu } from "react-icons/io";
import { useState } from 'react';
import { IoClose } from "react-icons/io5";
import { usePathname } from 'next/navigation';
import { useContext } from "react";
import CartContext from "@/app/context/CartContext"
const NavLink=[
  {name: "Electronics",  href: "/electronics"},
  {name: "Men",  href: "/men"},
  {name: "Women",  href: "/women"},
  {name: "Jewelery",  href: "/jewelery"},
  {name: "About",  href: "/about"},
  {name: "Contact",  href: "/contact"},
]
function Navbar() {
  const {cart}=useContext(CartContext);
    const [menuOpen, setMenuOpen] = useState(false);
   function handleNav(){
    setMenuOpen(!menuOpen);
  }
  const pathName=usePathname();
  return (
    <nav className='fixed top-0 bg-white  w-screen shadow-sm'>
          <div className="container mx-auto px-5">
            <ul className="flex justify-between py-2 items-center">
              <div className="md:hidden cursor-pointer">
                {
                  menuOpen ?
                   <IoClose className="text-4xl font-[900] duration-300 relative z-[9999]" onClick={handleNav} />:  <IoIosMenu  className="text-4xl duration-300 font-[900] relative z-50" onClick={handleNav} />
                }
              </div>
              <div className="flex items-center">
                <li className=" p-1 "><Link className=' text-2xl font-[900] lg:text-3xl' href="/">Nepali Bazaar</Link></li>
                <div className="hidden md:flex items-center">
                  {
                    NavLink.map((link)=>{
                      const isActive =pathName.startsWith(link.href) 
                      return <li className={isActive?"ml-10  p-1 text-red-500":"ml-10  p-1 "}><Link href={link.href}>{link.name}</Link></li>
                    })
                  }
                </div>
              </div>
              <li className=" p-1 "><Link className=' flex items-center text-blue-400' href="/cart"><BsCart4 className='font-bold text-3xl'/>({cart?.cartItems?.length>0?cart?.cartItems?.length:"0"})</Link></li>
              <div className={
                menuOpen?"fixed top-0 w-screen duration-300 left-0 ease-in-out h-screen bg-gray-300 z-[999]":"left-[-100%] bg-gray-300 duration-300 ease-in-out  fixed top-0"
              }>
                  <div className="md:hidden mt-24">
                  {
                    NavLink.map((link)=>{
                      const isActive =pathName.startsWith(link.href) 
                      return <li className=" ml-10  p-1"><Link onClick={handleNav} className={isActive?"font-bold  text-lg text-red-500":"font-bold  text-lg"}  href={link.href}>{link.name}</Link></li>
                    })
                  }
                </div>
              </div>
            </ul>
          </div>
        </nav>
  )
}

export default Navbar