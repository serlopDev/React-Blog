import React, { Component } from 'react';
import Jumbotron from '../Jumbotron/Jumbotron';
import SideBar from '../SideBar/SideBar';

export default class Home extends Component{

    render(){
        return(
            <div>
            <Jumbotron title='Bienvenido a mi Blog' size='jumbotron'/>
            <div className='center'>
            <section id="articles" class="articles">
                <h1 className='subheader'>Últimos Artículos</h1>
            </section>
            
            <SideBar/>
            </div>
            </div>
        )
    }
}