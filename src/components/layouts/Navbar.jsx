import React from "react";
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
      <>
      <div className = "nav-bar">
       <ul>
      <li>
        <Link class="active" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link to="/contact">Contact </Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>
    </div>
    </>
  );
};

export default Navbar;
