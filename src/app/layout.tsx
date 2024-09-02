"use client"
import type { Metadata } from "next";
import Link from "next/link";
import { BsCart4 } from "react-icons/bs";
import { IoIosMenu } from "react-icons/io";
import { useState } from "react";
import { IoClose } from "react-icons/io5";

import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

  const metadata: Metadata = { //export grna milena
  title: "Nepali Bazzar",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [menuOpen, setMenuOpen] = useState(false);
   function handleNav(){
    setMenuOpen(!menuOpen);
  }
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>
          <div className="container mx-auto px-3">
            <ul className="flex justify-between py-2 items-center">
              <div className="md:hidden cursor-pointer">
                {
                  menuOpen ?
                   <IoClose className="text-4xl font-[900] left-5  duration-300 relative z-50" onClick={handleNav} />:  <IoIosMenu  className="text-4xl duration-300 font-[900] relative z-50" onClick={handleNav} />
                }
              </div>
              <div className="flex items-center">
                <li className=" p-1 "><Link className=' text-2xl font-[900] lg:text-3xl' href="/">Nepali Bazzar</Link></li>
                <div className="hidden md:flex items-center">
                  <li className=" ml-10 p-1  "><Link href="/electronics">Electronic</Link></li>
                  <li className="ml-10 p-1 "><Link href="/men">Men</Link></li>
                  <li className="ml-10 p-1 "><Link href="/women">Women</Link></li>
                  <li className="ml-10 p-1 "><Link href="/about">About</Link></li>
                  <li className="ml-10 p-1 "><Link href="/contact">Contact</Link></li>
                </div>
              </div>
              <li className=" p-1 "><Link className='font-bold text-2xl text-blue-400' href="/cart"><BsCart4 /></Link></li>
              <div className={
                menuOpen?"fixed top-0 w-screen duration-300 left-0 ease-in-out h-screen bg-gray-300 z-40":"left-[-100%] bg-gray-300 duration-300 ease-in-out  fixed top-0"
              }>
                  <div className="md:hidden mt-24">
                  <li className=" ml-10 p-1  mt-5"><Link  className="font-bold  text-lg " href="/electronics">Electronic</Link></li>
                  <li className="ml-10 p-1 mt-5  "><Link  className="font-bold  text-lg " href="/men">Men</Link></li>
                  <li className="ml-10 p-1 mt-5  "><Link  className="font-bold  text-lg " href="/women">Women</Link></li>
                  <li className="ml-10 p-1 mt-5  "><Link  className="font-bold  text-lg " href="/about">About</Link></li>
                  <li className="ml-10 p-1 mt-5  "><Link  className="font-bold  text-lg " href="/contact">Contact</Link></li>
                </div>
              </div>
            </ul>
          </div>
        </nav>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
