const { createElement } = require('./createElement');

function show(result) {
  const summary = createElement('span', { classList: ['today__summary'] });
  const apparentTemp = createElement('span', { classList: ['today__apparentTemp'] });
  const windSpeed = createElement('span', { classList: ['today__windSpeed'] });
  const humidity = createElement('span', { classList: ['today__humidity'] });
  return (language, measure) => {
    if (language === 'ru') {
      summary.textContent = result.list[0].weather[0].description.toUpperCase();
      apparentTemp.textContent = `ОЩУЩАЕТСЯ КАК: ${result.list[0].main.feels_like}`;
      if (measure === 'imperial') {
        windSpeed.innerHTML = `ВЕТЕР: ${result.list[0].wind.speed} миль/ч`;
      } else {
        windSpeed.innerHTML = `ВЕТЕР: ${result.list[0].wind.speed} м/c`;
      }
      humidity.innerHTML = `ВЛАЖНОСТЬ: ${result.list[0].main.humidity} %`;
    }
    if (language === 'be') {
      summary.textContent = result.list[0].weather[0].description.toUpperCase();
      apparentTemp.textContent = `АДЧУВАЕЦЦА ЯК: ${result.list[0].main.feels_like}`;
      if (measure === 'imperial') {
        windSpeed.innerHTML = `ВЕЦЕР: ${result.list[0].wind.speed} міль/г`;
      } else {
        windSpeed.innerHTML = `ВЕЦЕР: ${result.list[0].wind.speed} м/c`;
      }
      humidity.innerHTML = `ВІЛЬГОТНАСЦЬ: ${result.list[0].main.humidity} %`;
    } else {
      summary.textContent = result.list[0].weather[0].description.toUpperCase();
      apparentTemp.textContent = `FEELS LIKE: ${result.list[0].main.feels_like}`;
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

module.exports = {
  show,
};
