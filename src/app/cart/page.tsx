"use client"
import { useContext } from "react";
import Link from 'next/link' 
import CartContext from "@/app/context/CartContext";
interface CartItem {
    id:number,
    title:string,
    price:number,
    category:string,
    image:string,
    description:string,
    quantity:number,
    acc:number,
    item:number,
}
interface Cart {
  cartItems: CartItem[];
}
const titleNum=20;
const Cart = () => {
const {addItemToCart,cart,deleteItemFromCart}=useContext(CartContext);
const increaseQty=(cartItem:CartItem)=>{  
const  newQty= cartItem?.quantity +1
const item ={...cartItem,quantity:newQty}
if(newQty>10) return;
addItemToCart(item)
}
const decreaseQty=(cartItem:CartItem)=>{  
const  newQty= cartItem?.quantity -1
const item ={...cartItem,quantity:newQty}
if(newQty<1) return;
addItemToCart(item)
}
const amountWithoutTax=cart?.cartItems?.reduce((acc:CartItem,item:CartItem)=>acc + item.quantity*item.price,0).toFixed(2) 
// acc + item.quantity*item.price red color underline due the typeScript
const amountWithTax=()=>{
  const tax=0.13*amountWithoutTax
  return (Number(amountWithoutTax)+Number(tax)).toFixed(2)
}
  return (
    <>
      <section className="py-5 sm:py-7 bg-blue-100">
        <div className="container max-w-screen-xl mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-2">
            {cart?.cartItems?.length>0?`${cart?.cartItems?.length} Item(s) in Cart`: "Empty Cart "}
             </h2>
        </div>
      </section>
      {cart?.cartItems?.length>0&&
      
      <section className="py-10">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4">
            <main className="md:w-3/4">
              <article className="border border-gray-200 bg-white shadow-sm rounded mb-5 p-3 lg:p-5">
              {cart?.cartItems?.map((cartItem:CartItem)=>{
                return <div>
                <div className="flex flex-wrap lg:flex-row gap-5  mb-4">
                  <div className="w-full lg:w-2/5 xl:w-2/4">
                    <figure className="flex leading-5">
                      <div>
                        <div className="block w-16 h-16 rounded border border-gray-200 overflow-hidden">
                          <img src={cartItem.image} alt="Title" />
                        </div>
                      </div>
                      <figcaption className="ml-3">
                        <p>
                          <Link href={`/details/${cartItem.id}`} className="hover:text-blue-600">
                          {

                           titleNum > cartItem.title.length?cartItem.title:cartItem.title.slice(0,titleNum-2)+"..."

                          }
                          </Link>
                        </p>
                        <p className="mt-1 text-gray-400"> Category: {cartItem.category}</p>
                      </figcaption>
                    </figure>
                  </div>
                  <div className="w-24 ">
                    <div className="flex flex-row h-10 w-full rounded-lg  bg-transparent mt-1">
                      <button onClick={()=>decreaseQty(cartItem)}
                        data-action="decrement"
                        className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
                      >
                        <span className="m-auto text-2xl font-thin" >−</span>
                      </button>
                      <input
                        type="number"
                        className=" focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-900  outline-none custom-input-number"
                        name="custom-input-number"
                        value={cartItem.quantity}
                        readOnly
                      ></input>
                      <button
                        data-action="increment"
                        className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
                        onClick={()=>increaseQty(cartItem)}
                      >
                        <span className="m-auto text-2xl font-thin" >+</span>
                      </button>
                    </div>
                  </div>
                  <div>
                    <div className="leading-5">
                      <p className="font-semibold not-italic">${cartItem.price * cartItem.quantity}</p> 
                      {/* can't able to use cartItem.quantity.toFixed(2) */}
                      <small className="text-gray-400">
                        ${cartItem.price}
                         /per item{" "}
                      </small>
                    </div>
                  </div>
                  <div className="flex-auto">
                    <div className="float-right">
                      <a onClick={()=>{deleteItemFromCart(cartItem.id)}} className="px-4 py-2 inline-block text-red-600 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 cursor-pointer">
                        Remove
                      </a>
                    </div>
                  </div>
                </div>

                <hr className="my-4" />
              </div>

              })}
                
              </article>
            </main>
            <aside className="md:w-1/4">
              <article className="border border-gray-200 bg-white shadow-sm rounded mb-5 p-3 lg:p-5">
                <ul className="mb-5">
                  <li className="flex justify-between text-gray-600  mb-1">
                    <span>Total price:</span>
                    <span>${amountWithoutTax}</span>
                  </li>
                  <li className="flex justify-between text-gray-600  mb-1">
                    <span>Total Units:</span>
                    <span className="text-green-500">{cart?.cartItems?.length} (Units)</span>
                  </li>
                  <li className="flex justify-between text-gray-600  mb-1">
                    <span>TAX:</span>
                    <span>13%</span>
                  </li>
                  <li className="text-lg font-bold border-t flex justify-between mt-3 pt-3">
                    <span>Total price:</span>
                    <span>${amountWithTax()}</span>
                  </li>
                </ul>

                <a className="px-4 py-3 mb-2 inline-block text-lg w-full text-center font-medium text-white bg-green-600 border border-transparent rounded-md hover:bg-green-700 cursor-pointer">
                  Continue
                </a>

                <Link href="/" className="px-4 py-3 inline-block text-lg w-full text-center font-medium text-green-600 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100">
                  Back to shop
                </Link>
              </article>
            </aside>
          </div>
        </div>
      </section>
      }
    </>
  );
};

export default Cart;