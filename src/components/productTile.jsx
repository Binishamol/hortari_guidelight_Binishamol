import React from 'react';
export default function productTile(addToCart,product,removeFromCart){
    return(
        
        <div className="col-3" key={product.id}>
            <div className="card mb-3" style={{"maxWidth": "540px"}}>
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src="1.jpg" className="card-img" alt="..."/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
    <h5 className="card-title">{product.title}</h5>
                            <h5>{product.price}</h5>
                            {
                                addToCart &&

                            <button type="button" className="btn btn-primary btn-lg" onClick={() =>{
                              addToCart(product)
                            
                            }

                            }>ADD</button>
                        }
                            {
                                removeFromCart &&

                            <button type="button" className="btn btn-primary btn-lg" onClick={() =>{
                              removeFromCart(product)
                            
                            }

                            }>REMOVE</button>
                        }
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
)
}