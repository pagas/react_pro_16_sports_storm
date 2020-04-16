import {createStore, applyMiddleware, combineReducers} from 'redux';
import {ShopReducer} from "./ShopReducers";
import {CartReducer} from "./CartReducers";
import {CommonReducer} from "./CommonReducer";
import {asyncActions} from "./AsyncMiddleware";

export const SportsStoreDataStore = createStore(CommonReducer(ShopReducer, CartReducer), applyMiddleware(asyncActions));