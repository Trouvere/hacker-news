const _apiBase = "https://hacker-news.firebaseio.com/";

const getResource = async (url, signal) => {
  try {
    const res = await fetch(`${_apiBase}${url}`, {
      signal: signal,
    });
    if (!res.ok) {
      throw new Error(`Could not fetch ${url} , received ${res.status}`);
    }
    return await res.json();
  } catch (err) {
    if (err.name === "AbortError") {
      console.log("Request Abort. Automatically cancelled.");
      return err;
    }
    throw err;
  }
};
export const getIDBestNews = async () => {
  const res = await getResource(`/v0/topstories.json`);

  return res;
};

export const getNews = async (id, signal) => {
  const res = await getResource(`/v0/item/${id}.json`, signal);

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
