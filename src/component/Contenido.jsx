import React from 'react'
import '../styles/Contenido.css'

class Contenido extends React.Component{
    constructor(){
        super();
        this.state = {
            personaje1:{},
            personaje2:{},
            personaje3:{},
            personaje4:{},
        }
    }
    Api = async () => {
        const data = await  fetch(`https://rickandmortyapi.com/api/character/${this.state.id}`)
        var obj = await data.json()
        this.setState({
            api: obj
        })     
        console.log(obj)
    }
    Mostrar = async () => {
        await this.Api()
        this.setState({
            image: this.state.api.image,
            name: this.state.api.name
        })
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    personajeAleatorio = async () => {
        var num1 = Math.round(Math.random()* 670)
        var num2 = Math.round(Math.random()* 670)
        var num3 = Math.round(Math.random()* 670)
        var num4 = Math.round(Math.random()* 670)

        this.setState({
            personaje1:{
                num: num1,
                name: '',
                image: ''
            },
            personaje2:{
                num: num2,
                name: '',
                image: ''
            },   
            personaje3:{
                num: num3,
                name: '',
                image: ''
            },
            personaje4:{
                num: num4,
                name: '',
                image: ''
            } 
                    
        })
    }
    Personajes = async () => {
        await this.personajeAleatorio();
        var datos = await fetch(`https://rickandmortyapi.com/api/character/${this.state.personaje1.num}`)
        var dat = await datos.json();
        var name1 = dat.name;
        var image1 = dat.image;
        this.setState({
            personaje1: {
                name:name1,
                image: image1
            }
        })  
        var datos2 = await fetch(`https://rickandmortyapi.com/api/character/${this.state.personaje2.num}`)
        var dat2 = await datos2.json();
        var name2 = dat2.name;
        var image2 = dat2.image;
        this.setState({
            personaje2: {
                name:name2,
                image: image2
            }
        }) 
        var datos3 = await fetch(`https://rickandmortyapi.com/api/character/${this.state.personaje3.num}`)
        var dat3 = await datos3.json();
        var name3 = dat3.name;
        var image3 = dat3.image;
        this.setState({
            personaje3: {
                name:name3,
                image: image3
            }
        })
        var datos4 = await fetch(`https://rickandmortyapi.com/api/character/${this.state.personaje4.num}`)
        var dat4 = await datos4.json();
        var name4 = dat4.name;
        var image4 = dat4.image;
        this.setState({
            personaje4: {
                name:name4,
                image: image4
            }
        })
    }
    
    componentDidMount = () => {
        this.Personajes()
    }

    render(){
        return(
            <div className = "contendor">
                    <div className = "slider">
                        <div className = "form">
                            <h2>Digite Id del personaje</h2>
                                <div>
                                    <form>
                                        <input type="text" name = "id" onChange = {this.handleChange}/>
                                        <br/>
                                        <input className = "btn btn-primary boton" type="button"  value="Buscar"        onClick ={this.Mostrar}/>
                                    </form>
                                </div>
                                <div>
                                    <h2>{this.state.name}</h2>
                                    <img src={this.state.image} alt=""/>
                                </div>
                        </div>
                    </div> 
                    <h1>AGUNOS PERSONAJES</h1>
                    <div class="row">                                            
                        <div class="col-sm-3  " >
                                <h3>{this.state.personaje1.name}</h3>
                                <img src={this.state.personaje1.image} alt=""/>
                        </div>
                        <div class="col-sm-3 ">
                                <h3>{this.state.personaje2.name}</h3>
                                <img src={this.state.personaje2.image} alt=""/>
                        </div>
                        <div class="col-sm-3 ">
                                <h3>{this.state.personaje3.name}</h3>
                                 <img src={this.state.personaje3.image} alt=""/>
                        </div>
                        <div class="col-sm-3 ">
                                <h3>{this.state.personaje4.name}</h3>
                                <img src={this.state.personaje4.image} alt=""/>
                        </div>
                    </div>
            </div>
        )
    }
}

export default Contenido;