import React, { Component, Fragment } from "react";
import { Link, Redirect } from "react-router-dom";
import Moment from "react-moment";
import "moment/locale/es";
import axios from "axios";
import Global from "../Global";
import Sidebar from "./Sidebar";
import ImgDef from "../assets/images/default.png";
import swal from "sweetalert";

class Article extends Component {
  url = Global.url;

  state = {
    article: false,
    status: null,
  };

  componentDidMount() {
    this.getArticle();
  }

  getArticle = () => {
    var id = this.props.match.params.id;

    axios
      .get(this.url + "article/" + id)
      .then((res) => {
        this.setState({
          article: res.data.article,
          status: res.data.status,
        });
      })
      .catch((err) => {
        this.setState({
          articles: false,
          status: "success",
        });
      });
  };

  deleteArticle = (id) => {
    swal({
      title: "¿Estás seguro de querer eliminarlo?",
      text: "Si eliminas este artículo no podras recuperarlo",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios.delete(this.url + "article/" + id).then((res) => {
          this.setState({
            article: res.data.article,
            status: "deleted",
          });
          swal(
            "Artículo eliminado",
            "El artículo fué eliminado correctamente",
            "success"
          );
        });
      } else {
        swal("El artículo no se eliminó");
      }
    });
  };
  render() {
    if (this.state.status === "deleted") {
      return <Redirect to="/blog" />;
    }
    var article = this.state.article;
    return (
      <Fragment>
        <section className="center">
          <div id="content">
            {this.state.article && (
              <article className="article-item article-detail">
                <h1 className="subheader"> {article.title} </h1>
                <div className="image-wrap">
                  {article.image !== null ? (
                    <img
                      src={this.url + "get-image/" + article.image}
                      alt={article.title}
                    />
                  ) : (
                    <img src={ImgDef} alt="Paisaje" />
                  )}
                </div>
                <span className="date">
                  <Moment fromNow>{article.date}</Moment>
                </span>
                <p> {article.content} </p>
                <button
                  onClick={() => {
                    this.deleteArticle(article._id);
                  }}
                  className="btn btn-danger"
                >
                  Eliminar
                </button>
                <Link
                  to={"/blog/editar/" + article._id}
                  className="btn btn-warning"
                >
                  Editar
                </Link>
                <div className="clearfix" />
              </article>
            )}
            {!this.state.article && this.state.status === "success" && (
              <article className="article-item article-detail">
                <h2 className="subheader"> El artículo no existe </h2>
                <p> Intentalo de nuevo más tarde. </p>
              </article>
            )}
            {!this.state.status == null && (
              <article className="article-item article-detail">
                <h2 className="subheader"> Cargando... </h2>
                <p> Espere unos segundos... </p>
              </article>
            )}
          </div>
          <Sidebar blog="true" />
        </section>
      </Fragment>
    );
  }
}

export default Article;
