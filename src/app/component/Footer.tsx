"use client"
import Link from 'next/link'
import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineStorefront } from "react-icons/md";
import { TiGift } from "react-icons/ti";
import { MdOutlineHelpCenter } from "react-icons/md";


export default function Footer() {
    const AboutLink=[
        {
            name:"Contact Us",
            href:"/contact"
        },
        {
            name:"About Us",
            href:"/about"
        },
        {
            name:"Careers",
            href:"/careers"
        },
        {
            name:"NepaliBazaar stories",
            href:"/bazarstories"
        },
        {
            name:"Press",
            href:"/press"
        }
    ]
    const GroupLink=[
        {
            name:"Daraz",
            href:"/daraz"
        },
        {
            name:"Thulo",
            href:"/thulo"
        },
        {
            name:"okdam",
            href:"/okdam"
        }
    ]
    const HelpLink=[
        {
            name:"Payments",
            href:"/payments"
        },
        {
            name:"Shipping",
            href:"/shipping"
        },
        {
            name:"FAQ",
            href:"/faq"
        },
        {
            name:"Returns",
            href:"/returns"
        }
    ]
    const SocialLink=[
        {
            name:<FaLinkedin />,
            href:"/linkedin"
        },
        {
            name:<FaYoutube />,
            href:"/youtube"
        },
        {
            name:<FaXTwitter />,
            href:"/x"
        }
    ]
  return (
    <div className='bg-gray-700 py-10 '>
    <div className='container mx-auto px-5'>
        <div className='p-2 flex flex-wrap  justify-around'>
            <div className='md:flex'>
            <div className='flex flex-col '>
                <h2 className='font-bold text-lg mt-5 mb-3'>ABOUT</h2>
                {
                    AboutLink.map((e)=>{
                        return <Link href={e.href} className='text-white text-xs font-bold mt-2 '>{e.name}</Link>
                    })
                }
            </div>
            <div className='flex flex-col md:ml-5 '>
                <h2 className='font-bold text-lg mt-5 mb-3'>GROUP COMPANIES</h2>
                {
                    GroupLink.map((e)=>{
                        return <Link href={e.href} className='text-white text-xs font-bold mt-2 '>{e.name}</Link>
                    })
                }
            </div>
            </div>
            <div className='md:flex'>
            <div className='flex flex-col '>
                <h2 className='font-bold text-lg mt-5 mb-3'>CUSTOMER SERVICE</h2>
                {
                    HelpLink.map((e)=>{
                        return <Link href={e.href} className='text-white text-xs font-bold mt-2 '>{e.name}</Link>
                    })
                }
            </div>
            <div className='flex flex-col md:ml-10'>
                <h2 className='font-bold text-lg mt-5 mb-3'>SOCIAL</h2>
                {
                    SocialLink.map((e)=>{
                        return  <Link href={e.href} className='text-white text-2xl font-bold mt-2 '>{e.name}</Link>
                    })
                }
            </div>
            </div>
        </div>
        <div className='mt-10 text-white flex justify-around flex-wrap items-center'>
            <Link href="/seller"><MdOutlineStorefront className='inline-block text-yellow-400' /><span className='ml-2 text-xs font-bold'>Become a Seller</span></Link>
            <Link href="/gift"><TiGift className='inline-block text-yellow-400' /><span className='ml-2 text-xs font-bold'>Gifts Cards</span></Link>
            <Link href="/help"><MdOutlineHelpCenter className='inline-block text-yellow-400' /><span className='ml-2 text-xs font-bold'>Help Center</span></Link>
            <p className='text-xs font-bold'>&copy;2020-2024Nepalibazar.com</p>
        </div>
    </div>
    </div>
  )
}
