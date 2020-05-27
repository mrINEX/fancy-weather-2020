import './js/create';
import location from './js/api.locationUser';
import getCountry from './js/api.locationUserCountry';
import getMap from './js/api.locationUserMap';
import getZone from './js/api.locationTimeZone';
import getNews from './js/api.locationNews';
import translate from './js/translate';
import { storageGet } from './js/localStorage';
import City from './js/City';
import { inputTranslate, showTimeDate } from './js/translate-creator';
import createElement from './js/createElement';

require('jest-fetch-mock').enableMocks();

fetchMock.dontMock();

test('api location:', () => {
  location().then((data) => {
    expect(data).toBeDefind();
  });
});
test('api translate:', () => {
  translate('ru', 'node').then((data) => {
    expect(data[0]).toBe('узел');
  });
});
test('translate-creator should return for input function:', () => {
  expect(inputTranslate()).toBeInstanceOf(Function);
});
test('translate-creator should return for time and date function:', () => {
  expect(showTimeDate()).toBeInstanceOf(Function);
});
test('api country:', () => {
  getCountry('minsk').then((data) => {
    expect(data).toBeDefind();
    const city = new City(data.results[0]);
    expect(city).toBeDefind();
  });
});
test('api map:', () => {
  getCountry('minsk').then((data) => {
    expect(data).toBeDefind();
    expect(getMap(new City(data.results[0]))).toBeDefind();
  });
});
test('api zone:', () => {
  getCountry('minsk').then((data) => {
    expect(data).toBeDefind();
    expect(getZone(new City(data.results[0]))).toBeDefind();
  });
});
test('api news:', () => {
  getCountry('minsk').then((data) => {
    expect(data).toBeDefind();
    expect(getNews(new City(data.results[0]))).toBeDefind();
  });
});
test('should return span element', () => {
  expect(createElement('span', {
    classList: ['testing-span'],
  })).toBeInstanceOf(HTMLSpanElement);
});
test('should return language', () => {
  const language = storageGet('language');
  expect(language).toBe('en');
  expect(language).not.toBe('ru');
  expect(language).not.toBe('be');
});
