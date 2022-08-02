import React from "react";
import { Link } from "react-router-dom";
import "../style/nav.css";

function Nav() {
  return (
    <nav>
      <h1 className="logo">Logo</h1>

      <ul>
        <Link style={{textDecoration:"none"}} to={"/"}>
          <li>Home</li>
        </Link>
        <Link style={{textDecoration:"none"}} to={"punchin"}>
          <li>Punch-in/out</li>
        </Link>
        <Link style={{textDecoration:"none"}} to={"Attconfig"}>
          <li>Configuration</li>
        </Link>
        <Link style={{textDecoration:"none"}} to={"Viewattrecord"}>
          <li>Employee Records</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
