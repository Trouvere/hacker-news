import React, { Component } from "react";

import NewsService from "../../services/news-service";
import NewsListItem from "../news-list-item";
import "./news-list.css";

// import Spinner from "../spinner/spinner";

export default class NewsList extends Component {
  newsService = new NewsService();

  state = {
    newsList: null,
  };

  componentDidMount() {
    this.newsService.get20News().then((newsList) => {
      this.setState({
        newsList,
      });
    });
  }

  renderItems(arr) {
    console.log(arr);
    return arr.map((item) => {
      const { title } = item;

      return (
        <div className="book-list-li">
          <NewsListItem news={item} />
        </div>
      );
    });
  }

  render() {
    const { newsList } = this.state;

    // if (!newsList) {
    //   return <Spinner />;
    // }

    if (!newsList) {
      return <h1> Download</h1>;
    }
    const items = this.renderItems(newsList);

    return <ul className="news-list list-group">{items}</ul>;
  }
}
