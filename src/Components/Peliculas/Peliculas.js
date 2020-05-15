import React, { Component } from 'react';
import Pelicula from './Subcomponents/Pelicula';
import Jumbotron from '../Jumbotron/Jumbotron';
import SideBar from '../SideBar/SideBar';

// Imagenes

import TWCover from '../../assets/images/the-warriors-película.jpg';
import SWCover from '../../assets/images/star-wars-el-ascenso-de-skywalker-poster-1572913527.jpeg';
import TPCover from '../../assets/images/Election_La_noche_de_las_bestias-520265366-large.jpg'

export default class Peliculas extends Component{

    state = {
        peliculas: [
        {
            title:'The Warriors',
            year: 1979,
            image: TWCover
        },
        {
            title:'Star Wars - El ascenso de Skywalker',
            year: 2019,
            image: SWCover
        },
        {
            title:'La purga - Election',
            year: 2016,
            image: TPCover
        }
    ],
    favorita: {}
};

    favorita = (pelicula) => {
        this.setState({favorita: pelicula});
    }

    render(){
        
        return(
        <div>
            <Jumbotron title = 'Películas' size = 'jumbotron-small'/>
        
        <div className='center'>
        
        <section id="articles" class="articles">
            
            {
            this.state.favorita.image &&
            <div className='favorite-film'>
                <h2 className='film-title'>Película Favorita</h2>
                <div className="image-wrap">
                    <img className="imgArt" src={this.state.favorita.image} alt="foto-artículo"/>
                </div>    
            </div>
            }
        
 

            <h2 className='film-title'>Listado de Películas</h2>

            {this.state.peliculas.map((pelicula, i) => {
                return(
                    <Pelicula key={i} pelicula={pelicula} marcarFavorita = {this.favorita}/>
                )
            })}

        </section>
        <SideBar/>
        </div>
        </div>
    )};
};