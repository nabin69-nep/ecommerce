import React from 'react'
import Link from 'next/link'
import { FaArrowDown } from "react-icons/fa";
export default function NotFoundPage() {
  return (
    <div className='mt-20  flex justify-center items-center flex-col'> 
        <h2 className='mt-10 text-4xl'>An Error Occurred.</h2>
      <p className='mt-7'><strong>Sorry, something went wrong.</strong></p>
      <p className='mt-5 opacity-70 text-sm'>The server encountered an error and could not complete your request. We will soon fix this issue. Please, try again later.</p>
      <Link href="/" className='mt-10 p-2 font-bold hover:bg-blue-800 rounded bg-blue-500 text-white'>BACK TO HOMEPAGE<FaArrowDown  className='ml-2 inline-block'/> </Link>
    </div>
  )
}
