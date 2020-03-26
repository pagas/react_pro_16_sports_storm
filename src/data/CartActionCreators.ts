import {ActionTypes, CartActionTypes, Product} from "./Types";

export const addToCart = (product : Product, quantity:number) : CartActionTypes  => ({
    type: ActionTypes.CART_ADD,
    payload: {
        product,
        quantity: quantity || 1
    }
});

export const updateCartQuantity = (product: Product, quantity: number) : CartActionTypes => ({
    type: ActionTypes.CART_UPDATE,
    payload: {product, quantity}
});

export const removeFromCart = (product:Product) : CartActionTypes => ({
    type: ActionTypes.CART_REMOVE,
    payload: product
});

export const clearCart = () : CartActionTypes => ({
    type: ActionTypes.CART_CLEAR
});
