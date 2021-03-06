import React, { Component } from "react";
import Jumbotron from '../Jumbotron/Jumbotron';
import SideBar from '../SideBar/SideBar';
import Articles from "../Articles/Articles";

export default class Blog extends Component {
  
  render() {

    

    return (
      <div>
        <Jumbotron title = 'Blog' size='jumbotron-small'/>
        <div className="center">

          <section id="articles" class="articles">
            <Articles/>
          </section>

          <SideBar blog = 'true'/>
        </div>
      </div>
    );
  }
}
