import {createStore} from 'redux';
import {ShopReducer} from "./ShopReducers";
import {CartReducer} from "./CartReducers";
import {CommonReducer} from "./CommonReducer";

export const SportsStoreDataStore = createStore(CommonReducer(ShopReducer, CartReducer));