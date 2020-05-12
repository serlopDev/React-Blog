import React, { Component } from 'react';

export default class Pelicula extends Component{

    marcar = () => {
        this.props.marcarFavorita(this.props.pelicula);
        console.log(this.props.pelicula)
    };

    render(){
        
        const {title, year, image} = this.props.pelicula;

        return(
            <article className="article-item" id="article-item">
                <div className="image-wrap">
                    <img className="imgArt" src={image} alt="foto-artículo"/>
                </div>
            <div className="articleText">
                    <h2>{title}</h2>
                    <div className='year-container'>
                        {year}
                    </div>
                    <span className="dateArt">Hace 5 minutos</span>
                    <a href="/article.html">Leer más</a>
            </div>
            <span className='icon-favorito-vacio' onClick={this.marcar}/>
            </article>
        )};
};