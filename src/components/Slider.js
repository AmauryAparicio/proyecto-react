import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Slider extends Component {
  render() {
    return (
      <section id="slider" className="slider-big">
        <h1>Bienvenido al curso de React en Frameworks para JS</h1>
        <NavLink to="/blog" className="btn-white">
          Ir al Blog
        </NavLink>
      </section>
    );
  }
}

export default Slider;
