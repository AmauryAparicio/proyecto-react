import React, { Component } from "react";
import logo from "../assets/images/logo.svg";
import { NavLink } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <header id="header">
        <div className="center">
          {/* ----------------------------------------------------------------------- */}
          {/*                                  Logo                                   */}
          {/* ----------------------------------------------------------------------- */}
          <div id="logo">
            <img src={logo} alt="Logotipo" className="app-logo" />
            <span id="brand">
              <strong>Master</strong>React
            </span>
          </div>
          {/* ----------------------------------------------------------------------- */}
          {/*                                  Menu                                   */}
          {/* ----------------------------------------------------------------------- */}
          <nav id="menu">
            <ul>
              <li>
                <NavLink activeClassName="active" to="/home">
                  Inicio
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="active" to="/blog">
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="active" to="/formulario">
                  Formulario
                </NavLink>
              </li>
            </ul>
          </nav>
          <div className="clearfix" />
        </div>
      </header>
    );
  }
}

export default Header;
