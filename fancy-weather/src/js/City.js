const { createElement } = require('./createElement');

class City {
  constructor({ geometry, formatted, components }) {
    this.geometry = geometry;
    this.formatted = formatted;
    this.components = components;
  }

  infoCity() {
    const todayCity = createElement('div', { classList: ['today__city'] });
    const city = createElement('span');
    const country = createElement('span');
    todayCity.append(city, country);

    if (this.components.city) {
      city.textContent = `${this.components.city.toUpperCase()},`;
      country.textContent = ` ${this.components.country.toUpperCase()}`;
    } else if (this.components.county) {
      city.textContent = `${this.components.county.toUpperCase()},`;
      country.textContent = ` ${this.components.country.toUpperCase()}`;
    } else if (this.components.state) {
      city.textContent = `${this.components.state.toUpperCase()},`;
      country.textContent = ` ${this.components.country.toUpperCase()}`;
    } else if (this.components.county) {
      city.textContent = '';
      country.textContent = `${this.formatted}`;
    } else {
      city.textContent = '';
      country.textContent = `Country: ${this.components.country.toUpperCase()}`;
    }
    document.querySelector('.today').append(todayCity);
  }

  infoGeometry() {
    const storageLanguage = localStorage.getItem('language');
    const latitude = document.querySelector('.latitude');
    const longitude = document.querySelector('.longitude');
    switch (storageLanguage) {
      case 'ru':
        latitude.textContent = `Широта: ${this.geometry.lat}`;
        longitude.textContent = `Долгота: ${this.geometry.lng}`;
        break;
      case 'be':
        latitude.textContent = `Шырата: ${this.geometry.lat}`;
        longitude.textContent = `Даўгата: ${this.geometry.lng}`;
        break;
      default:
        latitude.textContent = `Latitude: ${this.geometry.lat}`;
        longitude.textContent = `Longitude: ${this.geometry.lng}`;
    }
  }
}

module.exports = {
  City,
};
