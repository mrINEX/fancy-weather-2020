import createElement from './createElement';

const background = createElement('div', {
  classList: ['weather', 'wrapper'],
});
const wrapper = createElement('div', { classList: ['content'] });
const imageDefault = createElement('img', {
  classList: ['weather-default', 'hidden'],
  src: './src/assets/img/weather-default.jpg',
});
const loader = createElement('div', {
  classList: ['loader'],
});
const nav = createElement('nav', { classList: ['nav'] });
const navLeft = createElement('div', { classList: ['nav-left'] });
const navRight = createElement('div', { classList: ['nav-right'] });
const buttonSwitch = createElement('div', { classList: ['switch'] });
const refresh = createElement('div', { classList: ['refresh'] });
const buttonLanguage = createElement('select', {
  classList: ['language'],
  name: 'select',
});
const optionEn = createElement('option', { classList: ['en'], value: 'en', innerText: 'EN' });
const optionRu = createElement('option', { classList: ['ru'], value: 'ru', innerText: 'RU' });
const optionBe = createElement('option', { classList: ['be'], value: 'be', innerText: 'BE' });

const buttonFC = createElement('div', { classList: ['degrees'] });
const divF = createElement('div', { classList: ['degreeF'] });
const divC = createElement('div', { classList: ['degreeC'] });
const spanF = createElement('span', { classList: ['fahrenheit'], innerText: '°F' });
const spanC = createElement('span', { classList: ['celsius'], innerText: '°С' });

const buttonSearch = createElement('div', { classList: ['wrappersearch'] });
const inputSearch = createElement('input', {
  classList: ['searchcityinput'],
  placeholder: 'Search city',
  type: 'text',
});
const imgVoice = createElement('img', {
  classList: ['imgVoice'],
  src: './src/assets/img/voiceicon.png',
});
const inputSubmit = createElement('input', {
  classList: ['searchcityclick'],
  value: 'SEARCH',
  type: 'submit',
});

const mainWeather = createElement('div', { classList: ['main-weather', 'weather-opacity'] });
const wrapperForWeather = createElement('main', { classList: ['wrapperForWeather'] });
const today = createElement('div', { classList: ['today'] });

background.append(wrapper, imageDefault, loader);
wrapper.append(nav);
wrapper.append(mainWeather);
mainWeather.append(wrapperForWeather);
nav.append(navLeft);
nav.append(navRight);
navLeft.append(buttonSwitch);
navLeft.append(buttonLanguage);
navLeft.append(buttonFC);
navRight.append(buttonSearch);
wrapperForWeather.append(today);
buttonSwitch.append(refresh);
buttonLanguage.append(optionEn);
buttonLanguage.append(optionRu);
buttonLanguage.append(optionBe);
buttonFC.append(divF);
buttonFC.append(divC);
divF.append(spanF);
divC.append(spanC);
buttonSearch.append(inputSearch);
buttonSearch.append(imgVoice);
buttonSearch.append(inputSubmit);

const keyVoice = createElement('p', {
  innerHTML: `озвучить прогноз погоды (voice weather forecast) key:
  <strong style="color: darkred;">"speak weather"</strong>`,
}, {
  'text-align-last': 'center',
});
const keyVolume = createElement('p', {
  innerHTML: `настройка звука (sound setting) key:
  <strong style="color: darkred;">"volume 1 - 100%"</strong>`,
}, {
  'text-align-last': 'center',
});

document.querySelector('body').append(background, keyVoice, keyVolume);
