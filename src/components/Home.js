import React, { Component } from "react";
import { Fragment } from "react";
import Slider from "./Slider";
import Sidebar from "./Sidebar";
import Articles from "./Articles";

class Home extends Component {
  render() {
    return (
      <Fragment>
        <Slider />
        <div className="center">
          <div id="content">
            <h1 className="subheader">Últimos artículos</h1>
            <Articles home="true" />
          </div>
          <Sidebar />
        </div>
      </Fragment>
    );
  }
}

export default Home;
