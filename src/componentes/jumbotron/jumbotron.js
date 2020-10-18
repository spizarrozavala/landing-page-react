import React from 'react';

function Jumbotron(props) {
    return (
        <header class="jumbotron my-4">
            <h1 class="display-3">{props.title}</h1>
            <p class="lead">{props.text}</p>
            <a href="#" class="btn btn-primary btn-lg">{props.button}</a>
        </header>
    )
}

export default Jumbotron;