import {useState} from 'react';
import Product from './Product.jsx'
const Body=()=>{
    const [item,setitem]=useState([
        {id:1,name:"Milk",price:100},
        {id:2,name:"choclate",price:1000},
        {id:3,name:"boranwita",price:130},
        {id:4,name:"kurkure",price:454},
        {id:5,name:"lase",price:23},
        {id:6,name:"mint",price:232},
    ]);
    return (
        <>
        {/* <h1>I am the body</h1>
        <Couther/> */}
        <h1>I am a blinkit Body</h1>
        <div style={{display:"flex",gap:"50px"}}>
        {
            item.map((e)=>(
                <Product key={e.id} item={e}/>
            ))
        }
        </div>
        </>
    )
}

export default Body