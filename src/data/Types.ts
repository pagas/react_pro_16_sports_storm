import * as faker from "faker";

export const DataTypes = {
    PRODUCTS: "products",
    CATEGORIES: "categories",
    ORDERS: "orders"
};

export const ActionTypes = {
    DATA_LOAD: "data_load",
    DATA_SET_SORT_PROPERTY: "data_set_sort",
    DATA_SET_PAGE_SIZE: "data_set_pagesize",
    DATA_STORE: "data_store",

    CART_ADD: "cart_add",
    CART_UPDATE: "cart_update",
    CART_REMOVE: "cart_remove",
    CART_CLEAR: "cart_clear"
};

export type Product = {
    id: number,
    name: string
    category: string
    description: string
    price: number
}

interface AddToCartAction {
    type: typeof ActionTypes.CART_ADD,
    payload: {
        product: Product,
        quantity: number
    }
}

interface UpdateCartQuantity {
    type: typeof ActionTypes.CART_UPDATE,
    payload: {
        product: Product
        quantity: number
    }
}

interface RemoveFromCartAction {
    type: typeof ActionTypes.CART_REMOVE,
    payload: Product
}


interface ClearCartAction {
    type: typeof ActionTypes.CART_CLEAR,
}

export type CartActionTypes = AddToCartAction | UpdateCartQuantity | RemoveFromCartAction | ClearCartAction;

