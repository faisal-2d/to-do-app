import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <Link to="/" className="btn btn-ghost normal-case text-xl">DailyDo</Link>
        <Link to="/logIn" className="btn btn-ghost normal-case">Log In</Link>
      </div>
    </div>
  );
};

export default Navbar;
