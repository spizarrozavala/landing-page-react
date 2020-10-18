import React from "react";
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

import Navbar from './componentes/navbar/navbar';
import Contenedor from './componentes/contenedor/contenedor'
import Footer from './componentes/footer/footer';

function Main (){
    return (
        <>
            <Navbar title = "Landing page with React" link1 = "link 1" link2 = "link 2" link3 = "link 3" link4 = "link 4"/>
            <Contenedor />
            <Footer copyright = "hola a todos" text = "4Geeks 2020"/>
        </>
    )
}






ReactDOM.render(<Main />, document.getElementById('root'))

