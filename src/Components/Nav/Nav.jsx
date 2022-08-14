import React from "react";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { AiOutlineProfile } from "react-icons/ai";
import { BiMessageDetail } from "react-icons/bi";
import { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>

      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>

      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <BiUserCircle />
      </a>

      <a href="#skills" onClick={() => setActiveNav("#skills")}
        className={activeNav === "#skills" ? "active" : ""}>
        <MdOutlineLibraryBooks />
      </a>

      <a href="#portfolio" onClick={() => setActiveNav("#portfolio")}
        className={activeNav === "#portfolio" ? "active" : ""}>
        <AiOutlineProfile />
      </a>

      <a href="#Contact" onClick={() => setActiveNav("#Contact")}
        className={activeNav === "#Contact" ? "active" : ""}>
        <BiMessageDetail />
      </a>

    </nav>
  );
};

export default Nav;
