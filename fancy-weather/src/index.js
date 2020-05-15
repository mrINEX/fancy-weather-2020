require('./js/create');
const { currentData } = require('./js/api.locationUser');
const { dataCity } = require('./js/api.locationUserCountry');
const { timeCity } = require('./js/api.locationTimeZone');
const { weatherUser } = require('./js/api.locationUserWeather');

const { currentDegree, currentLanguage } = require('./js/localStorage');
const { setBackgroundImage } = require('./js/setBackgroundImage');
const { showTime } = require('./js/showTime');
const { mapUser } = require('./js/mapUser');

window.onload = () => {
  const degree = currentDegree(); // *imperial:[F]* or *metric:[C]*
  const language = currentLanguage(); // *en* or *ru* or *be*
  currentData().then((city) => { // start with city
    dataCity(city).then((CityName) => {
      mapUser(CityName).then((CityMap) => {
        timeCity(CityMap).then((CityTimeZone) => {
          showTime(CityTimeZone).then((CityTime) => {
            weatherUser(CityTime, degree).then((description) => {
              setBackgroundImage(description);
            });
          });
        });
      });
    });
  });
};
