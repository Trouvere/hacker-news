import React, { Component } from "react";

import NewsService from "../../services/news-service";
import NewsListItem from "../news-list-item";
import "./news-list.css";

import Spinner from "../spinner/spinner";

export default class NewsList extends Component {
  newsService = new NewsService();

  state = {
    newsIDBestNews: null,
    // newsList: null,
  };

  componentDidMount() {
    this.newsService.getIDBestNews().then((data) => {
      let newsIDBestNews = [];
      for (let i = 0; i < 20; i++) {
        newsIDBestNews.push(data[i]);
      }

      this.setState({
        newsIDBestNews,
      });
    });
  }

  renderItems(arr) {
    return arr.map((item) => {
      return (
        <div key={item} className="news-list-li">
          <NewsListItem newsID={item} />
        </div>
      );
    });
  }

  render() {
    const { newsIDBestNews } = this.state;

    if (!newsIDBestNews) {
      return <Spinner />;
    }

    const items = this.renderItems(newsIDBestNews);

    return <ul className="news-list list-group">{items}</ul>;
  }
}
