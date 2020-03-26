import {ActionTypes, DataTypes} from "./Types";
import {RestDataSource} from "./RestDataSource";
import {SetDataSortPropertyAction, SetDataPageSizeAction} from "./Types";

const newDataSource = new RestDataSource();

export const loadData = (dataType:string, params:any) => ({
    type: ActionTypes.DATA_LOAD,
    payload: newDataSource.GetData(dataType, params).then(response => ({
        dataType,
        data: response.data,
        total: Number(response.headers['x-total-count']),
        params
    }))
});

export const setPageSize = (newSize:number): SetDataPageSizeAction => ({
    type: ActionTypes.DATA_SET_PAGE_SIZE,
    payload: newSize
});

export const setSortProperty = (newProp:string): SetDataSortPropertyAction => ({
    type: ActionTypes.DATA_SET_SORT_PROPERTY,
    payload: newProp
});

export const placeOrder = (order:any) => ({
    type: ActionTypes.DATA_STORE,
    payload: newDataSource.StoreData(DataTypes.ORDERS, order).then(response => ({
        dataType: DataTypes.ORDERS, data: response.data
    }))
});