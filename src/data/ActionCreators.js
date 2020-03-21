import {ActionTypes} from "./Types";
import {RestDataSource} from "./RestDataSource";

const newDataSource = new RestDataSource();

export const loadData = (dataType, params) => ({
    type: ActionTypes.DATA_LOAD,
    payload: newDataSource.GetData(dataType, params).then(response => ({
        dataType,
        data: response.data,
        total: Number(response.headers['x-total-count']),
        params
    }))
});