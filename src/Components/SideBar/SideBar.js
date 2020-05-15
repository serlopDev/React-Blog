import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';

export default class SideBar extends Component{

    searchRef = React.createRef();

    state = {search: '', redirect: false}

    redirectToSearch = (event) => {
        event.preventDefault();

        this.setState({
            search: this.searchRef.current.value,
            redirect: true
        });
        console.log(this.state.search)
    }

    render(){

        if(this.state.redirect){
            return <Redirect to = {'/redirect/' + this.state.search} />
        }

        return(
        <aside id="sidebar" class="sidebar">

        { this.props.blog === 'true' &&
            <div class="menuBlog">
                <h3>Puedes hacer esto</h3>
                <Link to = '/blog/crear-articulo'>
                <button class="btn-Create">Crear un artículo</button>
                </Link>
            </div>
        }
    
            <div class="search">
                <h3>Buscador</h3>
                <p>Encuentra el articulo que buscas</p>
                <form onSubmit={this.redirectToSearch}>
                    <input type="text" id="searchBox" class="searchBox" ref={this.searchRef}/>
                    <input type="submit" id="searchBtn" class="searchBtn" value="Buscar"/>
                </form>
            </div>
        </aside>
        );
    }
}