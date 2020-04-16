import {ActionTypes, SystemState, Product, CartItem} from "./Types";
import {CartActionTypes, AddToCartAction, UpdateCartQuantity, RemoveFromCartAction} from "./Types";

export const CartReducer = (storeDate: SystemState, action: CartActionTypes) : SystemState => {
    let newStore:SystemState = {cart:[], cartItems: 0, cartPrice: 0, ...storeDate};

    switch (action.type) {
        case ActionTypes.CART_ADD: {
            const {product, quantity} : CartItem = (action as AddToCartAction).payload;

            let existingProduct = newStore.cart.find((item:CartItem) => item.product.id === product.id);
            if (existingProduct) {
                existingProduct.quantity += quantity
            } else {
                newStore.cart = [...newStore.cart, (action as AddToCartAction).payload];
            }
            newStore.cartItems += quantity;
            newStore.cartPrice += quantity * product.price;
            return newStore;
        }
        case ActionTypes.CART_UPDATE: {
            const {product, quantity}: {product: Product, quantity: number} = (action as UpdateCartQuantity).payload;
            newStore.cart = newStore.cart.map((item: CartItem) => {
               if(item.product.id === product.id) {
                   const diff = quantity - item.quantity;
                   newStore.cartItems += diff;
                   newStore.cartPrice += item.product.price * diff;
                   return (action as UpdateCartQuantity).payload;
               } else {
                   return item;
               }
            });
            return newStore;
        }
        case ActionTypes.CART_REMOVE: {
            const {id} = (action as RemoveFromCartAction).payload;
            const removeCart:CartItem|undefined = newStore.cart.find((item:CartItem) => item.product.id === id);
            if (removeCart) {
                newStore.cartItems -= removeCart.quantity;
                newStore.cartPrice -= removeCart.quantity * removeCart.product.price;
                newStore.cart = newStore.cart.filter(item => item.product.id !== id);
            }
            return newStore;
        }
        case ActionTypes.CART_CLEAR:
            return {...storeDate, cart:[], cartItems: 0, cartPrice: 0};
        default :
            return storeDate || {};
    }
}