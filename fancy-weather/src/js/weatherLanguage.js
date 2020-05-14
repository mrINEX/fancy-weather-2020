const show = {
  apparentTemp: document.querySelector('.apparentTemp'),
  windSpeed: document.querySelector('.windSpeed'),
  humidity: document.querySelector('.humidity'),
  showEN(result, measure) {
    this.apparentTemp.textContent = `FEELS LIKE: ${result.list[0].main.feels_like}`;
    if (measure === 'imperial') {
      this.windSpeed.innerHTML = `WIND: ${result.list[0].wind.speed} mph`;
    } else {
      this.windSpeed.innerHTML = `WIND: ${result.list[0].wind.speed} m/s`;
    }
    this.humidity.innerHTML = `HUMIDITY: ${result.list[0].main.humidity} %`;
  },

  showRU(result, measure) {
    this.apparentTemp.textContent = `ОЩУЩАЕТСЯ КАК: ${result.list[0].main.feels_like}`;
    if (measure === 'imperial') {
      this.windSpeed.innerHTML = `ВЕТЕР: ${result.list[0].wind.speed} миль/ч`;
    } else {
      this.windSpeed.innerHTML = `ВЕТЕР: ${result.list[0].wind.speed} м/c`;
    }
    this.humidity.innerHTML = `ВЛАЖНОСТЬ: ${result.list[0].main.humidity} %`;
  },

  showBE(result, measure) {
    this.apparentTemp.textContent = `АДЧУВАЕЦЦА ЯК: ${result.list[0].main.feels_like}`;
    if (measure === 'imperial') {
      this.windSpeed.innerHTML = `ВЕЦЕР: ${result.list[0].wind.speed} міль/г`;
    } else {
      this.windSpeed.innerHTML = `ВЕЦЕР: ${result.list[0].wind.speed} м/c`;
    }
    this.humidity.innerHTML = `ВІЛЬГОТНАСЦЬ: ${result.list[0].main.humidity} %`;
  },
};

module.exports = {
  show,
};
