import Body from "./components/Body.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import { useState } from 'react'
const App=()=>{
  const [count,setcount]=useState(0);

  return (
    <>
      <Header count={count}/>
      <Body count={count} setcount={setcount}/>
      <Footer/>
    </>
  )
}

export default App;