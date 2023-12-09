// Nav.js

import { NAV_LINKS } from "../constants";
import "./Nav.css"; // Import your CSS file

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <a href="/">
          <img src="Logo.svg" alt="Logo" className="image" />
        </a>
      </div>
      {/* <button onClick={toggleNav} type="button">
        {isActive ? "Close" : "Menu"}
      </button> */}
      <ul className="nav-list">
        {NAV_LINKS.map((link) => (
          <li>
            <a href={link.href} key={link.key} className="nav-link">
            {link.label}
            </a>
          </li>
        ))}
      </ul>

          <button className="mobile-menu">
            <img src="icon _hamburger_menu.svg" alt="menu" className="mobile-menu" />
          </button>
      
    </nav>
  );
};

export default Nav;
