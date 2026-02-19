'use client'
import React, { createContext, useContext, useEffect, useState } from 'react'

const ProductContext=createContext();
const Authprovider = ({children}) => {
    const [product,setProducts]=useState([]);

    useEffect(()=>{
      const data= localStorage.getItem("products")
      if(data){
        setProducts(JSON.parse(data));
      }
    },[])
    useEffect(()=>{
        localStorage.setItem("products",JSON.stringify(product))
    },[product])
    const addProduct=(title,number,file)=>{
        const newProduct={
            id:Date.now(),
            title,
            number,
            file:file?file.name:null
        }
        setProducts(prev=>[...prev,newProduct]);
    }
  return (
    <>
      <ProductContext.Provider value={{product,addProduct}}>
        {children}
      </ProductContext.Provider>
    </>
  )
}

export default Authprovider

export const useProductContext=()=>{
    return useContext(ProductContext);
}
