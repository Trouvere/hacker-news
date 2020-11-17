import React, { useEffect, useState } from "react";
import "./news-list-item.css";

import { getNews } from "../../services/news-service";
import Spinner from "../spinner/spinner";

const NewsListItem = ({ newsID }) => {
  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    let controller;
    let signal;

    controller = new AbortController();
    signal = controller.signal;
    getNews(newsID, signal).then((news) => {
      if (!cancelled) {
        setNews(news);

        setLoading(false);
      }
    });

    return function cleanup() {
      cancelled = true;

      controller.abort();
    };
  }, [newsID]);

  if (loading) {
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
