import React from "react";
import { useState, useRef } from "react";
import { FaBars } from "react-icons/fa";
import logo from "./logo.svg";
import { links } from "./data";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  const toggle = () => {
    // console.log(linksRef.current.getBoundingClientRect());

    setShowLinks(!showLinks);
  };

  const linkStyles = {
    height: showLinks
      ? `${linksRef.current.getBoundingClientRect().height}px`
      : "0px",
  };

  return (
    <>
      <nav>
        <div className="nav-header">
          <img src={logo} alt="logo" className="logo" />
          <button className="nav-toggle" onClick={toggle}>
            <FaBars />
          </button>
        </div>

        <div
          className="links-container"
          ref={linksContainerRef}
          style={linkStyles}
        >
          <ul className="links" ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <>
                  <li key={id}>
                    <a href={url}>{text}</a>
                  </li>
                </>
              );
            })}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
