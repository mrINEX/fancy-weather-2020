const DAYWEEK_EN = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const DAYWEEK_RU = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
const DAYWEEK_BE = ['Нядзеля', 'Панядзелак', 'Аўторак', 'Серада', 'Чацвер', 'Пятніца', 'Субота'];


const { createElement } = require('./createElement');
const { translate } = require('./translate');

function showToday(result, measure) {
  const summary = createElement('span', { classList: ['today__summary'] });
  const apparentTemp = createElement('span', { classList: ['today__apparentTemp'] });
  const windSpeed = createElement('span', { classList: ['today__windSpeed'] });
  const humidity = createElement('span', { classList: ['today__humidity'] });
  return (language) => {
    if (language === 'ru') {
      translate(language, result.list[0].weather[0].description).then((value) => {
        summary.textContent = String(value).toUpperCase();
      });
      apparentTemp.textContent = `ОЩУЩАЕТСЯ КАК: ${result.list[0].main.feels_like}°`;
      if (measure === 'imperial') {
        windSpeed.innerHTML = `ВЕТЕР: ${result.list[0].wind.speed} миль/ч`;
      } else {
        windSpeed.innerHTML = `ВЕТЕР: ${result.list[0].wind.speed} м/c`;
      }
      humidity.innerHTML = `ВЛАЖНОСТЬ: ${result.list[0].main.humidity} %`;
    } else if (language === 'be') {
      translate(language, result.list[0].weather[0].description).then((value) => {
        summary.textContent = String(value).toUpperCase();
      });
      apparentTemp.textContent = `АДЧУВАЕЦЦА ЯК: ${result.list[0].main.feels_like}°`;
      if (measure === 'imperial') {
        windSpeed.innerHTML = `ВЕЦЕР: ${result.list[0].wind.speed} міль/г`;
      } else {
        windSpeed.innerHTML = `ВЕЦЕР: ${result.list[0].wind.speed} м/c`;
      }
      humidity.innerHTML = `ВІЛЬГОТНАСЦЬ: ${result.list[0].main.humidity} %`;
    } else {
      summary.textContent = result.list[0].weather[0].description.toUpperCase();
      apparentTemp.textContent = `FEELS LIKE: ${result.list[0].main.feels_like}°`;
      if (measure === 'imperial') {
        windSpeed.innerText = `WIND: ${result.list[0].wind.speed} mph`;
      } else {
        windSpeed.innerText = `WIND: ${result.list[0].wind.speed} m/s`;
      }
      humidity.innerText = `HUMIDITY: ${result.list[0].main.humidity} %`;
    }
    return [summary, apparentTemp, windSpeed, humidity];
  };
}

function showTothreedays(result, iweather) {
  const tomorromDay = createElement('span', {
    classList: ['tomorrow-day'],
  });
  const tomorromTemp = createElement('span', {
    classList: ['tomorrow-temp'],
    innerText: `${Math.round(result.list[iweather].main.temp)}°`,
  });
  const tomorromImage = createElement('img', {
    classList: ['tomorrow-image'],
    src: `http://openweathermap.org/img/wn/${result.list[iweather].weather[0].icon}@2x.png`,
  });
  return (language) => {
    if (language === 'ru') {
      tomorromDay.innerText = DAYWEEK_RU[new Date(result.list[iweather].dt_txt).getDay()];
    } else if (language === 'be') {
      tomorromDay.innerText = DAYWEEK_BE[new Date(result.list[iweather].dt_txt).getDay()];
    } else {
      tomorromDay.innerText = DAYWEEK_EN[new Date(result.list[iweather].dt_txt).getDay()];
    }
    return [tomorromDay, tomorromTemp, tomorromImage];
  };
}

module.exports = {
  showToday,
  showTothreedays,
};
