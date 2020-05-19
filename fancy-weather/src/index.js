require('./js/create');
const { location } = require('./js/api.locationUser');
const { dataCity } = require('./js/api.locationUserCountry');
const { timeCity } = require('./js/api.locationTimeZone');
const { weatherUser } = require('./js/api.locationUserWeather');
const { mapUser } = require('./js/api.locationUserMap');

const { currentDegree, currentLanguage, storageSet } = require('./js/localStorage');
const { showTime } = require('./js/showTime');
const { exist } = require('./js/exist');

window.onload = () => {
  let currentCity;
  let degree = currentDegree(); // *imperial:[F]* or *metric:[C]*
  let language = currentLanguage(); // *en* or *ru* or *be*
  location().then((city) => { // start with city
    dataCity(city).then((CityName) => {
      mapUser(CityName).then((CityMap) => {
        timeCity(CityMap).then((CityTimeZone) => {
          weatherUser(showTime(CityTimeZone), degree).then((CityFull) => {
            currentCity = CityFull;
            currentCity.translateInput(language);
            currentCity.infoCity(language);
            currentCity.infoDate(language);
            currentCity.infoWeatherToday(language);
            currentCity.infoWeatherTothreedays(language);
            currentCity.infoMap(language);
            currentCity.infoBackground(currentCity.timeOfDay, currentCity.weatherMain, currentCity.city);
          });
        });
      });
    });
  });

  document.querySelector('.language').addEventListener('change', ({ target }) => {
    storageSet('language', target.value);
    language = currentLanguage();
    currentCity.translateInput(language);
    currentCity.transtaleCity(language);
    currentCity.dateTime(language);
    currentCity.todayWeatherDescription(language);
    currentCity.tothreedaysWeather.forEach((tomorrow) => tomorrow(language));
    currentCity.translateMap(language);
  });

  document.querySelector('.refresh').addEventListener('click', () => {
    exist('.weather-image');
    currentCity.infoBackground(currentCity.timeOfDay, currentCity.weatherMain, currentCity.city);
  });

  document.querySelector('.degrees').addEventListener('click', ({ target }) => {
    switch (target.classList[0]) {
      case 'fahrenheit':
        storageSet('temp', 'imperial');
        degree = currentDegree();
        weatherUser(currentCity, 'imperial')
          .then((City) => {
            currentCity = City;
            currentCity.infoWeatherToday(language);
            currentCity.infoWeatherTothreedays(language);
          });
        break;
      case 'celsius':
        storageSet('temp', 'metric');
        degree = currentDegree();
        weatherUser(currentCity, 'metric')
          .then((City) => {
            currentCity = City;
            currentCity.infoWeatherToday(language);
            currentCity.infoWeatherTothreedays(language);
          });
        break;
      default:
    }
  });
};
