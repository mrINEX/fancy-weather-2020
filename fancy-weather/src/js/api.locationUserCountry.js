import { mapTranslate, cityTranslate, inputTranslate } from './translate-creator';
import { existLoader } from './exist';
import City from './City';

const URL_API = 'https://api.opencagedata.com/';
const KEY = '12ff4fe1ac804a4689043079fcfc5b48';

export default function getCountry(city) {
  existLoader();
  const url = `${URL_API}geocode/v1/json?q=${city}&key=${KEY}&pretty=1&no_annotations=1&language=en`;
  return fetch(url)
    .then((response) => response.json())
    .then((result) => {
      const cityInfo = new City(result.results[0]);
      cityInfo.placeholderInput = 'Search city';
      cityInfo.valueInput = 'SEARCH';
      cityInfo.translateInput = inputTranslate(cityInfo);
      cityInfo.transtaleCity = cityTranslate(cityInfo);
      cityInfo.translateMap = mapTranslate(cityInfo.latitude, cityInfo.longitude);
      return cityInfo;
    });
}
