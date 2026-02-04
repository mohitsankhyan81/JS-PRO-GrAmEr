const Couther=({count,setcount})=>{

    return (
        <>
            <h1>count: {count}</h1>
            <button onClick={()=>setcount(e=>e+1)}>increament</button>
            <button onClick={()=>setcount(e=>e-1)}>decrement</button>
        </>
    )
}

export default Couther;