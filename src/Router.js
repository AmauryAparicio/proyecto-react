import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Blog from "./components/Blog";
import Formulario from "./components/Formulario";

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header></Header>
        {/* ----------------------- Configurar rutas y páginas ----------------------- */}
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/home" component={Home}></Route>
          <Route exact path="/blog" component={Blog}></Route>
          <Route exact path="/formulario" component={Formulario}></Route>
        </Switch>
        <div className="clearfix"></div>
        <Footer></Footer>
      </BrowserRouter>
    );
  }
}

export default Router;
