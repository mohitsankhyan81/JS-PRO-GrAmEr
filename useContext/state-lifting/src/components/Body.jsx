import Couther from "./Couther.jsx"

const Body=({count,setcount})=>{
    return (
        <>
        <h1>I am the body</h1>
        <Couther count={count} setcount={setcount}/>
        </>
    )
}

export default Body