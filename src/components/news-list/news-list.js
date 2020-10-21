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
  const [maxIDBestNews, setMaxIDBestNews] = useState(0);

  const maxIDBestNewsOnPage =
    firstItemOnPage + 20 >= maxIDBestNews
      ? maxIDBestNews
      : firstItemOnPage + 20;

  useEffect(() => {
    newsService.getIDBestNews().then((data) => {
      console.log(data);
      setnewsIDBestNews(data);
      setMaxIDBestNews(data.length);
      setloading(true);
    });
  }, []);

  const renderItems = (arr) => {
    let newsID20BestNews = [];
    for (let i = firstItemOnPage; i < maxIDBestNewsOnPage; i++) {
      newsID20BestNews.push(arr[i]);
    }
    return newsID20BestNews.map((item) => {
      return (
        <div key={item} className="news-list-li">
          <NewsListItem newsID={item} />
        </div>
      );
    });
  };
  // ?????????обновление состояния зависящего от старого состояния в хуках
  //    this.setState(({ todoData }) => {
  //   return {
  //     todoData: this.toggleProperty(todoData, id, 'important')
  //   };
  // });
  const onChangefirstItemOnPage = (name) => {
    let page;
    if (name === "previous") {
      page = firstItemOnPage - 20;
    } else if (name === "next") {
      page = firstItemOnPage + 20;
    }
    setfirstItemOnPage(page);
  };

  if (!loading) {
    return <Spinner />;
  }

  const items = renderItems(newsIDBestNews);

  return (
    <>
      <Pagination
        firstItemOnPage={firstItemOnPage}
        maxIDBestNewsOnPage={maxIDBestNewsOnPage}
        maxIDBestNews={maxIDBestNews}
        onChangefirstItemOnPage={onChangefirstItemOnPage}
      />
      <ul className="news-list list-group">{items}</ul>
    </>
  );
};

export default NewsList;
