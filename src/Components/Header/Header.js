import React, { Component } from "react";
import logo from '../../assets/images/react.svg';
import { NavLink } from 'react-router-dom';

class Header extends Component {

  render() {
    return (
      <header id="header" className="header">
        <div class="center">
          <div id="logo" className="logo">
            <img
              src={logo}
              className="app-logo"
              alt="logotipo"
            />
            <span className="brand">
              <strong>Blog</strong>ReactJS
            </span>
          </div>

          <nav id="menu" className="menu">
            <ul>
              <li>
                <NavLink to = '/inicio' activeClassName='active'>Inicio</NavLink>
              </li>
              <li>
                <NavLink to = '/blog' activeClassName='active'>Blog</NavLink>
              </li>
              <li>
                <NavLink to = '/formulario' activeClassName='active'>Formulario</NavLink>
              </li>
              <li>
                <NavLink to = '/peliculas' activeClassName='active'>Películas</NavLink>
              </li>
              <li>
                <NavLink to = '/peliculas' activeClassName='active'>Pág 2</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}
export default Header;
