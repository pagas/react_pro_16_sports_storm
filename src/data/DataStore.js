import {createStore} from 'redux';
import {ShopReducer} from "./ShopReducers";

export const SportsStoreDataStore = createStore(ShopReducer);