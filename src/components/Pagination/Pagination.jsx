import React from "react";

const Pagination = ({ products, page, setPage, maxVisiblePages = 4 }) => {
    const totalPages = Math.ceil(products.length / 10);

    const selectPageHandler = (selectedPage) => {
        if (
            selectedPage >= 1 &&
            selectedPage <= products.length / 10 &&
            selectedPage !== page
        ) {
            setPage(selectedPage);
        }
    };

    const renderPageKey = (currPage, key) => {
        return (
            <span
                key={key}
                className={page === currPage ? "pagination__selected" : ""}
                onClick={() => selectPageHandler(currPage)}
            >
                {currPage}
            </span>
        );
    };

    const renderPageNumbers = () => {
        const pageNumbers = [];

        if (totalPages <= maxVisiblePages) {
            for (let i = 1; i <= totalPages; i++) {
                pageNumbers.push(renderPageKey(i));
            }
        } else {
            // truncation logic
            const startPage = Math.max(1, page - Math.floor(maxVisiblePages / 2));
            const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

            if (startPage > 1) {
                if (startPage >= 2) pageNumbers.push(renderPageKey(1));
                pageNumbers.push(renderPageKey("...", "ellipsis-start"));
            }

            for (let i = startPage; i <= endPage; i++) {
                pageNumbers.push(renderPageKey(i));
            }

            if (endPage < totalPages) {
                pageNumbers.push(renderPageKey("...", "ellipsis-end"));
                if (endPage <= totalPages - 1)
                    pageNumbers.push(renderPageKey(totalPages));
            }
        }

        return pageNumbers;
    };

    return (
        <div className="pagination">
            <span
                onClick={() => selectPageHandler(page - 1)}
                className={page > 1 ? "" : "pagination__disable"}
            >
                ◀
            </span>

            {renderPageNumbers()}

            <span
                onClick={() => selectPageHandler(page + 1)}
                className={page < products.length / 10 ? "" : "pagination__disable"}
            >
                ▶
            </span>
        </div>
    );
};

export default Pagination;