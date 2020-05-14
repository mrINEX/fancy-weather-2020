const URL_API = 'https://api.opencagedata.com/';
const KEY = '12ff4fe1ac804a4689043079fcfc5b48';
const history = [];

const { City } = require('./City');

function dataCity(city) {
  const storageLanguage = localStorage.getItem('language');
  const url = `${URL_API}geocode/v1/json?q=${city}&key=${KEY}&pretty=1&no_annotations=1&language=${storageLanguage}`;
  fetch(url)
    .then((response) => response.json())
    .then((result) => {
      const currentCity = new City(result.results[0]);
      currentCity.infoCity();
      currentCity.infoGeometry();
      history.push(result.results[0].geometry);
      return result.results[0].geometry;
    });
  return history[history.length - 1];
}

module.exports = {
  dataCity,
};
