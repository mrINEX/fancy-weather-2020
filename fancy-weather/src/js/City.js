class City {
  constructor({ geometry, formatted, components }) {
    this.geometry = geometry;
    this.formatted = formatted;
    this.components = components;
  }

  infoCity() {
    const spanCity = document.querySelector('.city');
    const spanCountry = document.querySelector('.country');

    if (this.components.city) {
      spanCity.textContent = `${this.components.city.toUpperCase()},`;
      spanCountry.textContent = ` ${this.components.country.toUpperCase()}`;
    } else if (this.components.county) {
      spanCity.textContent = `${this.components.county.toUpperCase()},`;
      spanCountry.textContent = ` ${this.components.country.toUpperCase()}`;
    } else if (this.components.state) {
      spanCity.textContent = `${this.components.state.toUpperCase()},`;
      spanCountry.textContent = ` ${this.components.country.toUpperCase()}`;
    } else if (this.components.county) {
      spanCity.textContent = '';
      spanCountry.textContent = `${this.formatted}`;
    } else {
      spanCity.textContent = '';
      spanCountry.textContent = `Country: ${this.components.country.toUpperCase()}`;
    }
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
