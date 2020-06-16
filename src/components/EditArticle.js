import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import Global from "../Global";
import Sidebar from "./Sidebar";
import SimpleReactValidator from "simple-react-validator";
import swal from "sweetalert";
import ImgDef from "../assets/images/default.png";

class EditArticle extends Component {
  url = Global.url;

  titleRef = React.createRef();
  contentRef = React.createRef();

  state = {
    article: {},
    status: null,
    selectedFile: null,
  };

  articleId = this.props.match.params.id;

  componentDidMount() {
    this.getArticle(this.articleId);
  }

  validator = new SimpleReactValidator({
    messages: {
      required: "Este campo no puede estar vacio",
      alpha_num_space:
        "Por favor introduce caracteres alfa-numéricos unicamente",
    },
  });

  getArticle = (id) => {
    axios.get(this.url + "article/" + id).then((res) => {
      this.setState({
        article: res.data.article,
      });
    });
  };

  changeState = () => {
    this.setState({
      article: {
        title: this.titleRef.current.value,
        content: this.contentRef.current.value,
        image: this.state.article.image,
      },
    });
    this.validator.showMessages();
    this.forceUpdate();
  };

  saveArticle = (e) => {
    e.preventDefault();
    this.changeState();
    if (this.validator.allValid()) {
      axios
        .put(this.url + "article/" + this.articleId, this.state.article)
        .then((res) => {
          if (res.data.article) {
            this.setState({
              article: res.data.article,
              status: "waiting",
            });

            swal(
              "Artículo editado",
              "El artículo ha sido editado exitosamente",
              "success"
            );

            if (this.state.selectedFile !== null) {
              var articleId = this.state.article._id;

              const formData = new FormData();

              formData.append(
                "file0",
                this.state.selectedFile,
                this.state.selectedFile.name
              );

              axios
                .post(this.url + "upload/image/" + articleId, formData)
                .then((res) => {
                  if (res.data.article) {
                    this.setState({
                      article: res.data.article,
                      status: res.data.status,
                    });
                  } else {
                    this.setState({
                      article: res.data.article,
                      status: "failed",
                    });
                  }
                });
            } else {
              this.setState({
                status: res.data.status,
              });
            }
          } else {
            this.setState({
              status: "failed",
            });
          }
        });
    } else {
      this.setState({
        status: "failed",
      });
      this.validator.showMessages();
      this.forceUpdate();
    }
  };

  fileChange = (event) => {
    this.setState({
      selectedFile: event.target.files[0],
    });
  };

  render() {
    if (this.state.status === "success") {
      return <Redirect to="/blog" />;
    }
    var article = this.state.article;
    return (
      <div className="center">
        <section id="content">
          <h1 className="subheader">Editar artículo</h1>
          {this.state.article.title && (
            <form className="mid-form" onSubmit={this.saveArticle}>
              <div className="form-group">
                <label htmlFor="title">Título</label>
                <input
                  type="text"
                  name="title"
                  ref={this.titleRef}
                  onChange={this.changeState}
                  defaultValue={article.title}
                />
                {this.validator.message(
                  "title",
                  article.title,
                  "required|alpha_num_space"
                )}
              </div>
              <div className="form-group">
                <label htmlFor="content">Contenido</label>
                <textarea
                  name="content"
                  ref={this.contentRef}
                  onChange={this.changeState}
                  defaultValue={article.content}
                />
                {this.validator.message("content", article.content, "required")}
              </div>
              <div className="form-group">
                <label htmlFor="file0">Imagen</label>
                <div className="image-wrap">
                  {article.image !== null ? (
                    <img
                      src={this.url + "get-image/" + article.image}
                      alt={article.title}
                      className="thumb"
                    />
                  ) : (
                    <img src={ImgDef} alt="Paisaje" className="thumb" />
                  )}
                </div>
                <input type="file" name="file0" onChange={this.fileChange} />
              </div>
              <input type="submit" value="Enviar" className="btn btn-success" />
            </form>
          )}
          {!this.state.article.title && (
            <h2 className="subheader">Cargando...</h2>
          )}
        </section>
        <Sidebar />
      </div>
    );
  }
}

export default EditArticle;
