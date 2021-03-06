import React, { Component, Fragment } from "react";
import Sidebar from "./Sidebar";
import Articles from "./Articles";

class Blog extends Component {
  state = {
    articles: {},
    status: null,
  };

  render() {
    return (
      <Fragment>
        <section id="slider" className="slider-small">
          <h1>Blog</h1>
        </section>
        <div className="center">
          <div id="content">
            <Articles />
          </div>
          <Sidebar blog="true" />
        </div>
      </Fragment>
    );
  }
}

export default Blog;
