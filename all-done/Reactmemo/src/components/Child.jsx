import React from "react"

const Child=()=>{
    React.memo(()=>{

    })
    console.log("render2")
    return (
        <>
            <h1>I am a child</h1>
        </>
    )
}

export default React.memo(Child);