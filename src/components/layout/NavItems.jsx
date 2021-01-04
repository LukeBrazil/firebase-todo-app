import React from "react";
import { Link } from "react-router-dom";

export default function NavItems() {
  return (
    <>
      <div >
        <Link to="/signin" className="navbar-link">
          Logout
        </Link>
        <Link to="/signup" className="navbar-link">
          Sign Up
        </Link>
        <Link to="/signin" className="navbar-link">
          Sign In
        </Link>
      </div>
    </>
  );
}
