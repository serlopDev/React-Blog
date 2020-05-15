import React, { Component } from 'react';
import axios from 'axios';
import Global from '../../Global';
import Moment from 'react-moment';
import 'moment/locale/es';
import { Link } from 'react-router-dom';

import loadingImg from '../../assets/images/loading/cargando.gif';
import defaultImage from '../../assets/images/unnamed.png';


export default class Articles extends Component {
    
    state = { articles: [], status: null};
    url = Global.url;
    

    componentWillMount(){
        
        var home = this.props.home;
        var searched = this.props.search;

        if(home === 'true'){
            this.getLastArticles();
        } else if(searched && searched !== null && searched !== 'undefined'){
            this.getArticlesBySearch(searched);
        } else{
        this.getArticles();
        }
    };


    getLastArticles = () => {
        axios.get(this.url + 'articles/last')
            .then(res => {
                this.setState({
                    articles: res.data.articles,
                    status: 'success'
                })
            }).catch(error => {
                this.setState({
                    articles: [],
                    status: 'success'
                })
            });
    };
    
    getArticlesBySearch(searched){
        axios.get(this.url + 'search/' + searched)
            .then(res => {
                this.setState({
                    articles: res.data.articles,
                    status: 'success'
                })
                })
                .catch(error => {
                    this.setState({
                        articles: false,
                        status: 'success'
                    })
            })
    };

    getArticles = () => {
        axios.get(this.url + 'articles')
            .then(res => {
                this.setState({
                    articles: res.data.articles,
                    status: 'success'
                });
            }).catch(error => {
                this.setState({
                    articles: false,
                    status: 'success'
                })
            });
    };

    render(){

        if(this.state.articles.length >= 1){
            var listadoArticulos = this.state.articles.map((article) => {
                return(
                <article className="article-item" id="article-item" key={article._id}>
                    <div className="image-wrap">
                        {
                            article.image !== null ? (
                                <img class="imgArt" src={this.url + 'get-image/' + article.image} alt="foto-artículo"/>
                            ) : (
                                <img class="imgArt" src={defaultImage} alt="foto-artículo"/>
                            )
                        }
                    </div>
                    <div className="articleText">
                        <h2>{article.title}</h2>
                        <Moment fromNow className="dateArt">{article.date}</Moment>
                        <Link to={'/blog/articulo/' + article._id}>Leer más</Link>
                    </div>
                </article>
                )
            })

            return(
                <div className='articles'>
                    {listadoArticulos}
                </div>
                
            )
        } else if(!this.state.articles && this.state.articles.status === 'success'){
            return(
                <h1>No hay artículos que mostar</h1>
            )
        } else {
            return(
            <div>
                <p className='loading-text'>Cargando...</p>
                <img className='loading-img' src={loadingImg} alt='Cargando página'/>
            </div>
            )
        }

    }
}