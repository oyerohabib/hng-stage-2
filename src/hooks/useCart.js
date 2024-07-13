import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

export const useCart = () => {
  const { cartItems, addToCart, cartItemCount, removeFromCart } =
    useContext(CartContext);

  return { cartItems, addToCart, cartItemCount, removeFromCart };
};
