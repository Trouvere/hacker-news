import React from "react";

import NewsService from "../../services/news-service";

import NewsList from "../news-list";

import "./app.css";

const App = () => {
  const newsService = new NewsService();
  // console.log(newsService.get20News());
  // console.log(newsService.getNews(24718078));

  return (
    <div>
      <NewsList />
    </div>
  );
};

export default App;
