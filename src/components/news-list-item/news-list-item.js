import React from "react";
import "./news-list-item.css";

const NewsListItem = ({ news }) => {
  const { title, type, url, time } = news;

  return (
    <div className="news-list-item">
      <div className="book-details">
        <div className="news-list-item__title">{title}</div>
        <div className="news-list-item__type">{type}</div>
        <div className="news-list-item__time">{time}</div>
        <a className="news-list-item__url">{url}</a>
      </div>
    </div>
  );
};

export default NewsListItem;
