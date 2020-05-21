require('./js/create');
const { location } = require('./js/api.locationUser');
const { getCountry } = require('./js/api.locationUserCountry');
const { getZone } = require('./js/api.locationTimeZone');
const { getWeather } = require('./js/api.locationUserWeather');
const { getMap } = require('./js/api.locationUserMap');

const { currentDegree, currentLanguage, storageSet } = require('./js/localStorage');
const { speechInput } = require('./js/SpeechRecognition');
const { getTime } = require('./js/location.UserTime');
const { addInfo } = require('./js/addInfo');
const { exist, error } = require('./js/exist');

window.onload = (day) => {
  let currentCity;
  let stopInterval;
  let degree = currentDegree(); // *imperial:[F]* or *metric:[C]*
  let language = currentLanguage(); // *en* or *ru* or *be*
  location().then((city) => { // start with city
    getCountry(city).then((country) => {
      getMap(country).then((map) => {
        getZone(map).then((zone) => {
          getWeather(getTime(zone), degree).then((weather) => {
            stopInterval = addInfo(weather, language, stopInterval);
            currentCity = weather;
          });
        });
      });
    });
  }).catch(error);

  document.querySelector('.searchcityinput').addEventListener('change', ({ target }) => {
    getCountry(target.value).then((country) => {
      getMap(country).then((map) => {
        getZone(map).then((zone) => {
          getWeather(getTime(zone), degree).then((weather) => {
            stopInterval = addInfo(weather, language, stopInterval);
            currentCity = weather;
          });
        });
      });
    }).catch(error);
  });

  document.querySelector('.imgVoice').addEventListener('click', () => {
    const recognition = speechInput(language);
    recognition.onend = () => {
      const result = document.querySelector('.searchcityinput').value;
      getCountry(result).then((country) => {
        getMap(country).then((map) => {
          getZone(map).then((zone) => {
            getWeather(getTime(zone), degree).then((weather) => {
              stopInterval = addInfo(weather, language, stopInterval);
              currentCity = weather;
            });
          });
        });
      }).catch(error);
    };
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
    exist('.weather-image-height');
    const city = currentCity.city || currentCity.state || currentCity.country;
    currentCity.infoBackground(currentCity.timeOfDay, currentCity.weatherMain, city);
  });

  document.querySelector('.degrees').addEventListener('click', ({ target }) => {
    switch (target.classList[0]) {
      case 'fahrenheit':
        storageSet('temp', 'imperial');
        degree = currentDegree();
        getWeather(currentCity, 'imperial')
          .then((City) => {
            currentCity = City;
            currentCity.infoWeatherToday(language);
            currentCity.infoWeatherTothreedays(language);
          });
        break;
      case 'celsius':
        storageSet('temp', 'metric');
        degree = currentDegree();
        getWeather(currentCity, 'metric')
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
