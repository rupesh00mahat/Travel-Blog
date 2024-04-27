import React from "react";
import { IoMdSearch } from "react-icons/io";
import { CiLogin } from "react-icons/ci";

function Navbar() {
  return (
    <nav>
      <ul className="nav-list">
        <li>home</li>
        <li>articles</li>
        <li>news</li>
        <li>about me</li>
      </ul>
      <div className="navbar-button-wrapper">
        <div className="search-wrapper">
          <IoMdSearch />
          search
        </div>
        <div className="login-wrapper">
          <CiLogin />
          log in
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
