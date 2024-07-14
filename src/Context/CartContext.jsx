/* eslint-disable react/prop-types */
import { useState, createContext, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // function to retrieve cart items from localStorage
  const getCartItems = () => {
    const storedCartItems = localStorage.getItem("cartItems");
    return storedCartItems ? JSON.parse(storedCartItems) : [];
  };

  const [cartItems, setCartItems] = useState(getCartItems());
  const [wishList, setWishList] = useState([]);

  useEffect(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  // Save cart items to localStorage whenever cartItems state changes
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (productToAdd) => {
    // Checks if the product is already in cart
    const existingProductIndex = cartItems.findIndex(
      (item) => item.id === productToAdd.id
    );

    if (existingProductIndex !== -1) {
      // Product already exists in cart, update quantity
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingProductIndex].quantity += 1;
      setCartItems(updatedCartItems);
    } else {
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

  const isInCart = (productId) => {
    return cartItems.some((item) => item.id === productId);
  };

  const handleCartAction = (product) => {
    if (isInCart(product.id)) {
      handleRemoveItem(product.id);
    } else {
      addToCart(product);
    }
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

  const addToWishList = (item) => {
    // Checks if the item is already in the wish list
    const existingItemIndex = wishList.findIndex(
      (wishListItem) => wishListItem.id === item.id
    );

    if (existingItemIndex === -1) {
      setWishList((prevItems) => [...prevItems, item]);
    } else {
      alert(`Item ${item.name} is already in the wish list.`);
    }
  };

  const removeFromWishList = (itemId) => {
    setWishList((prevItems) => prevItems.filter((item) => item.id !== itemId));
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
        isInCart,
        handleCartAction,
        clearCart,
        wishList,
        addToWishList,
        removeFromWishList,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
