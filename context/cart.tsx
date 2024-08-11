import { createContext, useState } from 'react'
export const Cart = createContext(null)

export default function CartContext({ children }) {
  const [cart, setCart] = useState(null)

  return <Cart.Provider value={{ cart, setCart }}>{children}</Cart.Provider>
}
