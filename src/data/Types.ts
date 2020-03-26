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

export interface AddToCartAction {
    type: typeof ActionTypes.CART_ADD,
    payload: {
        product: Product,
        quantity: number
    }
}

export interface UpdateCartQuantity {
    type: typeof ActionTypes.CART_UPDATE,
    payload: {
        product: Product
        quantity: number
    }
}

export interface RemoveFromCartAction {
    type: typeof ActionTypes.CART_REMOVE,
    payload: Product
}

export interface ClearCartAction {
    type: typeof ActionTypes.CART_CLEAR
}

export type CartActionTypes = AddToCartAction | UpdateCartQuantity | RemoveFromCartAction | ClearCartAction;

export type CartItem = {
    product: Product,
    quantity: number
}

export interface SystemState {
    products: Product[],
    products_total: number,
    products_params: any,
    categories: string[],
    cart: CartItem[],
    cartItems: number
    cartPrice: number,
    pageSize: number,
    sortKey: string,
    order: any
}


export interface LoadDataAction {
    type: typeof ActionTypes.DATA_LOAD,
    payload: {
        data: any,
        params: any,
        dataType: string,
        total: number
    }
}

export interface SetDataSortPropertyAction {
    type: typeof ActionTypes.DATA_SET_SORT_PROPERTY,
    payload: string
}

export interface SetDataPageSizeAction {
    type: typeof ActionTypes.DATA_SET_PAGE_SIZE,
    payload: number
}

export interface DataStoreAction {
    type: typeof ActionTypes.DATA_STORE,
    payload: { dataType:string, data: any }
}

export type DataAction = LoadDataAction | SetDataPageSizeAction | SetDataSortPropertyAction | DataStoreAction

