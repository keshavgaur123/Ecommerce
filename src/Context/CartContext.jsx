import React, { createContext, useState, useEffect } from "react";
export const CartContext = createContext();







function Cartprovider({ children }) {
  const [cart, setCart] = useState([]);
  const [itemAmount, setitemAmount] = useState(0);

  const [total, settotal] = useState(0);

  useEffect(() => {
    const total = cart.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.price * currentItem.amount;
    }, 0);
    settotal(total);
  });

  useEffect(() => {
    if (cart) {
      const amount = cart.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.amount;
      }, 0);
      setitemAmount(amount);
    }
  }, [cart]);

  const addToCart = (product, id) => {
    const newItem = { ...product, amount: 1 };

    const itemIndex = cart.findIndex((item) => item.id === id);

    if (itemIndex >= 0) {
      const updatedCart = [...cart];
      updatedCart[itemIndex] = {
        ...updatedCart[itemIndex],
        amount: updatedCart[itemIndex].amount + 1,
      };
      setCart(updatedCart);
    } else {
      setCart([...cart, newItem]);
    }
  };

  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => {
      return item.id !== id;
    });
    setCart(newCart);
    console.log("new cart removed", id);
  };

  const clearCart = () => {
    setCart([]);
  };

  const incrimentAmount = (id) => {
    const CartItem = cart.find((item) => item.id === id);
    addToCart(CartItem, id);
  };

  const decrimentAmount = (id) => {
    const CartItem = cart.find((item) => {
      return item.id === id;
    });
    if (CartItem) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            amount: CartItem.amount - 1,
          };
        } else {
          return item;
        }
      });
      setCart(newCart);
    }
    if (CartItem.amount < 2) {
      removeFromCart(id);
    }
  };
  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        incrimentAmount,
        clearCart,
        decrimentAmount,
        itemAmount,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
export default Cartprovider;
