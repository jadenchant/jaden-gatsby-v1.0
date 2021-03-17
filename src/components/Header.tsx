import React from "react";
import { Link } from "gatsby";
import "../css/Header.css";

const Header = () => {
  return (
    <main className='header'>
      <div className='nav-hamberger'>
        <span className='nav-hamberger-icon'></span>
      </div>
      <div className='title'>{/* <h1>Jaden Chant</h1> */}</div>
    </main>
  );
};

export default Header;
