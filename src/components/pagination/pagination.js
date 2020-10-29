import React from "react";

import "./pagination";

const Pagination = ({
  onPreviousPage = () => {},
  onNextPage = () => {},
  currentPage,
  maxNumberPage,
}) => {
  return (
    <div className="btn-group">
      <button
        key="previous"
        type="button"
        onClick={() => onPreviousPage()}
        disabled={currentPage > 0 ? "" : "disabled"}
        className="btn btn-info"
      >
        Previous
      </button>
      <div>{currentPage + 1}</div>
      <button
        key="next"
        type="button"
        onClick={() => onNextPage()}
        disabled={currentPage >= maxNumberPage ? "disabled" : ""}
        className="btn btn-outline-secondary"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
