import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaTimes, FaBars } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { HiOutlineShoppingCart } from "react-icons/hi";

import logo from "../../assets/logo.png";
import logoMoblie from "../../assets/logoMobile.png";

import "./styles.css";

const NavBar = () => {
  const [isMobile, setMobile] = useState(false);

  return (
    <header className="navbar-header">
      <nav className="navbar">
        <img className="logo" src={logo} alt="Logo corebiz #gobeyond" />
        <img
          className="logo-mobile"
          src={logoMoblie}
          alt="Logo corebiz #gobeyond"
        />

        <ul
          className={isMobile ? "nav-links-mobile" : "nav-links"}
          onClick={() => setMobile(false)}
        >
          <Link to="/" className="link">
            <li>Home</li>
          </Link>

          <Link to="/categoria1" className="link">
            <li>Categoria 1</li>
          </Link>

          <Link to="/categoria2" className="link">
            <li>Categoria 2</li>
          </Link>

          <Link to="/contato" className="link">
            <li>Contato</li>
          </Link>
        </ul>

        <button
          className="mobile-menu-icon"
          onClick={() => setMobile(!isMobile)}
        >
          {isMobile ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      <div className="contact-me">
        <div className="submit">
          <input
            className="search"
            type="text"
            placeholder="O que está procurando?"
          />
          <BsSearch className="search-icon" />
        </div>

        <div className="user">
          <AiOutlineUser className="user-icon" />
          <button className="user-bottun">Minha conta</button>

          <HiOutlineShoppingCart className="shoppingcart" />
        </div>
      </div>
    </header>
  );
};

export default NavBar;
