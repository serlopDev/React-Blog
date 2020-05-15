import React, { Component } from "react";
import Jumbotron from '../Jumbotron/Jumbotron';
import SideBar from '../SideBar/SideBar';
import Articles from "../Articles/Articles";

export default class Search extends Component {

  
  render() {

    var searched = this.props.match.params.search;

    return (
      <div>
        <Jumbotron title = {'Búsqueda: ' + searched} size='jumbotron-small'/>
        <div className="center">

          <section id="articles" class="articles">
            <Articles search={searched}/>
          </section>

          <SideBar blog = 'true'/>
        </div>
      </div>
    );
  }
}