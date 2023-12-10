import React, { useState } from "react";
import { NAV_LINKS } from "../constants";
import "./Nav.css"; // Import your CSS file

const Nav = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <a href="/">
            <img src="Logo.svg" alt="Logo" className="image" />
          </a>
        </div>

        <ul className="nav-list">
          {NAV_LINKS.map((link) => (
            <li key={link.key}>
              <a href={link.href} className="nav-link">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <button className="mobile-menu" onClick={() => setIsMobile(!isMobile)}>
          {isMobile ? (
            <img src="close.svg" alt="close menu" className="close-menu-icon" />
          ) : (
            <img
              src="icon _hamburger_menu.svg"
              alt="menu"
              className="mobile-menu-icon"
            />
          )}
        </button>
      </nav>

      {isMobile && (
        <nav className="mobile-navbar">
          <ul className="mobile-nav-list">
            {NAV_LINKS.map((link) => (
              <li key={link.key}>
                <a href={link.href} className="mobile-nav-link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </>
  );
};

export default Nav;
