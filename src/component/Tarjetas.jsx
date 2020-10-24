import React from 'react'

class Tarjeta extends React.Component{
    render(){
        return(
            <div>
                <div class="card">
                        <img class="card-img-top" src={this.state.personaje1.image} alt="Card image cap"/>
                        <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                </div>
            </div>
         
        )
    }
}

export default Tarjeta;