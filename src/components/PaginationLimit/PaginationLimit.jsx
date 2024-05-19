import React from 'react';

const PaginationLimit = ({ currentPage, totalPages, onPageChange, pageLimit }) => {
    const handlePrev = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    const handlePageClick = (page) => {
        onPageChange(page);
    };

    const renderPageNumbers = () => {
        const pageNumbers = [];
        const halfPageLimit = Math.floor(pageLimit / 2);

        let startPage = Math.max(currentPage - halfPageLimit, 1);
        let endPage = Math.min(currentPage + halfPageLimit, totalPages);

        if (endPage - startPage + 1 < pageLimit) {
            startPage = Math.max(endPage - pageLimit + 1, 1);
        }

        for (let i = startPage; i <= endPage; i++) {
            pageNumbers.push(
                <button
                    key={i}
                    onClick={() => handlePageClick(i)}
                    className={currentPage === i ? 'active' : ''}
                >
                    {i}
                </button>
            );
        }
        return pageNumbers;
    };

    return (
        <div className="pagination">
            <button onClick={handlePrev} disabled={currentPage === 1}>
                Previous
            </button>
            {renderPageNumbers()}
            <button onClick={handleNext} disabled={currentPage === totalPages}>
                Next
            </button>
        </div>
    );
};

export default PaginationLimit;
