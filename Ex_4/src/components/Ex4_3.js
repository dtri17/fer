import logo from "../public/img/logo.svg";
// import "../styles/Navbar.css";
import "D:/FER202/Ex_4/src/styles/Navbar.css"

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <a href="#home">Home</a>
        </li>
        <li className="nav-item">
          <a href="#search">Search</a>
        </li>
        <li className="nav-item">
          <a href="#contact">Contact</a>
        </li>
        <li className="nav-item">
          <a href="#login">Login</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
