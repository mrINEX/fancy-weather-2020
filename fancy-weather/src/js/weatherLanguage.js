const DAYWEEK_EN = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const DAYWEEK_RU = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
const DAYWEEK_BE = ['Нядзеля', 'Панядзелак', 'Аўторак', 'Серада', 'Чацвер', 'Пятніца', 'Субота'];
const MONTH_EN = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const MONTH_RU = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
const MONTH_BE = ['Студзень', 'Люты', 'Сакавік', 'Красавік', 'Май', 'Чэрвень', 'Ліпень', 'Жнівень', 'Верасень', 'Кастрычнік', 'Лістапад', 'Снежань'];

const { createElement } = require('./createElement');
const { translate } = require('./translate');

function inputTranslate(City) {
  return (language) => {
    const placeholderElem = document.querySelector('.searchcityinput');
    const valueElem = document.querySelector('.searchcityclick');
    if (language === 'ru') {
      placeholderElem.placeholder = 'Город поиск';
      valueElem.value = 'ПОИСК';
    } else if (language === 'be') {
      placeholderElem.placeholder = 'Горад пошук';
      valueElem.value = 'ПОШУК';
    } else {
      placeholderElem.placeholder = City.placeholderInput;
      valueElem.value = City.valueInput;
    }
  };
}

function cityTranslate(City) {
  const city = createElement('span', {
    innerText: `${City.city || City.state || City.formatted},`,
  });
  const country = createElement('span', {
    innerText: ` ${City.country || City.county}`,
  });
  return (language) => {
    if (language === 'ru' || language === 'be') {
      translate(language, city.textContent).then((value) => {
        city.innerText = value;
      });
      translate(language, country.textContent).then((value) => {
        country.innerText = value;
      });
    } else {
      city.innerText = `${City.city || City.state || City.formatted},`;
      country.innerText = ` ${City.country || City.county}`;
    }
    return [city, country];
  };
}

function showTimeDate(today) {
  const spanDate = createElement('span');
  const spanTime = createElement('span', {
    classList: ['current-time'],
    innerText: `${String(today).substring(16, 21)}`,
  });
  return (language) => {
    let day;
    const date = String(today).substring(8, 10);
    let month;
    if (language === 'ru') {
      day = DAYWEEK_RU[today.getDay()];
      month = MONTH_RU[today.getMonth()];
    } else if (language === 'be') {
      day = DAYWEEK_BE[today.getDay()];
      month = MONTH_BE[today.getMonth()];
    } else {
      day = DAYWEEK_EN[today.getDay()];
      month = MONTH_EN[today.getMonth()];
    }
    spanDate.innerText = `${day} ${date} ${month}`;
    return [spanDate, spanTime];
  };
}

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

function mapTranslate(lat, lon) {
  const latitude = createElement('span', { classList: ['latitude'] });
  const longitude = createElement('span', { classList: ['longitude'] });
  return (language) => {
    if (language === 'ru') {
      latitude.textContent = `Широта: ${lat}`;
      longitude.textContent = `Долгота: ${lon}`;
    } else if (language === 'be') {
      latitude.textContent = `Шырата: ${lat}`;
      longitude.textContent = `Даўгата: ${lon}`;
    } else {
      latitude.textContent = `Latitude: ${lat}`;
      longitude.textContent = `Longitude: ${lon}`;
    }
    return [latitude, longitude];
  };
}

module.exports = {
  inputTranslate,
  cityTranslate,
  showToday,
  showTothreedays,
  showTimeDate,
  mapTranslate,
};
