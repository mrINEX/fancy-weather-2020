import createElement from './createElement';
import { exist, say } from './exist';
import { storageGet } from './localStorage';

export default class City {
  constructor({
    geometry, formatted, components, url,
  }) {
    this.formatted = formatted;
    this.city = components.city;
    this.county = components.county;
    this.country = components.country;
    this.state = components.state;
    this.town = components.town;

    this.map = url;
    this.latitude = geometry.lat;
    this.longitude = geometry.lng;
  }

  infoCity(language) {
    exist('.today__city');
    const todayCity = createElement('div', { classList: ['today__city'] });
    this.transtaleCity(language).forEach((element) => todayCity.append(element));
    document.querySelector('.today').append(todayCity);
  }

  infoDate(language) {
    exist('.today__date-time');
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
    exist('.today__speak');
    exist('.today__volume');
    exist('.today__news');
    const todaySpeak = createElement('div', { classList: ['today__speak'] });
    const todayKey = createElement('span', {
      classList: ['today__volume'],
      innerText: '50%',
    });
    const todayNews = createElement('button', {
      classList: ['today__news'],
      innerText: 'news',
    });
    todayNews.onclick = () => {
      document.querySelector('.weather').classList.add('event-none');
      this.infoNews(storageGet('language'));
    };
    todaySpeak.onclick = () => {
      say('speak weather');
    };
    document.querySelector('.today').append(todayWeather, todayNews, todayKey, todaySpeak);
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

  infoNews(language) {
    const newsBlock = createElement('div', { classList: ['news__block'] });
    const close = createElement('button', {
      classList: ['news__close'],
      innerText: 'return',
    });
    close.onclick = () => {
      document.querySelector('.weather').classList.remove('event-none');
      newsBlock.remove();
    };
    newsBlock.append(close);
    this.news.forEach((val) => {
      const element = val(language);
      newsBlock.append(element);
    });
    document.querySelector('.weather').after(newsBlock);
  }
}
