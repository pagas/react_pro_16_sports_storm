import Axios, {Method} from "axios";
import {RestUrls} from "./Urls";

export class RestDataSource {
    public err_handler: () => void;

    constructor(err_handler:(() => void) = () => {}) {
        this.err_handler = err_handler;
    }

    GetData = (dataType:string, params:any) => this.SendRequest("get", RestUrls[dataType], params);
    StoreData = (dataType:string, data:any) => this.SendRequest("post", RestUrls[dataType], {}, data);
    SendRequest = (method:Method, url:string, params:any, data:any = null) => Axios.request({method, url, params, data});
}