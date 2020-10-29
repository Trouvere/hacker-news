// export default class NewsService {
const _apiBase = "https://hacker-news.firebaseio.com/";

const getResource = async (url) => {
  const res = await fetch(`${_apiBase}${url}`);
  if (!res.ok) {
    throw new Error(`Could not fetch ${url} , received ${res.status}`);
  }
  return await res.json();
};

export const getIDBestNews = async () => {
  const res = await getResource(`/v0/topstories.json`);

  // console.log(res);
  return res;
};

export const getNews = async (id) => {
  const res = await getResource(`/v0/item/${id}.json`);

  return res;
};

export const get20News = async () => {
  const IDBestNews = await getIDBestNews();
  const bestNews20 = [];
  for (let i = 0; i < 20; i++) {
    bestNews20.push(await getNews(IDBestNews[i]));
  }
  return bestNews20;
};
// }
