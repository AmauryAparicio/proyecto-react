import React, { Component } from "react";
import { Fragment } from "react";
import Sidebar from "./Sidebar";
import Articles from "./Articles";

class Search extends Component {
  state = {
    articles: {},
    status: null,
  };

  render() {
    var busqueda = this.props.match.params.search;
    return (
      <Fragment>
        <section id="slider" className="slider-small">
          <h1>Busqueda: {busqueda}</h1>
        </section>
        <div className="center">
          <div id="content">
            <Articles search={busqueda} />
          </div>
          <Sidebar blog="true" />
        </div>
      </Fragment>
    );
  }
}

export default Search;
