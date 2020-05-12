import React, { Component } from "react";

export default class Jumbotron extends Component {
  
  render() {

    var title = this.props.title;
    
    return (
      <section id="jumbotron" className={this.props.size}>
        <h1>{title}</h1>
        { title === 'Bienvenido a mi Blog' &&
            <a className="blogBtn" href="/blog">
              Ir a mi BLOG
            </a>
        }

      </section>
    );
  }
}
