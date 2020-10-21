import React from "react";

import "./pagination";

const Pagination = ({
  firstItemOnPage,
  maxIDBestNewsOnPage,
  maxIDBestNews,
  onChangefirstItemOnPage = () => {},
}) => {
  const namePrevious = "previous";
  const nameNext = "next";

  return (
    <div className="btn-group">
      <button
        key="previous"
        type="button"
        onClick={() => onChangefirstItemOnPage(namePrevious)}
        disabled={firstItemOnPage <= 0 ? "disabled" : ""}
        className="btn btn-info"
      >
        Previous
      </button>
      <div>
        {" "}
        {firstItemOnPage + 1}-{maxIDBestNewsOnPage}{" "}
      </div>
      <button
        key="next"
        type="button"
        onClick={() => onChangefirstItemOnPage(nameNext)}
        disabled={firstItemOnPage + 20 >= maxIDBestNews ? "disabled" : ""}
        className="btn btn-outline-secondary"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
