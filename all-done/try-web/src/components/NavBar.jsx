import { Link } from "react-router-dom"
import Theme from "./Theme"

const Navbar = () => {
  return (
    <>
    <nav style={{display: "flex", gap:"56px" }}>
      <h1>Web-Pro</h1>
      <Link to="/">Dashboard</Link>
      <Link to="/addtask">AddTask</Link>
      <Link to="/register">Register</Link>
      <Theme/>
      <Link to="/login">Login</Link>
    </nav>
    </>
  )
}

export default Navbar
