require('./js/create');
const { currentData } = require('./js/api.locationUser');
const { dataCity } = require('./js/api.locationUserCountry');
const { timeCity } = require('./js/api.locationTimeZone');
const { weatherUser } = require('./js/api.locationUserWeather');

const { currentDegree, currentLanguage } = require('./js/localStorage');
const { showTime } = require('./js/showTime');
const { mapUser } = require('./js/api.locationUserMap');

window.onload = () => {
  const degree = currentDegree(); // *imperial:[F]* or *metric:[C]*
  const language = currentLanguage(); // *en* or *ru* or *be*
  currentData().then((city) => { // start with city
    dataCity(city).then((CityName) => {
      mapUser(CityName).then((CityMap) => {
        timeCity(CityMap).then((CityTimeZone) => {
          weatherUser(showTime(CityTimeZone), degree, language).then((CityFull) => {
            console.log(CityFull);
            CityFull.infoCity();
            CityFull.infoDate();
            CityFull.infoWeatherToday();
            CityFull.infoMap();
          });
        });
      });
    });
  });
};
