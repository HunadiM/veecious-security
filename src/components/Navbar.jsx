import logo from "../assets/logo.PNG";
import "../styles/NavBar.css";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header>
      
        <img src={logo} alt="Veecious Logo" />
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About Us</NavLink>
        <NavLink to="/services">Our Services</NavLink>
        <NavLink to="/training">Training</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </header>
  );
}
