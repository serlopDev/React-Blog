import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

// Componentes

import Peliculas from '../Peliculas/Peliculas';
import SeccionPruebas from '../SeccionPruebas/SeccionPruebas';
import Home from '../Home/Home';
import Error from '../Error/Error';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Blog from '../Blog/Blog';
import Formulario from '../Formulario/Formulario';
import Article from '../Articles/Subcomponents/Article';
import Search from '../Search/Search';
import CreateArticle from '../Articles/Subcomponents/CreateArticle';
import EditComponent from '../Articles/Subcomponents/EditArticle';

export default class Router extends Component{

    render(){return(
        <BrowserRouter>
            <Header/>

            <Switch>
                <Route exact path = '/' component = {Home}/>
                <Route exact path = '/inicio' component = {Home}/>
                <Route exact path = '/blog' component = {Blog}/>
                <Route exact path = '/blog/articulo/:id' component = {Article}/>
                <Route exact path = '/blog/busqueda/:search' component = {Search}/>
                <Route exact path = '/blog/crear-articulo' component = {CreateArticle} />
                <Route exact path = '/blog/editar-articulo/:id' component = {EditComponent}/>
                <Route exact path = '/redirect/:search' render = {
                    (props) => {
                        var search = props.match.params.search;
                        return <Redirect to = {'/blog/busqueda/' + search}/>
                    }
                }/>
                <Route exact path = '/formulario' component = {Formulario}/>
                <Route exact path = '/peliculas' component = {Peliculas}/>
                <Route exact path = '/seccion-pruebas' component = {SeccionPruebas}/>

                <Route component = {Error}/>      
            </Switch>
   
            <Footer/>
        </BrowserRouter>
    )}
};