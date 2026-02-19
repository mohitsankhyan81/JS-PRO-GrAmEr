'use client'

import { useEffect, useState } from "react"
const Login=()=>{
    const [name,setname]=useState("");
    const [password,setpassword]=useState("");
    const [data,setdata]=useState([])
    useEffect(()=>{
        console.log(data);
    },[data])
    const handlesubmit=(e)=>{
        e.preventDefault();
        setdata(prev=>[...prev,{name,password}]);
        setname("");
        setpassword("");
    }
    return (
        <>
            <div>
            <div className="flex justify-center items-center h-screen">
            <form onSubmit={handlesubmit}>
                <h1 className="font-bold text-4xl text-blue-500">
                    Login
                </h1>
                <input type="text" placeholder="Enter Name" value={name} onChange={(e)=>setname(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                <input type="password" placeholder="Enter Password" value={password} onChange={(e)=>setpassword(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300">Login</button>
            </form>
            </div>
            </div>
        </>
    )
}

export default Login