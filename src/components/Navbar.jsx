import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul style={{ listStyle: "none", display: "flex" }}>
        <li style={{ marginRight: "10px" }}>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/add-user"}>Add User</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
