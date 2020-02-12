import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="row">
    <div className="col-3">
        <div className="card mb-3" style={{"maxWidth": "540px"}}>
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img src="an.png" className="card-img" alt="..."/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">Accesories</h5>
                        <a href="#" className="btn btn-primary">Add</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
   
  );
}

export default App;
