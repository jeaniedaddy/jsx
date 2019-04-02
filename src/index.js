// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom'; 

// Create a react component
const name = "Steve No";
//const App = ()=> <h2>{name} Hellow world!</h2>;
const App = () => {
    const aa = 'click me';        
    return (
    
    <div>
        <label className="label" htmlFor="name">Enter name: </label>
        <input id="name" />
        <button style={{backgroundColor: 'blue', color: 'white'}}>{aa}</button>
    </div>
    );
};


// Take the react compnent and show it on the screen.  
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);