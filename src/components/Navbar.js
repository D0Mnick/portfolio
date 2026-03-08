import React, { useState } from "react";
import { Link } from "react-router-dom"; // ✅ changed from react-scroll
import { TiThMenuOutline } from "react-icons/ti";
import { FaTimes } from "react-icons/fa";
import "./hero.css";

function Nav() {
  const [nav, setNav] = useState(false);

  const handleNav = () => setNav(!nav);

  return (
    <div className="nav">
      <div className="navlogo">
        {/* ✅ Logo Text */}
        <Link to="/" onClick={() => setNav(false)}>
          <h2 className="logo-text">MyPortfolio</h2>
        </Link>

        {/* ✅ Navigation Menu */}
        <div id="navs">
          <ul id="navmenu" className={nav ? "active" : ""}>
            <li>
              <Link to="/" onClick={handleNav}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={handleNav}>
                About Us
              </Link>
            </li>
            <li>
              <Link to="/project" onClick={handleNav}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={handleNav}>
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/Resume" onClick={handleNav}>
                Resume
              </Link>
            </li>
          </ul>
        </div>

        {/* ✅ Mobile Menu Toggle */}
        <div onClick={handleNav} className="navmobile">
          {nav ? (
            <FaTimes style={{ color: "#17cf97", fontSize: "25px" }} />
          ) : (
            <TiThMenuOutline style={{ color: "#17cf97", fontSize: "25px" }} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Nav;
