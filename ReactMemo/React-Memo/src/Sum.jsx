import React from "react";

//react memo skip the child re-render
const Sum=React.memo(({number})=>{
  function calculateSum(){
    let sum=0;
    for(let i=1;i<=number;i++){
      sum+=i;
    }

    return sum;
  }

  const total=calculateSum();

  console.log("sum render")
  return (
    <>
      <h1>This is our math library</h1>
      <h2>Sum is: {total}</h2>
    </>
  )
})


export default Sum;