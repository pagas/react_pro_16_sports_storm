import {ActionTypes} from "./Types";
import {RestDataSource} from "./RestDataSource";

const newDataSource = new RestDataSource();
export const loadData = (dataType) => ({
    type: ActionTypes.DATA_LOAD,
    payload: newDataSource.GetData(dataType).then(response => ({dataType, data: response.data}))
});