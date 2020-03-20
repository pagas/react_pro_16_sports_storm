import {ActionTypes} from "./Types";
export const CartReducer = (storeDate, action) => {
    let newStore = initCart();

    switch (action.type) {
        case ActionTypes.CART_ADD: {
            const {product, quantity} = action.payload;
            let existingProduct = newStore.cart.find(item => item.product.id === product.id);
            if (existingProduct) {
                existingProduct.quantity += quantity
            } else {
                newStore.cart = [...newStore.cart, action.payload];
            }
            newStore.cartItems += quantity;
            newStore.cartPrice += quantity * product.price;
            return newStore;
        }
        case ActionTypes.CART_UPDATE: {
            const {product, quantity} = action.payload;
            newStore.cart = newStore.cartItems.map(item => {
               if(item.product.id === product.id) {
                   const diff = quantity - item.quantity;
                   newStore.cartItems += diff;
                   newStore.cartPrice += item.product.price * diff;
                   return action.payload;
               } else {
                   return item;
               }
            });
            return newStore;
        }
        case ActionTypes.CART_REMOVE: {
            const {id} = action.payload;
            const removeCart = newStore.cart.find(item => item.product.id === id);
            newStore.cartItems -= removeCart.quantity;
            newStore.cartPrice -= removeCart.quantity * removeCart.product.price;
            newStore.cart = newStore.cart.filter(item => item.product.id === id);
            return newStore;
        }
        case ActionTypes.CART_CLEAR:
            return initCart();
        default :
            return storeDate || {};
    }

    function initCart() {
        return {...storeDate, cart:[], cartItems: 0, cartPrice: 0};
    }
}