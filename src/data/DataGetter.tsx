import React, {Component} from "react";
import {DataTypes} from "./Types";

export interface DataGetterProps {
    products_params: any
    pageSize: number
    sortKey: string
    loadData: (dataTypes:DataTypes, rtData:any) => void
    match: any
}

export class DataGetter extends Component<DataGetterProps> {
    render() {
        return <React.Fragment>{this.props.children}</React.Fragment>
    }

    componentDidMount = () => this.getData();
    componentDidUpdate = () => this.getData();

    getData = () => {
        const {
            products_params = {},
            pageSize = 5,
            sortKey = 'name',
            loadData
        } = this.props;
        const {category = ""} = this.props.match.params;
        const dsData = products_params;
        const rtData:any = {
            _limit: pageSize,
            _sort: sortKey,
            _page: this.props.match.params.page || 1,
            category_like: category.toLowerCase() === "all" ? "" : category
        }
        if (Object.keys(rtData).find(key => dsData[key] !== rtData[key])) {
            loadData(DataTypes.PRODUCTS, rtData)
        }
    }
}