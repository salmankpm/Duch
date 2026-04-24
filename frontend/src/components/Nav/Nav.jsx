import React, { useState } from "react";
import "./Nav.css";
import { useNavigate } from "react-router-dom";
import Button from "../button/button";

const Nav = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="logo">DUCH</div>

      <ul className="nav-links">
        <li className="active">Catalog</li>
        <li>Puffers</li>
        <li>Boots</li>
      </ul>

      <div className="nav-icons">

        {/* CART BUTTON */}
        <Button name="Cart" />

        {/* ACCOUNT DROPDOWN */}
        <div className={`account ${showDropdown ? "active" : ""}`}>
          <Button
            name="Account"
            onClick={() => setShowDropdown(!showDropdown)}
          />

          <div className="dropdown">

            {/* USER SECTION */}
            <p className="dropdown-title">User</p>
            <p onClick={() => navigate("/login")}>Login</p>
            <p onClick={() => navigate("/signup")}>Signup</p>

            <hr />

            {/* ADMIN SECTION */}
            <p className="dropdown-title">Admin</p>
            <p onClick={() => navigate("/admin/login")}>Login</p>
           

          </div>
        </div>

      </div>
    </nav>
  );
};

export default Nav;