import React from 'react';

const ProductList = (props) => {
    const {products, addToCart} = props;
    if (products == null || products.length === 0) {
        return <h5 className="p-2">No Products</h5>
    }
    return products.map(product =>
        <div className="card m-1 p-1 bg-light" key={product.id}>
            <h4>
                {product.name}
                <span className="badge badge-pill badge-primary float-right">
                        ${product.price.toFixed(2)}
                    </span>
            </h4>
            <div className="card-text bg-white p-1">
                {product.description}
                <button className="btn btn-success btn-sm float-right" onClick={ () => addToCart(product)}>
                    Add To Cart
                </button>
            </div>
        </div>
    );

};
export {ProductList};