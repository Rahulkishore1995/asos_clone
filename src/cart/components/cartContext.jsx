import { createContext,useState } from "react";
export const CartContext = createContext();

export const  CartContextProvider = ({children})=>{
    const [cart,setCart] = useState([]);
    const handlechange = (inc)=>{
        setCart(inc)

    }
    return (
        <CartContext.Provider value = {{cart,handlechange}}>{children}</CartContext.Provider>
    )
}