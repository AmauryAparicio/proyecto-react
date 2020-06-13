import React, { Component } from "react";
import { Fragment } from "react";
import Sidebar from "./Sidebar";

class Blog extends Component {
  render() {
    return (
      <Fragment>
        <section id="slider" className="slider-small">
          <h1>Blog</h1>
        </section>
        <div className="center">
          <div id="content">
            <h1 className="subheader">Blog</h1>
          </div>
          <Sidebar blog="true"></Sidebar>
        </div>
      </Fragment>
    );
  }
}

export default Blog;
