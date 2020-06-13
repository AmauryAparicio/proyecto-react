import React, { Component, Fragment } from "react";
import Sidebar from "./Sidebar";

class Formulario extends Component {
  render() {
    return (
      <Fragment>
        <section id="slider" className="slider-small">
          <h1>Formulario</h1>
        </section>
        <div className="center">
          <div id="content">
            <h1 className="subheader">Formulario</h1>
          </div>
          <Sidebar></Sidebar>
        </div>
      </Fragment>
    );
  }
}

export default Formulario;
