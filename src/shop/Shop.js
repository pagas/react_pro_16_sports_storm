import React from 'react';
import {ProductList} from './ProductList';
import {CategoryNavigation} from './CategoryNavigation';
import {CartSummary} from "./CartSummary";
import {ProductPageConnector} from "./ProductPageConnector";
import {PaginationControls} from "./PaginationControls";

const ProductPages = ProductPageConnector(PaginationControls);
const Shop = (props) => {
    const {categories = [], products, addToCart} = props;

    const handleAddToCart = (...args) => {
        addToCart(...args);
        props.history.push("/shop/cart");
    }

    return <div className="container-fluid">
        <div className="row">
            <div className="col bg-dark text-white">
                <div className="navbar-brand">
                    SPORTS STORE
                </div>
                <CartSummary {...props}/>
            </div>
        </div>
        <div className="row">
            <div className="col-3 p-2">
                <CategoryNavigation baseUrl="/shop/products" categories={categories}/>
            </div>
            <div className="col-9 p-2">
                <ProductPages/>
                <ProductList products={products} addToCart={handleAddToCart}/>
            </div>
        </div>
    </div>
};
export {Shop};