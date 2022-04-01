import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/">Match</Link>
      </li>
      <li>
        <Link to="/">Caregivers</Link>
      </li>
      <li>
        <Link to="/">Bookings</Link>
      </li>
      <li>
        <Link to="/">Contact</Link>
      </li>
    </ul>
  );
}

export default NavBar;
