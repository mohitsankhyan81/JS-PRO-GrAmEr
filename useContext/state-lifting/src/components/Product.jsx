import {useState} from 'react';
import {ProductContext} from '../App.jsx'
import {useContext} from 'react';

const Product=({item})=>{
    const [addtocart,setaddtocart]=useState(false);
    const {cartItem,setCartItem}=useContext(ProductContext);
    return(
        <>
            <div>
                <h1>Name: {item.name}</h1>
                <h2>price: {item.price}</h2>
                {
                    addtocart?<button onClick={()=>{setaddtocart(false),setCartItem(e=>e-1)}}>
                        Remove
                    </button>:<button onClick={()=>{setaddtocart(true),setCartItem(e=>e+1)}}>Add</button>
                }
            </div>
        </>
    )
}

export default Product