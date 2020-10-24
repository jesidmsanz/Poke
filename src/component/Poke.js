import React from 'react'
import '../styles/Poke.css'

class Pokedex extends React.Component{
    constructor(){
        super();
        this.state = {
            form:{}           
        }
    }
       
    Api = async () =>{
        let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.state.name}`)
        let data = await res.json() 
            console.log(data)     
            this.setState({
                form: data            
            })             
    }

    handlechange = e =>{
        this.setState(
            {
                [e.target.name]: e.target.value
            }
        )
    }

    handleSubmit = async (e) =>{
        e.preventDefault()
        await this.Api(); 
            var datos = this.state.form;            
                this.setState({
                    imagen:  datos.sprites.front_default                    
                })               
    }
    
    render(){ 
        return(
            
            <div className="card text-center i_Fondo">
                <div className="card-header">
                </div>
                <div className="card-body">
                   <h1>Busca Tu Pokemon</h1>
                   <form onSubmit = {this.handleSubmit}>
                       <h5>Nombre Del Pokemon</h5>
                       <br/>                     
                       <input type="text" name = "name" onChange = {this.handlechange}/>
                       <br/><br/>
                       
                       <img src={this.state.imagen} alt=""/>
                       <br/><br/>
                       <button type ="submit" className = "btn btn-primary">Buscar Pokemon</button>  
                                          
                   </form>
                </div>
            </div>
        )
    }
}
export default Pokedex;










