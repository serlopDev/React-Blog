import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Jumbotron extends Component {
  
  render() {

    var title = this.props.title;
    
    return (
      <section id="jumbotron" className={this.props.size}>
        <h1>{title}</h1>
        { title === 'Bienvenido a mi Blog' &&
          <Link to='/blog' className="blogBtn">Ir a mi BLOG</Link>
        }

      </section>
    );
  }
}
