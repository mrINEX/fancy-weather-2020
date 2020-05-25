import './js/create';
import location from './js/api.locationUser';
import getCountry from './js/api.locationUserCountry';
import getZone from './js/api.locationTimeZone';
import getWeather from './js/api.locationUserWeather';
import getMap from './js/api.locationUserMap';

import { currentDegree, currentLanguage, storageSet } from './js/localStorage';
import speechInput from './js/SpeechRecognition';
import getTime from './js/location.UserTime';
import addInfo from './js/addInfo';
import { exist, error, say } from './js/exist';

window.onload = () => {
  let currentCity;
  let stopInterval;
  let recognition;
  let degree = currentDegree(); // *imperial:[F]* or *metric:[C]*
  let language = currentLanguage(); // *en* or *ru* or *be*
  location().then((city) => { // start with city
    getCountry(city).then((country) => {
      getMap(country).then((map) => {
        getZone(map).then((zone) => {
          getWeather(getTime(zone), degree).then((City) => {
            stopInterval = addInfo(City, language, stopInterval);
            currentCity = City;
          });
        });
      });
    });
  }).catch(error);

  document.querySelector('.searchcityinput').addEventListener('change', ({ target }) => {
    getCountry(target.value).then((country) => {
      getMap(country).then((map) => {
        getZone(map).then((zone) => {
          getWeather(getTime(zone), degree).then((City) => {
            stopInterval = addInfo(City, language, stopInterval);
            currentCity = City;
          });
        });
      });
    }).catch(error);
  });

  document.querySelector('.imgVoice').addEventListener('click', () => {
    if (recognition) {
      document.querySelector('.imgVoice').classList.remove('wave');
      recognition.stop();
      recognition.onend = null;
      recognition = null;
    } else {
      document.querySelector('.imgVoice').classList.add('wave');
      recognition = speechInput(language);
      recognition.onend = () => {
        const result = document.querySelector('.searchcityinput').value;
        if (/speak weather/.test(result)) {
          say();
        } else if (/volume weather/.test(result)) {
          say(result.match(/[0-9]+/));
        } else {
          getCountry(result).then((country) => {
            getMap(country).then((map) => {
              getZone(map).then((zone) => {
                getWeather(getTime(zone), degree).then((City) => {
                  stopInterval = addInfo(City, language, stopInterval);
                  currentCity = City;
                });
              });
            });
          }).catch(error);
        }
        recognition = null;
        document.querySelector('.imgVoice').classList.remove('wave');
      };
    }
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
    const city = currentCity.city || currentCity.town || currentCity.state || currentCity.country;
    currentCity.infoBackground(currentCity.timeOfDay, currentCity.timeOfYear, city);
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
