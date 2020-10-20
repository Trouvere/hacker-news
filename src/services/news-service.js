export default class NewsService {
  _apiBase = "https://hacker-news.firebaseio.com/";

  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);
    if (!res.ok) {
      throw new Error(`Could not fetch ${url} , received ${res.status}`);
    }
    return await res.json();
  }

  async getIDBestNews() {
    const res = await this.getResource(`/v0/topstories.json`);

    // console.log(res);
    return res;
  }

  async getNews(id) {
    const res = await this.getResource(`/v0/item/${id}.json`);

    return res;
  }

  async get20News() {
    const IDBestNews = await this.getIDBestNews();
    const bestNews20 = [];
    for (let i = 0; i < 20; i++) {
      bestNews20.push(await this.getNews(IDBestNews[i]));
    }
    return bestNews20;
  }
}
