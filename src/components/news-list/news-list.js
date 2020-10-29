import React, { useEffect, useState } from "react";

import { getIDBestNews } from "../../services/news-service";
import NewsListItem from "../news-list-item";
import "./news-list.css";

import Spinner from "../spinner/spinner";
import Pagination from "../pagination";

const NewsList = () => {
  const [newsIDBestNews, setnewsIDBestNews] = useState([]);
  const [loading, setloading] = useState(false);
  const [maxNumberPage, setmaxNumberPage] = useState(101);
  const itemsPerPage = 20;
  const [currentPage, setCurrentPage] = useState(0);
  const onPreviousPage = () => setCurrentPage((page) => page - 1);
  const onNextPage = () => setCurrentPage((page) => page + 1);
  const [itemsToShow, setItemsToShow] = useState([]);

  // getIDBestNews
  useEffect(() => {
    getIDBestNews().then((data) => {
      console.log(data);
      setnewsIDBestNews(data);
      setmaxNumberPage(Math.ceil(499 / itemsPerPage) - 1);
      setloading(true);
    });
  }, []);

  // Update items to show if page changed or newsIDBestNews updated
  useEffect(() => {
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setItemsToShow(newsIDBestNews.slice(startIndex, endIndex));
  }, [newsIDBestNews, currentPage, setItemsToShow]);

  // render
  if (!loading) {
    return <Spinner />;
  }

  return (
    <>
      <Pagination
        onPreviousPage={onPreviousPage}
        onNextPage={onNextPage}
        currentPage={currentPage}
        maxNumberPage={maxNumberPage}
        // onChangefirstItemOnPage={onChangefirstItemOnPage}
      />
      <ul className="news-list list-group">
        {itemsToShow.map((id) => (
          <div key={id} className="news-list-li">
            <NewsListItem newsID={id} />
          </div>
        ))}
      </ul>
    </>
  );
};

export default NewsList;
