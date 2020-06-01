import { newsTranslate, cityTranslate } from './translate-creator';

const URL_RIVER = 'https://api.newsriver.io/v2/search';
const KEY_RIVER = 'sBBqsGXiYgF0Db5OV5tAw4bxNMXovpHuNnDMcYJJO8EGrK4S0XI2e-uTYCww-9cfn2pHZrSf1gT2PUujH1YaQA';

export default function getNews(City) {
  const country = City.country || City.county || City.formatted;
  return fetch(`${URL_RIVER}?query=text:${country} AND language:EN&limit=10`, {
    headers: {
      Authorization: KEY_RIVER,
    },
  }).then((response) => response.json())
    .then((result) => {
      const node = City;
      const newsFuncs = [];
      result.forEach((val) => {
        if (!/Betting ADDICTION/.test(val.title)) {
          const element = newsTranslate(val);
          newsFuncs.push(element);
        }
      });
      node.news = newsFuncs;
      return node;
    }).catch((err) => {
      console.log(err);
      return City;
    });
}
