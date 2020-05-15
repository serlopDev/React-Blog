import React, { Component } from 'react';
import Global from '../../../Global';
import axios from 'axios';
import SideBar from '../../SideBar/SideBar';
import { Redirect } from 'react-router-dom';
import SimpleReactValidator from 'simple-react-validator';
import swal from 'sweetalert';

export default class CreateArticle extends Component {

    titleRef = React.createRef();
    contentRef = React.createRef();
    url = Global.url;


    state = {
        article: {},
        selectedFile: null,
        status: null
    }

    componentWillMount() {
        this.validator = new SimpleReactValidator(
        {
            messages: {
                required: 'El campo es obligatorio',
                alpha_num_space: 'El título sólo puede contener letras y números'
            }
        });
    }

    changeState = () => {
        this.setState({
            article: {
                title: this.titleRef.current.value,
                content: this.contentRef.current.value
            }
        })
    };

    
    createArticle = (e) => {
        e.preventDefault();

        this.changeState();
        if(this.validator.allValid()){
                 axios.post(this.url + 'save', this.state.article)
            .then(response => { 
                this.setState({
                    article: response.data.article,
                    status: 'waiting'    
                });

                swal(
                    'Artículo creado',
                    'Artículo creado correctamente',
                    'success'
                )

                if(this.state.selectedFile !== null){
                    var articleId = this.state.article._id;

                    console.log(articleId)

                    const formData = new FormData();

                    formData.append(
                        'file0',
                        this.state.selectedFile,
                        this.state.selectedFile.name
                    );
                    axios.post(this.url + 'upload-image/' + articleId, formData)
                        .then(response => {
                            this.setState({
                                article: response.data.article,
                                status: 'success'
                            })
                        }).catch(error => {
                            this.setState({
                                status: 'failed'
                            })
                        })
                } else {
                    this.setState({
                        status: 'success'
                    })
                }
            }).catch(error => {
                this.setState({
                    article: {},
                    status: 'failed'
                });

                swal(
                    'Error',
                    'No se ha podido crear el artículo',
                    'error'
                )

            })
            
    } else {
        this.validator.showMessages();
        this.forceUpdate();
    }
        };
   

    uploadImage = (event) => {
        this.setState({
            selectedFile: event.target.files[0]
        })
    };



    render() {

       if(this.state.status === 'success'){
           return <Redirect to='/blog'/>
       } 
        return(
            <div className="content">

                <section class="section-CA">

                    <h1 className='subheader-CA'>Crear Artículo</h1>

                    <form className='form-create-article' onSubmit={this.createArticle}>

                        <div className='form-group-CA'>
                            <label htmlFor='title'>Título</label>
                            <input name='title' type='text' ref={this.titleRef} onChange={this.changeState}/>

                            {this.validator.message('title', this.state.article.title, 'required |alpha_num_space')}
                        </div>

                        <div className='form-group-CA'>
                            <label htmlFor='content'>Contenido</label>
                            <textarea  name='content' type='textarea' ref={this.contentRef} onChange={this.changeState}/>

                            {this.validator.message('content', this.state.article.content, 'required')}
                        </div>

                        <div className='form-group-CA'>
                            <label htmlFor='file0'>Imagen</label>
                            <input name='file0' className='file-AC' type='file' onChange={this.uploadImage}/>
                        </div>

                        <input type='submit' className='btn-Create-AC' value='Crear artículo'/>
                    </form>

                </section>
                <SideBar/>
            </div>        
        
        )}
}