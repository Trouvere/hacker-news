import React, { useEffect, useState } from "react";

import NewsService from "../../services/news-service";
import NewsListItem from "../news-list-item";
import "./pagination";

import Spinner from "../spinner/spinner";

const Pagination = ({
  firstItemOnPage,
  onChangefirstItemOnPage = () => {},
}) => {
  const [newsIDBestNews, setnewsIDBestNews] = useState([]);

  const namePrevious = "previous";
  const nameNext = "next";

  return (
    <div className="btn-group">
      <button
        key="previous"
        type="button"
        onClick={() => onChangefirstItemOnPage(namePrevious)}
        disabled={firstItemOnPage <= 0 ? "disabled" : ""}
        // "disabled"
        className="btn btn-info"
      >
        Previous
      </button>
      <div>
        {" "}
        {firstItemOnPage + 1}-{firstItemOnPage + 20}{" "}
      </div>
      <button
        key="next"
        type="button"
        onClick={() => onChangefirstItemOnPage(nameNext)}
        disabled={firstItemOnPage >= 480 ? "disabled" : ""}
        className="btn btn-outline-secondary"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
