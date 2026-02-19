'use client'
import { useProductContext } from "../auth/Authprovider"

const Home=()=>{
    const { product } = useProductContext();

    return(
        <>
            {product.map((e)=>(
                <div key={e.id}>
                    <h3>{e.title}</h3>
                    <p>{e.number}</p>
                    <img src={e.img} width="200" alt="product"/>
                </div>
            ))}
        </>
    )
}

export default Home
