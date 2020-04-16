import {SystemState, AllActions, ReducerFunc, DataActionTypes} from "./Types";

export const CommonReducer = (...reducers:any[]) => (storeData: any, action: DataActionTypes) => {
    for (let i = 0; i < reducers.length; i++) {
        let newStore = reducers[i](storeData, action);
        if (newStore !== storeData) {
            return newStore;
        }
    }
    return storeData;
}