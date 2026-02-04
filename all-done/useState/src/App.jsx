import {useState} from 'react';

const App=()=>{
  const [count,setcount]=useState(0);

  const handleincrement=()=>{
    setcount(count+1);
  }

  const handledicrement=()=>{
    setcount(count-1);
  }
  return (
     <>
      <h1>count : {count}</h1>
      <button onClick={handleincrement}>increment</button>
      <button onClick={handledicrement}>decriment</button>
     </>
  )
}

export default App;