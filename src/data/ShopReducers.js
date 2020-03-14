import {ActionTypes} from "./Types";
export const ShopReducer = (storeDate, action) => {
    switch (action.type) {
        case ActionTypes.DATA_LOAD:
            return {
                ...storeDate,
                [action.payload.dataType] : action.payload.data
            };
        default :
            return storeDate || {};
    }
}