import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import "@fontsource/lora";
import "../css/Header.css";

const Header = () => {
  const [dropdown, setDropdown] = useState(false);
  const [hamberger, setHamberger] = useState("nav-hamberger-icon");
  const [nav, setNav] = useState("nav initial");

  const handleClick = () => {
    const defaultHamberger = "nav-hamberger-icon";
    const defaultNav = "nav";
    if (dropdown) {
      setDropdown(false);
      setHamberger(defaultHamberger + " close");
      setNav(defaultNav + " initial");
    } else {
      setDropdown(true);
      setHamberger(defaultHamberger + " open");
      setNav(defaultNav + " final");
    }
  };

  useEffect(() => {
    window.onload = () => {
      setDropdown(false);
      setHamberger("nav-hamberger-icon");
    };
  });

  return (
    <main className='head'>
      <header className='header'>
        <div className='nav-hamberger' onClick={handleClick}>
          <span className={hamberger}></span>
        </div>
        <div className='title'>
          <h1 className='noselect'>Jaden Chant</h1>
        </div>
      </header>
      <div className={nav}>
        <ul className='nav-items'>
          <Link
            to='/'
            draggable='false'
            className='nav-item'
            activeClassName='current'
          >
            Home
          </Link>
          <Link
            to='/about'
            draggable='false'
            className='nav-item'
            activeClassName='current'
          >
            About
          </Link>
          <Link
            to='/portfolio'
            draggable='false'
            className='nav-item'
            activeClassName='current'
          >
            Portfolio
          </Link>
          <Link
            to='/contact'
            draggable='false'
            className='nav-item'
            activeClassName='current'
          >
            Contact
          </Link>
        </ul>
      </div>
    </main>
  );
};

export default Header;
