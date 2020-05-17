const { createElement } = require('./createElement');

class City {
  constructor({
    geometry, formatted, components, url,
  }) {
    this.formatted = formatted;
    this.city = components.city;
    this.county = components.county;
    this.country = components.country;
    this.state = components.state;

    this.map = url;
    this.latitude = geometry.lat;
    this.longitude = geometry.lng;
  }

  infoCity() {
    const todayCity = createElement('div', { classList: ['today__city'] });
    const city = createElement('span', {
      innerText: `${this.city || this.state || this.formatted},`,
    });
    const country = createElement('span', {
      innerText: ` ${this.country || this.county}`,
    });
    todayCity.append(city, country);
    document.querySelector('.today').append(todayCity);
  }

  infoDate() {
    const todayTime = createElement('div', { classList: ['today__date-time'] });
    const spanDate = createElement('span', {
      innerText: `${this.day} ${this.date} ${this.month}`,
    });
    const spanTime = createElement('span', {
      classList: ['current-time'],
      innerText: `${this.time}`,
    });
    todayTime.append(spanDate, spanTime);
    document.querySelector('.today').append(todayTime);
  }

  infoWeatherToday() {
    const todayWeather = createElement('div', { classList: ['today__weather'] });
    const temp = createElement('span', {
      classList: ['today__temp'],
      innerText: this.todayWeatherTemp,
    });
    const image = createElement('img', {
      classList: ['today__image'],
      src: this.todayWeatherIcon,
    });
    const description = createElement('div', { classList: ['today__description'] });
    this.todayWeatherDescription.forEach((element) => description.append(element));
    todayWeather.append(temp, image, description);
    document.querySelector('.today').append(todayWeather);
  }

  infoMap() {
    document.querySelector('.maps').src = this.map;
    const storageLanguage = localStorage.getItem('language');
    const latitude = document.querySelector('.latitude');
    const longitude = document.querySelector('.longitude');
    switch (storageLanguage) {
      case 'ru':
        latitude.textContent = `Широта: ${this.latitude}`;
        longitude.textContent = `Долгота: ${this.longitude}`;
        break;
      case 'be':
        latitude.textContent = `Шырата: ${this.latitude}`;
        longitude.textContent = `Даўгата: ${this.longitude}`;
        break;
      default:
        latitude.textContent = `Latitude: ${this.latitude}`;
        longitude.textContent = `Longitude: ${this.longitude}`;
    }
  }
}

module.exports = {
  City,
};
