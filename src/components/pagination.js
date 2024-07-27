import React from 'react'
import'./pagination.css';

function Pagination({ currentPage, totalPages, handlePrevPage, handleNextPage }) {
  return (
     <div className="pagination">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="pagination-button"
        >
          Previous
        </button>
        <span>Page {currentPage} of {totalPages}</span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="pagination-button"
        >
          Next
        </button>
      </div> 
  )
}

export default Pagination