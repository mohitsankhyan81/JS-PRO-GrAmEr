import React, { useMemo } from "react";

const ExpensiceCalculation=React.memo(({value})=>{
  function expencceCalculation(){
    let sum=0;
    for(let i=1;i<=value;i++){
      sum+=i;
    }
    return sum;
  }

  const data=useMemo(()=>{
    return expencceCalculation();
  },[value])

  return(
     <>
      <h1>{data}</h1>
     </>
  )
})

export default ExpensiceCalculation;