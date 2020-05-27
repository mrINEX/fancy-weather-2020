import { newsTranslate } from './translate-creator';

const URL_API = 'https://newsapi.org/v2/everything?';
const KEY = '89978571465f433fbbe6d7687b752d92';

export default function getNews(City) {
  const url = `${URL_API}q=${City.country || City.county || City.formatted}&from=${City.timeZone.match(/^.+(?=\s)/)}&apiKey=${KEY}`;
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
