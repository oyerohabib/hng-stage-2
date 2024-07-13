/* eslint-disable react/prop-types */
import { useState, createContext, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // Define getCartItems function to retrieve cart items from localStorage
  const getCartItems = () => {
    const storedCartItems = localStorage.getItem("cartItems");
    return storedCartItems ? JSON.parse(storedCartItems) : [];
  };

  // Initialize cartItems state with the result of getCartItems function
  const [cartItems, setCartItems] = useState(getCartItems());

  // Load cart items from localStorage on component mount
  useEffect(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  // Save cart items to localStorage whenever cartItems state changes
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]); // Triggered whenever cartItems state changes

  const addToCart = (productToAdd) => {
    // Check if the product is already in cart
    const existingProductIndex = cartItems.findIndex(
      (item) => item.id === productToAdd.id
    );

    if (existingProductIndex !== -1) {
      // Product already exists in cart, update quantity
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingProductIndex].quantity += 1;
      setCartItems(updatedCartItems);
    } else {
      // Product is not in cart, add with initial quantity of 1
      const updatedProductToAdd = { ...productToAdd, quantity: 1 };
      setCartItems([...cartItems, updatedProductToAdd]);
    }
  };

  const handleRemoveItem = (productId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCartItems);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const incrementQuantity = (productId) => {
    const updatedCartItems = cartItems.map((item) =>
      item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updatedCartItems);
  };

  const decrementQuantity = (productId) => {
    const updatedCartItems = cartItems.map((item) =>
      item.id === productId
        ? { ...item, quantity: Math.max(1, item.quantity - 1) }
        : item
    );
    setCartItems(updatedCartItems);
  };

  const calculateTotal = () => {
    const total = cartItems.reduce(
      (acc, item) => ({
        totalPrice: acc.totalPrice + item.quantity * parseFloat(item.price),
        totalItems: acc.totalItems + item.quantity,
      }),
      { totalPrice: 0, totalItems: 0 }
    );

    return total;
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        handleRemoveItem,
        setCartItems,
        incrementQuantity,
        decrementQuantity,
        calculateTotal,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
