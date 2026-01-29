import logo from "../assets/logo.PNG";
import "../styles/NavBar.css";
import { NavLink } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef();
  const headerRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <header ref={headerRef}>
      <div className="logoAndName">
        <img src={logo} alt="Veecious Logo" />
        <h2 className="text-white">Veecious Security</h2>
      </div>

      {!menuOpen && (
        <div
          className="hamburger"
          onClick={(e) => {
            e.stopPropagation();
            setMenuOpen(true);
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      )}

      <div
        ref={navRef}
        className={`NavigationLinks ${menuOpen ? "open" : ""}`}
      >
        <nav>
          <NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink>
          <NavLink to="/about" onClick={() => setMenuOpen(false)}>About Us</NavLink>
          <NavLink to="/services" onClick={() => setMenuOpen(false)}>Our Services</NavLink>
          <NavLink to="/training" onClick={() => setMenuOpen(false)}>Training</NavLink>
          <NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink>
        </nav>
      </div>
    </header>
  );
}
