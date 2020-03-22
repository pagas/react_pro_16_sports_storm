import React from "react";
import {PaginationButtons} from "./PaginationButtons";

const PaginationControls = (props) => {
    const {
        pageSize,
        pageSizes = [5, 10, 25, 100],
        sortKey,
        sortKeys = ['Name', 'Price'],
        currentPage,
        pageCount,
        navigateToPage
    } = props;

    const handlePageSizeChange = (ev) => {
        props.setPageSize(ev.target.value);
    };

    const handelSortPropertyChange = (ev) => {
        props.setSortProperty(ev.target.value);
    };

    return <div className="m-2">
        <div className="text-center m-1">
            <PaginationButtons currentPage={currentPage} pageCount={pageCount} navigate={navigateToPage}/>
        </div>
        <div className="form-inline justify-content-center">
            <select className="form-control" onChange={handlePageSizeChange} value={pageSize || pageSizes[0]}>
                {pageSizes.map(pageSize => <option value={pageSize} key={pageSize}>{pageSize} per page</option>)}
            </select>
            <select className="form-control" onChange={handelSortPropertyChange} value={sortKey || sortKeys[0]}>
                {sortKeys.map(sortKey => <option value={sortKey.toLowerCase()} key={sortKey}>Sort by {sortKey}</option>)}
            </select>
        </div>
    </div>
}
export {PaginationControls}