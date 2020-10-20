import React, { useEffect, useState } from "react";

import NewsService from "../../services/news-service";
import NewsListItem from "../news-list-item";
import "./news-list.css";

import Spinner from "../spinner/spinner";
import Pagination from "../pagination";
const newsService = new NewsService();

const NewsList = () => {
  const [newsIDBestNews, setnewsIDBestNews] = useState([]);
  const [loading, setloading] = useState(false);
  const [firstItemOnPage, setfirstItemOnPage] = useState(0);

  useEffect(() => {
    newsService.getIDBestNews().then((data) => {
      let newsIDBestNews = [];
      for (let i = 0; i < 20; i++) {
        newsIDBestNews.push(data[i]);
      }

      setnewsIDBestNews(newsIDBestNews);
      setloading(true);
    });
  }, []);

  const renderItems = (arr) => {
    return arr.map((item) => {
      return (
        <div key={item} className="news-list-li">
          <NewsListItem newsID={item} />
        </div>
      );
    });
  };
  // ?????????обновление состояния зависящего от старого состояния в хуках
  const onChangefirstItemOnPage = (name) => {
    // console.log(name);
    let page;
    if (name === "previous") {
      page = firstItemOnPage - 20;
    } else if (name === "next") {
      page = firstItemOnPage + 20;
    }
    setfirstItemOnPage(page);
    // console.log(firstItemOnPage);
  };

  if (!loading) {
    return <Spinner />;
  }

  const items = renderItems(newsIDBestNews);

  return (
    <>
      <Pagination
        firstItemOnPage={firstItemOnPage}
        onChangefirstItemOnPage={onChangefirstItemOnPage}
      />
      <ul className="news-list list-group">{items}</ul>
    </>
  );
};

export default NewsList;
