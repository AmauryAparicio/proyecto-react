import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Blog from "./components/Blog";
import Formulario from "./components/Formulario";
import Search from "./components/Search";
import Article from "./components/Article";
import CreateArticle from "./components/CreateArticle";
import EditArticle from "./components/EditArticle";

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        {/* ----------------------- Configurar rutas y páginas ----------------------- */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/formulario" component={Formulario} />
          <Route exact path="/blog/articles/:id" component={Article} />
          <Route exact path="/blog/busqueda/:search" component={Search} />
          <Route exact path="/blog/crear" component={CreateArticle} />
          <Route exact path="/blog/editar/:id" component={EditArticle} />
          <Route
            exact
            path="/redirect/:search"
            render={(props) => {
              var search = props.match.params.search;
              return <Redirect to={"/blog/busqueda/" + search} />;
            }}
          />
        </Switch>
        <div className="clearfix"></div>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default Router;
