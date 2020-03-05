import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const hide = () => {
    document.querySelector(".toggler").checked = false;
  };

  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/">Gl</Link>
      </div>
      <div className="menu-wrap">
        <input type="checkbox" className="toggler" />
        <div className="hamburger">
          <div></div>
        </div>
        <div className="menu">
          <div>
            <div>
              <ul>
                <li>
                  <Link to="/" onClick={hide}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/resume" onClick={hide}>
                    Resume
                  </Link>
                </li>
                <li>
                  <Link to="/projects" onClick={hide}>
                    Projects
                  </Link>
                </li>
                <li>
                  <Link to="/contact" onClick={hide}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
