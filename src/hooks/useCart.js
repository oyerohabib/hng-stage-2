import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

export const useCart = () => {
  const {
    cartItems,
    addToCart,
    handleRemoveItem,
    setCartItems,
    incrementQuantity,
    decrementQuantity,
    calculateTotal,
    clearCart,
  } = useContext(CartContext);

  return {
    cartItems,
    addToCart,
    handleRemoveItem,
    setCartItems,
    incrementQuantity,
    decrementQuantity,
    calculateTotal,
    clearCart,
  };
};
