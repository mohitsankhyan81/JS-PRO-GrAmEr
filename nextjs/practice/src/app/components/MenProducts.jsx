'use client'
import { useEffect,useState } from "react"

const MenProducts=()=>{
const[products,setProducts]=useState([])

useEffect(()=>{ 
    fetch("/data.json")
    .then(res=>
        res.json()
    )
    .then(data=>
        setProducts(data.boys)
    )
},[])

return(
    <div className="min-h-screen bg-blue-50 p-4">
      <h1 className="text-2xl font-bold text-blue-700 mb-4">
        Men Collection
        </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {products.map(e=>(
          <div key={e.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition p-2">
          <img src={e.photo} alt={e.name} className="w-full h-40 object-cover rounded-md"/>
          <p className="text-sm font-semibold text-blue-800 mt-2">
            {e.name}
            </p>
          <p className="text-blue-600 font-bold text-sm">
            ₹ {e.price}
            </p>
          <p className="text-xs text-gray-500">Size: {e.size}</p>
          <button className="w-full bg-blue-600 text-white text-sm py-1 mt-2 rounded hover:bg-blue-700">
            Add
          </button>
    </div>
))}
</div>
</div>
)
}

export default MenProducts
