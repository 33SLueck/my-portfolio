import React , {useState, useEffect, useRef} from "react";
import { Link, NavLink } from "react-router-dom";
import "./TopNav.css"
export const TopNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  let mobileMenuRef = useRef();
  useEffect(() => {
    let handler =(e) => {
      if (!mobileMenuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown",handler);
  });
  return (
    <nav ref={mobileMenuRef}>
      <Link to="/" className="title" onClick={() => {setMenuOpen(false);}}>Home</Link>
      <div className="menu" onClick={() => {setMenuOpen(!menuOpen);}}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}  >
        <li>
          <NavLink to="/About" onClick={() => {setMenuOpen(!menuOpen);}}>About</NavLink>
        </li>
        <li>
          <NavLink to="/Services"  onClick={() => {setMenuOpen(!menuOpen);}}>Services</NavLink>
        </li>
        <li>
          <NavLink to="Contact"  onClick={() => {setMenuOpen(!menuOpen);}}>Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};
