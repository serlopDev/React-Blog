import React, { Component } from 'react';

export default class SideBar extends Component{

    render(){

        return(
        <aside id="sidebar" class="sidebar">

        { this.props.blog === 'true' &&
            <div class="menuBlog">
                <h3>Puedes hacer esto</h3>
                <a href="/blog" class="btn-Create">Crear un artículo</a>
            </div>
        }
    
            <div class="search">
                <h3>Buscador</h3>
                <p>Encuentra el articulo que buscas</p>
                <form>
                    <input type="text" id="searchBox" class="searchBox"/>
                    <input type="button" id="searchBtn" class="searchBtn" value="Buscar"/>
                </form>
            </div>
        </aside>
        );
    }
}