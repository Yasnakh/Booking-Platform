import "./navbar.css"
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleReg = () => {
    navigate("/register");
  }

  const handleLog = () => {
    navigate("/login");
  }

  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">OnlineBooking</span>
        <div className="navItems">
          <button className="navButton" onClick={handleReg}>Register</button>
          <button className="navButton" onClick={handleLog}>Login</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar