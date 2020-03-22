import React from "react";

const PaginationButtons = (props) => {
    const {
        currentPage,
        pageCount,
        navigate
    } = props;
    const getPageNumbers = () => {
        if (pageCount < 4) {
            return [...Array(pageCount + 1).keys()].slice(1);
        } else if (currentPage <= 4) {
            return [1, 2, 3, 4, 5];
        } else if (currentPage > pageCount - 4) {
            return [...Array(5).keys()].reverse().map(page => pageCount - page)
        } else {
            return [currentPage - 1, currentPage, currentPage + 1]
        }
    }

    return <React.Fragment>
        <button onClick={() => navigate(currentPage - 1)} disabled={currentPage === 1}
                className="btn btn-secondary mx-1">
            Previous
        </button>

        {currentPage > 4 &&
            <React.Fragment>
                <button onClick={() => navigate(1)} disabled={currentPage === 1} className="btn btn-secondary mx-1">
                    1
                </button>
                <span className="h4">...</span>
            </React.Fragment>
        }

        {getPageNumbers().map(pageNumber =>
            <button className={`btn mx-1 ${pageNumber === currentPage ? "btn-primary" : 'btn-secondary'}`}
                    onClick={() => navigate(pageNumber)} key={pageNumber}>
                {pageNumber}
            </button>
        )}

        {currentPage <= (pageCount - 4) &&
            <React.Fragment>
                <span className="h4">...</span>
                <button onClick={() => navigate(pageCount)} className="btn btn-secondary mx-1">
                    {pageCount}
                </button>
            </React.Fragment>
        }
        <button onClick={() => navigate(currentPage+1)} disabled={currentPage === pageCount}
                className="btn btn-secondary mx-1">
            Next
        </button>
    </React.Fragment>
};

export {PaginationButtons};