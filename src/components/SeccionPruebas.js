import React, {Component} from 'react';

class SeccionPruebas extends Component{
  render(){
    return(
      <section id="content">
        <h2 className="subheader">Últimos artículos</h2>
        {/* ----------------------------------------------------------------------- */}
        {/*                          Listado de artículos                           */}
        {/* ----------------------------------------------------------------------- */}
        <div id="articles">
          <article className="article-item" id="article-template">
            <div className="image-wrap">
              <img src="https://mott.pe/noticias/wp-content/uploads/2019/03/los-50-paisajes-maravillosos-del-mundo-para-tomar-fotos.jpg" alt="Paisaje" />
            </div>
            <h2>Articulo de prueba</h2>
            <span className="date">
              Hace 5 minutos
            </span>
            <a href="article.html">Leer más</a>
            <div className="clearfix" />
          </article>
        </div>
      </section>
    );
  }
}
export default SeccionPruebas;