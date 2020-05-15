const APPID = 'c6b65e868774bd345d33ca46c70b7a17';
const URL_API_OPENWEATHER = 'https://api.openweathermap.org/';
const URL_API_ICON = 'http://openweathermap.org/';
const DAYWEEK_EN = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const DAYWEEK_RU = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
const DAYWEEK_BE = ['Нядзеля', 'Панядзелак', 'Аўторак', 'Серада', 'Чацвер', 'Пятніца', 'Субота'];
const { activeState } = require('./activeState');
const { storageGet } = require('./localStorage');
const { createElement } = require('./createElement');
const { show } = require('./weatherLanguage');

// imperial [F] metric [C] mph [F] m/s [C]
function weatherUser(City, measure) { // City.geometry.lat, City.geometry.lng
  activeState(measure);
  const url = `${URL_API_OPENWEATHER}data/2.5/forecast?lat=${City.latitude}&lon=${City.longitude}&lang=en&units=${measure}&APPID=${APPID}`;
  return fetch(url)
    .then((response) => response.json())
    .then((result) => {
      const todayWeather = createElement('div', { classList: ['today__weather'] });
      const temp = createElement('span', { classList: ['today__temp'] });
      const image = createElement('img', { classList: ['today__image'] });
      const description = createElement('div', { classList: ['today__description'] });
      todayWeather.append(temp, image, description);
      temp.innerText = `${Math.round(result.list[0].main.temp)}°`;
      image.src = `${URL_API_ICON}img/wn/${result.list[0].weather[0].icon}@2x.png`;

      let elements;
      if (storageGet('language') === 'ru') {
        elements = show.showRU(result, measure);
      } else if (storageGet('language') === 'be') {
        elements = show.showBE(result, measure);
      } else {
        elements = show.showEN(result, measure);
      }
      elements.forEach((element) => description.append(element));

      const tothreedays = createElement('div', { classList: ['tothreedays'] });
      const tomorrow = createElement('div', { classList: ['tothreedays-tomorrow'] });
      let iweather = 8;
      [tomorrow, tomorrow.cloneNode(true), tomorrow.cloneNode(true)].forEach((node) => {
        const tomorromDay = createElement('span', {
          classList: ['tomorrow-day'],
          innerText: DAYWEEK_EN[new Date(result.list[iweather].dt_txt).getDay()],
        });
        const tomorromTemp = createElement('span', {
          classList: ['tomorrow-temp'],
          innerText: `${Math.round(result.list[iweather].main.temp)}°`,
        });
        const tomorromImage = createElement('img', {
          classList: ['tomorrow-image'],
          src: `${URL_API_ICON}img/wn/${result.list[iweather].weather[0].icon}@2x.png`,
        });
        node.append(tomorromDay, tomorromTemp, tomorromImage);
        tothreedays.append(node);
        iweather += 8;
      });
      document.querySelector('.today').append(todayWeather);
      document.querySelector('.wrapperForWeather').append(tothreedays);
      return result.list[0].weather[0].main;
    });
}

module.exports = {
  weatherUser,
};
