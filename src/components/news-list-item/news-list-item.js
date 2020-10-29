import React, { useEffect, useState } from "react";
import "./news-list-item.css";

import { getNews } from "../../services/news-service";
import Spinner from "../spinner/spinner";

const NewsListItem = ({ newsID }) => {
  const [news, setnews] = useState(null);
  const [loading, setloading] = useState(false);
  useEffect(() => {
    getNews(newsID).then((news) => {
      setnews(news);
      setloading(true);
    });
  }, [newsID]);

  if (!loading) {
    return <Spinner />;
  }

  const { id, title, type, url, time } = news;
  return (
    <div className="news-list-item">
      <div className="news-list-details">
        <div className="news-list-id">{id}</div>
        <div className="news-list-item__title">{title}</div>
        <div className="news-list-item__type">{type}</div>
        <div className="news-list-item__time">{time}</div>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="news-list-item__url"
        >
          {url}
        </a>
      </div>
    </div>
  );
};

export default NewsListItem;
