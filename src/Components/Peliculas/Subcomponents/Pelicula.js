import React, { Component } from 'react';

export default class Pelicula extends Component{

    state = { clase: 'icon-favorito-vacio' }

    marcar = () => {
        this.props.marcarFavorita(this.props.pelicula);
        if (this.state.clase === 'icon-favorito-vacio'){
            this.setState({clase: 'icon-favorito-marcado'});
        } else {
            this.setState({clase: 'icon-favorito-vacio'});
        }
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
            <span className= {this.state.clase} onClick={this.marcar}/>
            </article>
        )};
};