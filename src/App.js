import React from 'react';
import logo from './logo.svg';
import './App.css';
<<<<<<< HEAD
import { render } from '@testing-library/react';
class App extends React.Component {
    constructor(props){
        super(props);
        this.state={
            firstState: 'hello world',
            cartCount: 0
        }
    }
        


    componentDidMount(){
        this.setState({
            firstState: 'Welcome to our shop'
        })
    }
    componentDidUpdate(PrevProps,preState){
      if(this.state.cartCount>=10)
       alert('10/more items added')
    }
    
    addCount(){
      const newCount=this.state.cartCount+1;
      this.setState({
        cartCount: newCount
        
      })
      
    }

 render() {
    return (
   
        <div className="container">
          <nav className="navbar navbar-light" style={{"backgroundColor": "olive"}}>
    
    <img src="download.jpg." width="70" height="150" className="d-inline-block align-top" alt=""/>
    {this.state.firstState}
    
    <p align="right">
    <button type="button" className="btn btn-warning">Cart{this.state.cartCount}</button>
    </p>
    </nav>
            <div className="row">
                <div className="col-3">
                    <div className="card mb-3" style={{"maxWidth": "540px"}}>
                        <div className="row no-gutters">
                            <div className="col-md-4">
                                <img src="1.jpg" className="card-img" alt="..."/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">BOOKS</h5>
                                    <button type="button" className="btn btn-primary btn-lg" onClick={() =>{
                                      this.addCount()
                                      
                                    }

                                    }>ADD</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            <p align="right">
              <button type="button" className="btn btn-primary btn-lg" onClick={() =>{
                                      alert('ARe u sure')
                                    }

                                    }>Checkout</button></p>
    
    </div>
    </div>
    
    
      );

}




}


=======

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

>>>>>>> fbb2f84d091e48324c64df14ac8504636b1ce9f3
export default App;
