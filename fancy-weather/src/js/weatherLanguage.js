const { createElement } = require('./createElement');

const show = {
  summary: createElement('span', { classList: ['today__summary'] }),
  apparentTemp: createElement('span', { classList: ['today__apparentTemp'] }),
  windSpeed: createElement('span', { classList: ['today__windSpeed'] }),
  humidity: createElement('span', { classList: ['today__humidity'] }),
  showEN(result, measure) {
    this.summary.textContent = result.list[0].weather[0].description.toUpperCase();
    this.apparentTemp.textContent = `FEELS LIKE: ${result.list[0].main.feels_like}`;
    if (measure === 'imperial') {
      this.windSpeed.innerHTML = `WIND: ${result.list[0].wind.speed} mph`;
    } else {
      this.windSpeed.innerHTML = `WIND: ${result.list[0].wind.speed} m/s`;
    }
    this.humidity.innerHTML = `HUMIDITY: ${result.list[0].main.humidity} %`;
    return [this.summary, this.apparentTemp, this.windSpeed, this.humidity];
  },

  showRU(result, measure) {
    this.summary.textContent = result.list[0].weather[0].description.toUpperCase();
    this.apparentTemp.textContent = `ОЩУЩАЕТСЯ КАК: ${result.list[0].main.feels_like}`;
    if (measure === 'imperial') {
      this.windSpeed.innerHTML = `ВЕТЕР: ${result.list[0].wind.speed} миль/ч`;
    } else {
      this.windSpeed.innerHTML = `ВЕТЕР: ${result.list[0].wind.speed} м/c`;
    }
    this.humidity.innerHTML = `ВЛАЖНОСТЬ: ${result.list[0].main.humidity} %`;
    return [this.summary, this.apparentTemp, this.windSpeed, this.humidity];
  },

  showBE(result, measure) {
    this.summary.textContent = result.list[0].weather[0].description.toUpperCase();
    this.apparentTemp.textContent = `АДЧУВАЕЦЦА ЯК: ${result.list[0].main.feels_like}`;
    if (measure === 'imperial') {
      this.windSpeed.innerHTML = `ВЕЦЕР: ${result.list[0].wind.speed} міль/г`;
    } else {
      this.windSpeed.innerHTML = `ВЕЦЕР: ${result.list[0].wind.speed} м/c`;
    }
    this.humidity.innerHTML = `ВІЛЬГОТНАСЦЬ: ${result.list[0].main.humidity} %`;
    return [this.summary, this.apparentTemp, this.windSpeed, this.humidity];
  },
};

module.exports = {
  show,
};
