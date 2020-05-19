const { createElement } = require('./createElement');
const { exist } = require('./exist');

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

  infoCity(language) {
    const todayCity = createElement('div', { classList: ['today__city'] });
    this.transtaleCity(language).forEach((element) => todayCity.append(element));
    document.querySelector('.today').append(todayCity);
  }

  infoDate(language) {
    const todayTime = createElement('div', { classList: ['today__date-time'] });
    this.dateTime(language).forEach((element) => todayTime.append(element));
    document.querySelector('.today').append(todayTime);
  }

  infoWeatherToday(language) {
    exist('.today__weather');
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
    this.todayWeatherDescription(language).forEach((element) => description.append(element));
    todayWeather.append(temp, image, description);
    document.querySelector('.today').append(todayWeather);
  }

  infoWeatherTothreedays(language) {
    exist('.tothreedays');
    const tothreedays = createElement('div', { classList: ['tothreedays'] });
    this.tothreedaysWeather.forEach((element) => {
      const tomorrow = createElement('div', { classList: ['tothreedays-tomorrow'] });
      tomorrow.append(...element(language));
      tothreedays.append(tomorrow);
    });
    document.querySelector('.wrapperForWeather').append(tothreedays);
  }

  infoMap(language) {
    exist('.geodata');
    const geodata = createElement('div', { classList: ['geodata'] });
    const mapiframe = createElement('iframe', {
      classList: ['maps'],
      src: this.map,
    });
    geodata.append(mapiframe);
    this.translateMap(language).forEach((element) => geodata.append(element));
    document.querySelector('.main-weather').append(geodata);
  }
}

module.exports = {
  City,
};
