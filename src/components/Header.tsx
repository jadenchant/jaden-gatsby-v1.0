import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import "../css/Header.css";

const Header = () => {
  const [dropdown, setDropdown] = useState(false);
  const [hamberger, setHamberger] = useState("nav-hamberger-icon");

  const handleClick = () => {
    const defaultHamberger = "nav-hamberger-icon";
    if (dropdown) {
      setDropdown(false);
      setHamberger(defaultHamberger + " close");
      console.log("dropdown set false");
    } else {
      setDropdown(true);
      setHamberger(defaultHamberger + " open");
      console.log("dropdown set true");
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
        <div className='title'>{/* <h1>Jaden Chant</h1> */}</div>
      </header>
    </main>
  );
};

export default Header;
