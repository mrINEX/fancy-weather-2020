import { newsTranslate } from './translate-creator';

const URL_API = 'https://newsapi.org/v2/everything?';
const KEY = '89978571465f433fbbe6d7687b752d92';
const CORS = 'https://cors-anywhere.herokuapp.com/';

export default function getNews(City) {
  const country = City.country || City.county || City.formatted;
  const date = City.timeZone.match(/^.+(?=\s)/);
  const url = `${CORS}${URL_API}q=${country}&pageSize=6&from=${date}&apiKey=${KEY}`;
  return fetch(url)
    .then((response) => response.json())
    .then((result) => {
      const node = City;
      const newsFuncs = [];
      result.articles.forEach((val) => {
        const element = newsTranslate(val);
        newsFuncs.push(element);
      });
      node.news = newsFuncs;
      return node;
    });
}
