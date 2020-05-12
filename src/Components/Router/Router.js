import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Componentes

import Peliculas from '../Peliculas/Peliculas';
import SeccionPruebas from '../SeccionPruebas/SeccionPruebas';
import Home from '../Home/Home';
import Error from '../Error/Error';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Blog from '../Blog/Blog';

export default class Router extends Component{

    render(){return(
        <BrowserRouter>
            <Header/>

            <Switch>
                <Route exact path = '/' component = {Home}/>
                <Route exact path = '/inicio' component = {Home}/>
                <Route exact path = '/blog' component = {Blog}/>
                <Route exact path = '/peliculas' component = {Peliculas}/>
                <Route exact path = '/seccion-pruebas' component = {SeccionPruebas}/>

                <Route component = {Error}/>      
            </Switch>
   
            <Footer/>
        </BrowserRouter>
    )}
};