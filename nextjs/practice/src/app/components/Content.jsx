'use client'
import { useState } from "react"
import { useProductContext } from "../auth/Authprovider";

const Content=()=>{
    const [title,settitle]=useState("");
    const [number,setnumber]=useState("");
    const [file,setfile]=useState(null);

    const {addProduct}=useProductContext();
    const handlesubmit=(e)=>{
        e.preventDefault();
        
        addProduct(title,number,file);
        settitle("");
        setnumber("")
        setfile(null);
    }
    return (
        <>
            <form onSubmit={handlesubmit}>
                <input type="text" placeholder="Enter Product Name " value={title} onChange={(e)=>settitle(e.target.value)}/>
                <input type="number" placeholder="Product Price" value={number} onChange={(e)=>setnumber(e.target.value)} />
                <input type="file" placeholder="Get File" onChange={(e)=>setfile(e.target.files[0])}/>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default Content