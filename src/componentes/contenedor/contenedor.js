import React from 'react';
import Jumbotron from '../jumbotron/jumbotron'
import Cards from '../cards/cards'


function Contenedor() {
    return(
        <div class="container">
                <Jumbotron title = "Bienvenidos" text = "texto de jumbotron" button = "adios!" />
             <div class="row text-center">
                <Cards title = "tarjeta 1" text = "texto prueba 1" button = "boton 1"/>
                <Cards title = "tarjeta 2" text = "texto prueba 2" button = "boton 2"/>
                <Cards title = "tarjeta 3" text = "texto prueba 3" button = "boton 3"/>
                <Cards title = "tarjeta 4" text = "texto prueba 4" button = "boton 4"/>
             </div>
            
        </div>
        
    )
}

export default Contenedor