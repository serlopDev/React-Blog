import React, { Component } from "react";
import Jumbotron from '../Jumbotron/Jumbotron';
import SideBar from '../SideBar/SideBar';

export default class Formulario extends Component {

    state = {user: {}};

    nombreRef = React.createRef();
    apellidosRef = React.createRef();
    bioRef = React.createRef();
    sexHRef = React.createRef();
    sexFRef = React.createRef();
    sexORef = React.createRef();

    

    recogerDatos = (e) => {

        e.preventDefault();

        var genero = 'hombre';

        if(this.sexHRef.current.checked){
            genero = this.sexHRef.current.value;
        } else if (this.sexFRef.current.checked){
            genero = this.sexFRef.current.value;
        } else {
            genero = this.sexORef.current.value
        };

        var user = {
            nombre: this.nombreRef.current.value,
            apellidos: this.apellidosRef.current.value,
            bio: this.bioRef.current.value,
            genero: genero
        };

        this.setState({user: user});

        console.log(user);

    };
  
    render() {

    return (
      <div>
        <Jumbotron title = 'Formulario' size='jumbotron-small'/>
        <div className="center">

          <section id="articles" class="articles">

          <div className="div-form" onSubmit = {this.recogerDatos}>

            { this.state.user.nombre &&
                <div className='your-data'>
                    <h2 className="subHeader">Tus datos</h2>
                    <hr/>
                    <div className='your-data-text'>
                    <p>Nombre: <strong>{this.state.user.nombre}</strong></p>
                    <p>Apellidos: <strong>{this.state.user.apellidos}</strong></p>
                    <p>Bio: <strong>{this.state.user.bio}</strong></p>
                    <p>Género: <strong>{this.state.user.genero}</strong></p>
                    </div>
                </div>
            }

                <form className="mid-form">
                    <h2 className="subHeader">Formulario</h2>
                    <hr/>

                <div className="form-group">
                    <label htmlFor="name">Nombre</label>
                    <input name = 'nombre' type="text" className="name" ref={this.nombreRef}/>
                </div>

                <div class="form-group">
                    <label htmlFor="apellidos">Apellidos</label>
                    <input name = 'apellidos' type="text" className="surname" ref={this.apellidosRef}/>
                </div>

                <div class="form-group">
                    <label htmlFor="bio">Biografía</label>
                    <textarea name="bio" id="bio" className="bio" ref={this.bioRef}></textarea>
                </div>
                <div class="form-group">
                    <input name = 'hombre'  type="radio" className="radio-buttons" value="hombre" ref={this.sexHRef}/>Hombre
                    <input name = 'mujer'  type="radio" className="radio-buttons" value="mujer" ref={this.sexFRef}/>Mujer
                    <input name = 'otro'  type="radio" className="radio-buttons" value="otro" ref={this.sexORef}/>Otro

                </div>

                <input type="submit" value="Enviar" className="btn-Create"/>
                </form>
                </div>
          </section>

          <SideBar/>
        </div>
      </div>
    );
  }
}