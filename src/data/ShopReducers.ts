import {ActionTypes, DataTypes,  SystemState} from "./Types";
import {DataAction, LoadDataAction, SetDataSortPropertyAction, SetDataPageSizeAction, DataStoreAction} from "./Types";
export const ShopReducer = (storeDate:SystemState, action: DataAction) => {
    switch (action.type) {
        case ActionTypes.DATA_LOAD:
            const {data, total, params, dataType} = (action as LoadDataAction).payload;
            return {
                ...storeDate,
                [dataType] : data,
                [`${dataType}_total`] : total,
                [`${dataType}_params`] : params
            };
        case ActionTypes.DATA_SET_PAGE_SIZE:
            return {...storeDate, pageSize: (action as SetDataPageSizeAction).payload};
        case ActionTypes.DATA_SET_SORT_PROPERTY:
            return {...storeDate, sortKey: (action as SetDataSortPropertyAction).payload};
        case ActionTypes.DATA_STORE:
            if((action as DataStoreAction).payload.dataType === DataTypes.ORDERS) {
                return {...storeDate, order: (action as DataStoreAction).payload.data}
            }
            break;
        default :
            return storeDate || {};
    }
}