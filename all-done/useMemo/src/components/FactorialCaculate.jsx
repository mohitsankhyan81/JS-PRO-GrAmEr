import { useMemo } from "react";

const FactCalculate=({count})=>{
  const data=useMemo(()=>{
    if(count<0)return "Invalid"
    if(count===0)return 1
      let totalcount=1;
      for(let i=1;i<=count;i++){
       totalcount*=i;
      }
      return totalcount;
  },[count]);
  return (
    <>
      <h1>{data}</h1>
    </>
  )
}

export default FactCalculate