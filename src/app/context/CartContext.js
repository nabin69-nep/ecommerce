"use client"
import { useRouter } from "next/navigation";
import {createContext,useEffect,useState} from "react";

const CartContext=createContext();

export const CartProvider=({children})=>{
    const [cart,setCart]=useState([]);

    const setCartTOState=()=>{
        setCart(localStorage.getItem("cart")?JSON.parse(localStorage.getItem("cart")):[])
    }
useEffect(()=>{
    setCartTOState();
},[])
    const addItemToCart=async ({
        id,
        category,
        title,
        price,
        image,
        quantity=1,
        description
    })=>{
        const item={
            id,
            category,
            title,
            price,
            quantity,
            image,
            description 
        };

        const isItemExist=cart?.cartItems?.find(i=>i.id===item.id);
        let newCartItems;
        if(isItemExist){
            newCartItems=cart?.cartItems?.map((i)=>i.id===isItemExist.id?item:i)
        }
        else{
            newCartItems=[...(cart?.cartItems||[]),item]
        }
        localStorage.setItem("cart",JSON.stringify({cartItems:newCartItems}));
        setCartTOState();
    }
    const deleteItemFromCart=(id)=>{
        const newCartItems=cart?.cartItems?.filter(i=>i.id!==id);
        localStorage.setItem("cart",JSON.stringify({cartItems:newCartItems}));
        setCartTOState();

    }
    const router =useRouter;
    return <CartContext.Provider value={{cart,addItemToCart,deleteItemFromCart}}>{children}</CartContext.Provider>
}
export default CartContext;