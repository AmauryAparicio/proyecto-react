import React, { Component } from "react";
import { Fragment } from "react";
import Slider from "./Slider";
import Sidebar from "./Sidebar";

class Home extends Component {
  render() {
    return (
      <Fragment>
        <Slider></Slider>
        <div className="center">
          <div id="content">
            <h1 className="subheader">Últimos artículos</h1>
          </div>
          <Sidebar></Sidebar>
        </div>
      </Fragment>
    );
  }
}

export default Home;
