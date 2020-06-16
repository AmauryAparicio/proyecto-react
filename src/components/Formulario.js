import React, { Component, Fragment } from "react";
import Sidebar from "./Sidebar";

class Formulario extends Component {
  nombreRef = React.createRef();
  apellidosRef = React.createRef();
  bioRef = React.createRef();
  genHRef = React.createRef();
  genMRef = React.createRef();
  genORef = React.createRef();

  state = {
    user: {},
  };

  recibirFormulario = (e) => {
    e.preventDefault();

    var genero = null;

    if (this.genHRef.current.checked) {
      genero = this.genHRef.current.value;
    } else if (this.genMRef.current.checked) {
      genero = this.genMRef.current.value;
    } else if (this.genORef.current.checked) {
      genero = this.genORef.current.value;
    }

    var user = {
      nombre: this.nombreRef.current.value,
      apellidos: this.apellidosRef.current.value,
      bio: this.bioRef.current.value,
      genero: genero,
    };

    this.setState({
      user: user,
    });
  };

  render() {
    if (this.state.user) {
      var user = this.state.user;
    }
    return (
      <Fragment>
        <div className="center">
          <div id="content">
            <h1 className="subheader">Formulario</h1>
            <div id="user-data">
              {this.state.user.nombre && (
                <p>
                  Nombre: <strong> {user.nombre} </strong>
                </p>
              )}

              {this.state.user.apellidos && (
                <p>
                  Apellidos: <strong> {user.apellidos} </strong>
                </p>
              )}

              {this.state.user.bio && (
                <p>
                  Biografía: <strong> {user.bio} </strong>
                </p>
              )}

              {this.state.user.genero && (
                <p>
                  Gnenero: <strong> {user.genero} </strong>
                </p>
              )}
            </div>
            <form
              onSubmit={this.recibirFormulario}
              className="mid-form"
              onChange={this.recibirFormulario}
            >
              <div className="form-group">
                <label htmlFor="nombre">Nombre:</label>
                <input type="text" name="nombre" ref={this.nombreRef} />
              </div>
              <div className="form-group">
                <label htmlFor="apellidos">Apellidos:</label>
                <input type="text" name="apellidos" ref={this.apellidosRef} />
              </div>
              <div className="form-group">
                <label htmlFor="bio">Biografía:</label>
                <textarea name="bio" defaultValue={""} ref={this.bioRef} />
              </div>
              <div className="form-group radiobuttons">
                <input
                  type="radio"
                  name="genero"
                  defaultValue="hombre"
                  id="hombre"
                  ref={this.genHRef}
                />
                Hombre
                <input
                  type="radio"
                  name="genero"
                  id="mujer"
                  defaultValue="mujer"
                  ref={this.genMRef}
                />
                Mujer
                <input
                  type="radio"
                  name="genero"
                  id="otro"
                  defaultValue="otro"
                  ref={this.genORef}
                />
                Otro
              </div>
              <div className="clearfix" />
              <input
                type="submit"
                defaultValue="Enviar"
                className="btn btn-success"
              />
            </form>
          </div>
          <Sidebar />
        </div>
      </Fragment>
    );
  }
}

export default Formulario;
