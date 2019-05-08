import React from 'react';
//implements virtual dom
import ReactDOM from 'react-dom';

//conditional expression
const color = (Math.random() > 0.5) ? 'green' : 'red'

//parameter 1 = create the wanted element parameter 2 where u want elemts to be created
ReactDOM.render(
    //name element, attributes, children elements,
    //  React.createElement('h2', null, 'Hello React!'), two diffrent ways
    <h2 style={{color : color}}>Hello React with JSX!</h2>,
     document.getElementById('root')
);
