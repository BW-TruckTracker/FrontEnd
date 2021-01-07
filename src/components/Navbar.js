import React from 'react'
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="headernav">
      <header>
        <div className="container">
            <h1>Co-Make</h1>
        </div>

        <nav id="hnavbuttons">
          <NavLink className="main-nav" activeClassName="active" to="/signup">
            SignUp
          </NavLink>
          <NavLink className="main-nav" activeClassName="active" to="/login">
            Login
          </NavLink>
          <NavLink className="main-nav" activeClassName="active" to="/home">
            home
          </NavLink>
        </nav>
      </header>
    </div>
  );
};

export default Nav;
