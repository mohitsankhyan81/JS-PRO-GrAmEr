import Home from "./components/Home"
import Navbar from "./components/Navbar"

const page=()=>{
  return (
    <>
    <Navbar/>
    <div className="flex items-center justify-center h-screen">
      <h1 className="text-4xl text-red-600 border-4 border-amber-600 rounded-1">
          Home Page
      </h1>
    </div>
    <Home/>
    </>
  )
}

export default page