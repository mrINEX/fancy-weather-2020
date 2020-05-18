require('./js/create');
const { currentData } = require('./js/api.locationUser');
const { dataCity } = require('./js/api.locationUserCountry');
const { timeCity } = require('./js/api.locationTimeZone');
const { weatherUser } = require('./js/api.locationUserWeather');

const { currentDegree, currentLanguage } = require('./js/localStorage');
const { showTime } = require('./js/showTime');
const { mapUser } = require('./js/api.locationUserMap');

window.onload = () => {
  let currentCity;
  const degree = currentDegree(); // *imperial:[F]* or *metric:[C]*
  const language = currentLanguage(); // *en* or *ru* or *be*
  currentData().then((city) => { // start with city
    dataCity(city).then((CityName) => {
      mapUser(CityName).then((CityMap) => {
        timeCity(CityMap).then((CityTimeZone) => {
          weatherUser(showTime(CityTimeZone), degree, language).then((CityFull) => {
            console.log(CityFull);
            currentCity = CityFull;
            CityFull.infoCity();
            CityFull.infoDate();
            CityFull.infoWeatherToday();
            CityFull.infoWeatherTothreedays();
            CityFull.infoMap();
            CityFull.setBackground(CityFull.timeOfDay, CityFull.weatherMain, CityFull.city);
          });
        });
      });
    });
  });

  document.querySelector('.language').addEventListener('change', ({ target }) => {
    currentCity.todayWeatherDescription(target.value);
    currentCity.tothreedaysWeather.forEach((tomorrow) => tomorrow(target.value));
  });

  document.querySelector('.refresh').addEventListener('click', () => {
    currentCity.setBackground(currentCity.timeOfDay, currentCity.weatherMain, currentCity.city);
  });

  document.querySelector('.degrees').addEventListener('click', ({ target }) => {
    switch (target) {
      case 'fahrenheit':
        weatherUser(showTime(currentCity), 'imperial')
          .then((City) => { currentCity = City; });
        break;
      case 'celsius':
        weatherUser(showTime(currentCity), 'metric')
          .then((City) => { currentCity = City; });
        break;
      default:
    }
  });
};
