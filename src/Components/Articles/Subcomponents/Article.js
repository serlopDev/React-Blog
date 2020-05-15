import React, { Component } from 'react';
import SideBar from '../../SideBar/SideBar';
import axios from 'axios';
import Global from '../../../Global';
import Moment from 'react-moment';

import loadingImg from '../../../assets/images/loading/cargando.gif';
import defaultImage from '../../../assets/images/unnamed.png';
import swal from 'sweetalert';
import { Redirect, Link } from 'react-router-dom';


export default class Article extends Component{

    url = Global.url;
    state = {article: {}, status: null};

    componentWillMount(){
        this.getArticle();
    }

    getArticle = () => {
        var id =  this.props.match.params.id;

        axios.get(this.url + 'article/' + id)
            .then(response => {
                this.setState({
                    article: response.data.article,
                    status: 'success'
                })
            }).catch(error => {
                this.setState({
                    article: false,
                    status: 'success'
                })
            })
    };

    deleteArticle = (id) => {

        swal({
            title: "¿Estás seguro?",
            text: "Estás a punto de eliminar el artículo de forma definitiva",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {

                axios.delete(this.url + 'article/' + id)
                    .then(response => {
                        this.setState({
                            article: response.data.article,
                            status: 'deleted'
                        })
                     });
            
              swal("Artículo eliminado", {
                icon: "success",
              });
            } else {
              swal("Tranquilo, el artículo no ha sido eliminado");
            }
          });
    }

    

    render(){

        
        if(this.state.status === 'deleted'){
            return <Redirect to = '/blog'/>
        }
        

        var article = this.state.article;

        return(
        
        <div className="content">
            {this.state.article &&
            
            <section id="articles" className="articles">
                <article className="articleSingle">
                <div className="image-wrap-single">
                    <div className="imageArt">
                    {
                    article.image !== null ? (
                        <img class="imgArt" src={this.url + 'get-image/' + article.image} alt="foto-artículo"/>
                        ) : (
                        <img class="imgArt" src={defaultImage} alt="foto-artículo"/>
                        )
                    }
                    </div>
                </div>
                    <h2 className="subHeader">{article.title}</h2>
                    <Moment fromNow className="dateArt">{article.date}</Moment>
                    <div className="artText">
                    <p>{article.content}</p>
                    </div>
                </article>
                <div className='btn-articles-container'>
                    <Link to={'/blog/editar-articulo/' + article._id} className='btn-edit'>Editar</Link>
                    <button onClick ={() => {this.deleteArticle(article._id)}} className='btn-delete' name ='btn-create' value='eliminar'>Eliminar</button>
                </div>
            </section>
            }
            {!this.state.article && this.state.article.status === 'success' &&
            <div className='articles'>
                <h2 className="subHeader">No hay artículos para mostrar</h2>
                <p>Intentalo de nuevo más tarde</p>
            </div>
            }
            {this.state.article.status === null &&
            <div className='articles'>
                <h2 className="subHeader">Cargando</h2>
                <img className='loading-img' src={loadingImg} alt='Cargando página'/>
                <p>Espere unos segundos</p>
            </div>
            }

        <SideBar/>
        </div>
        )
    }
}