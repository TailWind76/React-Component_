
import React, { useState } from 'react';
import './Pagination.css';

const Pagination = ({ totalItems, itemsPerPage, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);

  const handlePageChange = (pageNumber) => {
    if (pageNumber < 1 || pageNumber > totalPages || isAnimating) {
      return;
    }

    setIsAnimating(true);
    setCurrentPage(pageNumber);

    
    setTimeout(() => {
      setIsAnimating(false);
      onPageChange(pageNumber);
    }, 500); 
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <li key={i} className={currentPage === i ? 'active' : null}>
          <button onClick={() => handlePageChange(i)}>{i}</button>
        </li>
      );
    }
    return pageNumbers;
  };

  return (
    <div className="pagination">
      <ul>
        <li>
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1 || isAnimating}
          >
            Prev
          </button>
        </li>
        {renderPageNumbers()}
        <li>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages || isAnimating}
          >
            Next
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
