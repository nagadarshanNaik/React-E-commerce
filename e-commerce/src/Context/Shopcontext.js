import React, { createContext, useState } from "react";
import all_products from "../Components/Assets/all_product";

export const ShopContext = createContext(null);
const getDefaultCart = () =>{
  let cart = {};
  for(let index=0; index < all_products.length+1; index++){
    cart[index] = 0;
  }
  return cart;
}

function ShopContextProvider(props) {
  const [cartItems,setCartItem] = useState(getDefaultCart())

  const addToCart = (itemId) =>{
    setCartItem((prev) => {
      const updatedCart = {...prev, [itemId]: prev[itemId] + 1};
      return updatedCart;
    });
  }
  
  const removeFromCart = (itemId) =>{
    setCartItem((prev) => {
      const updatedCart = {...prev, [itemId]: prev[itemId] - 1};
      return updatedCart;
    });
  }
  
  const contextValue = { all_products,cartItems,addToCart,removeFromCart};

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
}
export default ShopContextProvider;
