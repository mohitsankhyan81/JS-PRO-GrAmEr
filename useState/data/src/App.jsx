import { useState } from "react";

//usestate render the conde again and again

//usestate is function who provide you react


const App=()=>{
  let [count,setcount]=useState(0);
  // let count=0;
  // function increaseNumber(){
  //   count++;
  //   const pera=document.querySelector('p');
  //   pera.textContent=`Counter: ${count}`;
  //   // console.log(count);
  // }
 
  function increaseNumber(){
    count++;
    setcount(count);
  }


  return(
    <>
      <p>Counter: {count}</p>
      <button onClick={increaseNumber}>increment</button>
    </>
  );
}

export default App;