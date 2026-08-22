import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

import {
  FiSearch,
  FiUser,
  FiHeart,
  FiShoppingBag,
  FiMenu,
  FiX,
} from "react-icons/fi";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const navRef = useRef(null);

  // Close menu when user scrolls
  useEffect(() => {
    const handleScroll = () => {
      if (openMenu) {
        setOpenMenu(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [openMenu]);

  // Close menu when user clicks outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close menu when user presses Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && openMenu) {
        setOpenMenu(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [openMenu]);

  // Close menu when a link is clicked
  const handleLinkClick = () => {
    setOpenMenu(false);
  };

  return (
    <nav ref={navRef} className={`navbar ${openMenu ? "open" : ""}`}>

      {/* Logo */}
      <div className="logo">
        LUX <span>Clothings</span>
      </div>

      {/* Navigation Links */}
      <div className="nav-links">
        <Link to="/new-arrivals" onClick={handleLinkClick}>New Arrivals</Link>
        <Link to="/best-sellers" onClick={handleLinkClick}>Best Sellers</Link>
        <Link to="/sale" onClick={handleLinkClick}>Sale</Link>
        <Link to="/collections" onClick={handleLinkClick}>Collections</Link>
        <Link to="/shop" onClick={handleLinkClick}>SHOP</Link>
        <Link to="/about" onClick={handleLinkClick}>ABOUT us</Link>
      </div>

      {/* Icons */}
      <div className="nav-icons">
        <FiSearch />
        <FiUser />
        <FiHeart />
        <FiShoppingBag />
      </div>

      {/* Mobile Menu Button */}
      <button
        className="menu-btn"
        onClick={() => setOpenMenu(!openMenu)}
        aria-label="Toggle navigation menu"
        aria-expanded={openMenu}
      >
        {openMenu ? <FiX /> : <FiMenu />}
      </button>

    </nav>
  );
};

export default Navbar;