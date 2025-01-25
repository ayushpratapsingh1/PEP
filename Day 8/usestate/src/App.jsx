import React, { useState , createContext} from 'react'
import './App.css'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cart from './components/Cart'
import Product from './components/Product'
export const CartContext = createContext();
function App() {
  const [cart, setCart] = useState(0);
  return (
    <CartContext.Provider value={{cart, setCart}}> 
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product" element={<Product />} />
        {/* <Route path="/profile" element={<Profile />} /> */}
      </Routes>    
    </BrowserRouter>
    </CartContext.Provider>
  )
}

export default App