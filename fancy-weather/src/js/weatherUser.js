const APPID = 'c6b65e868774bd345d33ca46c70b7a17';
const URL_API_OPENWEATHER = 'https://api.openweathermap.org/';
const URL_API_ICON = 'http://openweathermap.org/';
const DAYWEEK_EN = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const DAYWEEK_RU = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
const DAYWEEK_BE = ['Нядзеля', 'Панядзелак', 'Аўторак', 'Серада', 'Чацвер', 'Пятніца', 'Субота'];
const { activeState } = require('./activeState');
const { storageGet } = require('./localStorage');
const { show } = require('./weatherLanguage');

// imperial [F] metric [C] mph [F] m/s [C]
function weatherUser(lat, lon, measure) {
  activeState(measure);
  const url = `${URL_API_OPENWEATHER}data/2.5/forecast?lat=${lat}&lon=${lon}&lang=${storageGet('language')}&units=${measure}&APPID=${APPID}`;
  return fetch(url)
    .then((response) => response.json())
    .then((result) => {
      document.querySelector('.temp').innerText = `${Math.round(result.list[0].main.temp)}°`;
      document.querySelector('.imgWeather').src = `${URL_API_ICON}img/wn/${result.list[0].weather[0].icon}@2x.png`;
      document.querySelector('.summaryWeather').textContent = result.list[0].weather[0].description.toUpperCase();

      if (storageGet('language') === 'ru') {
        show.showRU(result, measure);
      } else if (storageGet('language') === 'be') {
        show.showBE(result, measure);
      } else {
        show.showEN(result, measure);
      }

      for (let i = 0, iweather = 8; i < 3; i += 1, iweather += 8) {
        const spanDay = document.querySelector(`.day${i}`);
        if (storageGet('language') === 'ru') {
          spanDay.innerHTML = DAYWEEK_RU[new Date(result.list[iweather].dt_txt).getDay()];
        } else if (storageGet('language') === 'be') {
          spanDay.innerHTML = DAYWEEK_BE[new Date(result.list[iweather].dt_txt).getDay()];
        } else {
          spanDay.innerHTML = DAYWEEK_EN[new Date(result.list[iweather].dt_txt).getDay()];
        }
        const spanTempTomorrow = document.querySelector(`.temp${i}`);
        spanTempTomorrow.innerHTML = `${Math.round(result.list[iweather].main.temp)}°`;
        const imgWeatherTomorrow = document.querySelector(`.iconWeather${i}`);
        imgWeatherTomorrow.src = `${URL_API_ICON}img/wn/${result.list[iweather].weather[0].icon}@2x.png`;
      }
      return result.list[0].weather[0].main;
    });
}

module.exports = {
  weatherUser,
};
