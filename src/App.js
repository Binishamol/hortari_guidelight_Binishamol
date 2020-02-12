import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    
    <div className="container">
        <nav className="navbar navbar-light" style={{"backgroundColor": "#e3f2fd"}}>
            <img src="p1.png" height="100" width="100"/><h1 style={{"color":"palevioletred"}}>AMIGOS CART</h1>
            <button className="btn btn-primary">Home</button>
          </nav>
      <div className="row">
        <div className="col-3">
            <div className="card mb-3" style={{"maxWidth": "540px"}}>
                <div className="row no-gutters">
                  <div className="col-md-4">
                    <img src="1.jpg" className="card-img" alt="img"/>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">BOOKS</h5>
                      <a href="#" className="btn btn-success">ADD</a>
                    </div>
                  </div>
                </div>
              </div>
        </div>
        </div>
      </div>
  
   );
}

export default App;
