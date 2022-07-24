import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

const Header = () => {
  return (
    <header className="header">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">Sign up</Link>
        </li>
        <li>
          <Link to="/posts">Post</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
