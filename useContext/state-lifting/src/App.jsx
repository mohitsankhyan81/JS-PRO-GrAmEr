import Body from "./components/Body.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
// import { useState,createContext } from 'react';
// export const CountContext= createContext();

import {createContext} from 'react';
import {useState} from 'react';

export const ProductContext=createContext();
const App=()=>{
  // const [count,setcount]=useState(0);

  const [cartItem,setCartItem]=useState(0);
  return (
    <>
    {/* <CountContext.Provider value={{count,setcount}}> */}
    <ProductContext.Provider value={{cartItem,setCartItem}}>
      <Header/>
      <Body/>
      <Footer/>
    </ProductContext.Provider>
    {/* </CountContext.Provider> */}

    </>
  )
}

export default App;