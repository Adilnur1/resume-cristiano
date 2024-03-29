import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink className="item" to="/">
        Home
      </NavLink>
      <NavLink className="item" to="/users">
        Users
      </NavLink>
    </div>
  );
};

export default Navbar;
