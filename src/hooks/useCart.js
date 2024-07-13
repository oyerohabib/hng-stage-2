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
    calculateTotalPrice,
  } = useContext(CartContext);

  return {
    cartItems,
    addToCart,
    handleRemoveItem,
    setCartItems,
    incrementQuantity,
    decrementQuantity,
    calculateTotalPrice,
  };
};
