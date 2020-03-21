import {ActionTypes} from "./Types";
export const ShopReducer = (storeDate, action) => {
    switch (action.type) {
        case ActionTypes.DATA_LOAD:
            const {data, total, params, dataType} = action.payload;
            return {
                ...storeDate,
                [dataType] : data,
                [`${dataType}_total`] : total,
                [`${dataType}_params`] : params
            };
        default :
            return storeDate || {};
    }
}