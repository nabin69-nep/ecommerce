'use client'
import { useContext } from "react";
import CartContext from "@/app/context/CartContext"
import useSWR from "swr";
import Product from "../ProductInterFace";
import Link from "next/link";
import { BsCart4 } from "react-icons/bs";
const fetcher=(...args:[RequestInfo, RequestInit?]) =>fetch(...args).then(res=>res.json())

export default  function JeweleryPage() {
  const {addItemToCart}=useContext(CartContext);
  const {data,error} =useSWR('https://fakestoreapi.com/products',fetcher)
  const Products:Product[]= data;
  if(error){
    return <h1 className="flex items-center justify-center mt-52 text-5xl">Error occur !</h1>
  }
  const addToCartHandler=(item:Product)=>{
    alert("Added to Cart !")
    addItemToCart({
      id:item.id,
      title:item.title,
      image:item.image,
      price:item.price,
      description:item.description,
      category:item.category,
      
    })
  }
    const titleNumber=20;
  return (
    <div className="grid container mx-auto px-3  grid-cols-[repeat(auto-fit,minmax(300px,11fr))] justify-center gap-x-2 gap-y-4 mt-12 items-center">
    {
      Products?Products.map((item,itemIndex)=>{
        if(item.category==="jewelery"){
          return<div key={itemIndex} className="mx-auto p-2 sm:mx-0 max-w-xs md:max-w-sm  lg:max-w-md xl:max-w-lg bg-white border border-gray-200 rounded-lg h-[450px] shadow-lg overflow-hidden">  
          <Link  href={`/details/${item.id}`}>
           <img src={item.image} alt="Product Image" className="w-full h-48 object-contain"/>
           <div className="p-4">
         <h2 className="text-lg  text-orange-600 font-bold">{item.category}</h2>
        <h2 className="text-xl font-bold text-gray-800">
        {
          titleNumber<item.title.length?item.title.slice(0, titleNumber - 3) + '...':item.title
        }
        </h2>
        <p className="text-2xl font-bold mt-5  text-gray-900">$ {item.price}</p>
        <div className="mt-4 flex items-center justify-between">
        <div className="flex mt-10 space-x-3">
          <Link onClick={()=>addToCartHandler(item)} href="/cart" className="px-4 py-2 bg-blue-500  text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
          <BsCart4 className="inline-block"/>Add to Cart
          </Link>
          <Link href={`/details/${item.id}`} className="px-4 py-2 border-2 border-gray-500 hover:bg-gray-500 hover:text-white rounded-lg  focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50">
            Details
          </Link>
        </div>
      </div>
    </div>  </Link>
    </div>
        }
      
                     })
      :<p className="font-bold  text-3xl flex justify-center items-center h-96">Loading Items.....</p>
      }
</div>      
  );
}
