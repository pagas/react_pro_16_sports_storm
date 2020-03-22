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
        case ActionTypes.DATA_SET_PAGE_SIZE:
            return {...storeDate, pageSize: action.payload};
        case ActionTypes.DATA_SET_SORT_PROPERTY:
            return {...storeDate, sortKey: action.payload};
        default :
            return storeDate || {};
    }
}